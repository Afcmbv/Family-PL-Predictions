#!/usr/bin/env python3
import json
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

URL = "https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings"
EXPECTED = [
    "AFC Bournemouth","Arsenal","Aston Villa","Brentford","Brighton & Hove Albion",
    "Chelsea","Coventry City","Crystal Palace","Everton","Fulham","Hull City",
    "Ipswich Town","Leeds United","Liverpool","Manchester City","Manchester United",
    "Newcastle United","Nottingham Forest","Sunderland","Tottenham Hotspur"
]

ALIASES = {
    "Bournemouth": "AFC Bournemouth",
    "Brighton": "Brighton & Hove Albion",
    "Brighton and Hove Albion": "Brighton & Hove Albion",
    "Man City": "Manchester City",
    "Man United": "Manchester United",
    "Manchester Utd": "Manchester United",
    "Newcastle": "Newcastle United",
    "Nottm Forest": "Nottingham Forest",
    "Spurs": "Tottenham Hotspur",
    "Tottenham": "Tottenham Hotspur",
}

def canon(name):
    return ALIASES.get(name, name)

def find_entries(obj):
    if isinstance(obj, dict):
        standings = obj.get("standings")
        if isinstance(standings, dict) and isinstance(standings.get("entries"), list):
            return standings["entries"]
        if isinstance(obj.get("entries"), list) and obj.get("entries") and isinstance(obj["entries"][0], dict):
            sample = obj["entries"][0]
            if "team" in sample and "stats" in sample:
                return obj["entries"]
        for key in ("children", "groups"):
            if isinstance(obj.get(key), list):
                for child in obj[key]:
                    found = find_entries(child)
                    if found:
                        return found
        for value in obj.values():
            if isinstance(value, (dict, list)):
                found = find_entries(value)
                if found:
                    return found
    elif isinstance(obj, list):
        for item in obj:
            found = find_entries(item)
            if found:
                return found
    return None

def stat(stats, *keys):
    wanted = {k.lower() for k in keys}
    for item in stats or []:
        candidates = [
            item.get("abbreviation",""),
            item.get("name",""),
            item.get("shortDisplayName",""),
            item.get("displayName",""),
        ]
        if any(str(c).lower() in wanted for c in candidates):
            value = item.get("value")
            try:
                return int(float(value))
            except (TypeError, ValueError):
                pass
    return 0

params = urllib.parse.urlencode({"season":"2026","type":"0","level":"3"})
req = urllib.request.Request(
    URL + "?" + params,
    headers={"User-Agent":"Mozilla/5.0 FamilyPremierLeagueSite/1.0", "Accept":"application/json"}
)
with urllib.request.urlopen(req, timeout=30) as response:
    payload = json.load(response)

entries = find_entries(payload)
if not entries:
    raise RuntimeError("Could not find Premier League standings entries in ESPN response.")

rows = []
for index, entry in enumerate(entries, start=1):
    team = entry.get("team") or {}
    name = canon(team.get("displayName") or team.get("name") or "")
    stats = entry.get("stats") or []
    rank = stat(stats, "rank", "RK") or index
    rows.append({
        "pos": rank,
        "club": name,
        "p": stat(stats, "gamesPlayed", "GP"),
        "w": stat(stats, "wins", "W"),
        "d": stat(stats, "ties", "draws", "D", "T"),
        "l": stat(stats, "losses", "L"),
        "gf": stat(stats, "pointsFor", "goalsFor", "GF"),
        "ga": stat(stats, "pointsAgainst", "goalsAgainst", "GA"),
        "gd": stat(stats, "pointDifferential", "goalDifference", "GD"),
        "pts": stat(stats, "points", "PTS"),
    })

# Keep only the expected league clubs and require a complete table.
by_name = {canon(r["club"]): r for r in rows}
missing = [club for club in EXPECTED if club not in by_name]
if missing:
    raise RuntimeError("ESPN feed is missing expected clubs: " + ", ".join(missing))

clean = [by_name[c] for c in EXPECTED]
clean.sort(key=lambda r: r["pos"])

out = {
    "generatedAt": datetime.now(timezone.utc).isoformat(),
    "source": "ESPN Premier League standings feed",
    "season": "2026/27",
    "standings": clean,
}
Path("standings.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
print("Updated standings.json at", out["generatedAt"])
