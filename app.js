
const PREDICTIONS = {
  "Laura": [
    "Arsenal",
    "Liverpool",
    "Manchester United",
    "Chelsea",
    "Manchester City",
    "Newcastle United",
    "Leeds United",
    "Tottenham Hotspur",
    "Aston Villa",
    "Crystal Palace",
    "Everton",
    "Fulham",
    "Brentford",
    "Coventry City",
    "Nottingham Forest",
    "Sunderland",
    "Ipswich Town",
    "Brighton & Hove Albion",
    "AFC Bournemouth",
    "Hull City"
  ],
  "George": [
    "Arsenal",
    "Liverpool",
    "Chelsea",
    "Manchester City",
    "Manchester United",
    "Aston Villa",
    "Brighton & Hove Albion",
    "Sunderland",
    "Brentford",
    "AFC Bournemouth",
    "Tottenham Hotspur",
    "Crystal Palace",
    "Nottingham Forest",
    "Fulham",
    "Newcastle United",
    "Everton",
    "Ipswich Town",
    "Coventry City",
    "Leeds United",
    "Hull City"
  ],
  "Pat": [
    "Arsenal",
    "Aston Villa",
    "Liverpool",
    "Manchester City",
    "Manchester United",
    "Tottenham Hotspur",
    "AFC Bournemouth",
    "Brighton & Hove Albion",
    "Newcastle United",
    "Nottingham Forest",
    "Sunderland",
    "Chelsea",
    "Crystal Palace",
    "Everton",
    "Fulham",
    "Hull City",
    "Ipswich Town",
    "Leeds United",
    "Brentford",
    "Coventry City"
  ],
  "Michael": [
    "Arsenal",
    "Manchester City",
    "Manchester United",
    "Chelsea",
    "Liverpool",
    "Aston Villa",
    "Newcastle United",
    "Sunderland",
    "Brighton & Hove Albion",
    "Tottenham Hotspur",
    "Everton",
    "Brentford",
    "Leeds United",
    "Crystal Palace",
    "AFC Bournemouth",
    "Fulham",
    "Nottingham Forest",
    "Ipswich Town",
    "Coventry City",
    "Hull City"
  ],
  "Patrick": [
    "Arsenal",
    "Chelsea",
    "Manchester City",
    "Liverpool",
    "Tottenham Hotspur",
    "Manchester United",
    "Aston Villa",
    "Leeds United",
    "Brentford",
    "Brighton & Hove Albion",
    "Newcastle United",
    "Nottingham Forest",
    "Everton",
    "Crystal Palace",
    "AFC Bournemouth",
    "Sunderland",
    "Fulham",
    "Coventry City",
    "Ipswich Town",
    "Hull City"
  ],
  "Barry": [
    "Chelsea",
    "Arsenal",
    "Manchester City",
    "Liverpool",
    "Manchester United",
    "Aston Villa",
    "Nottingham Forest",
    "Tottenham Hotspur",
    "Brentford",
    "Leeds United",
    "Everton",
    "Newcastle United",
    "Crystal Palace",
    "Brighton & Hove Albion",
    "AFC Bournemouth",
    "Sunderland",
    "Coventry City",
    "Fulham",
    "Ipswich Town",
    "Hull City"
  ],
  "Irene": [
    "Arsenal",
    "Manchester City",
    "Manchester United",
    "Liverpool",
    "Sunderland",
    "Everton",
    "AFC Bournemouth",
    "Newcastle United",
    "Nottingham Forest",
    "Chelsea",
    "Crystal Palace",
    "Aston Villa",
    "Tottenham Hotspur",
    "Leeds United",
    "Ipswich Town",
    "Fulham",
    "Coventry City",
    "Brighton & Hove Albion",
    "Brentford",
    "Hull City"
  ],
  "Jon": [
    "Arsenal",
    "Manchester City",
    "Manchester United",
    "Chelsea",
    "Liverpool",
    "Aston Villa",
    "AFC Bournemouth",
    "Tottenham Hotspur",
    "Newcastle United",
    "Crystal Palace",
    "Fulham",
    "Sunderland",
    "Brighton & Hove Albion",
    "Brentford",
    "Everton",
    "Coventry City",
    "Nottingham Forest",
    "Leeds United",
    "Ipswich Town",
    "Hull City"
  ]
};

const FALLBACK_STANDINGS = [
  {
    "pos": 1,
    "club": "AFC Bournemouth",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 2,
    "club": "Arsenal",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 3,
    "club": "Aston Villa",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 4,
    "club": "Brentford",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 5,
    "club": "Brighton & Hove Albion",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 6,
    "club": "Chelsea",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 7,
    "club": "Coventry City",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 8,
    "club": "Crystal Palace",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 9,
    "club": "Everton",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 10,
    "club": "Fulham",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 11,
    "club": "Hull City",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 12,
    "club": "Ipswich Town",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 13,
    "club": "Leeds United",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 14,
    "club": "Liverpool",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 15,
    "club": "Manchester City",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 16,
    "club": "Manchester United",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 17,
    "club": "Newcastle United",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 18,
    "club": "Nottingham Forest",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 19,
    "club": "Sunderland",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  },
  {
    "pos": 20,
    "club": "Tottenham Hotspur",
    "p": 0,
    "w": 0,
    "d": 0,
    "l": 0,
    "gf": 0,
    "ga": 0,
    "gd": 0,
    "pts": 0
  }
];

const ALIASES = {
  "Bournemouth": "AFC Bournemouth",
  "Brighton": "Brighton & Hove Albion",
  "Brighton and Hove Albion": "Brighton & Hove Albion",
  "Man City": "Manchester City",
  "Manchester Utd": "Manchester United",
  "Man United": "Manchester United",
  "Newcastle": "Newcastle United",
  "Nottm Forest": "Nottingham Forest",
  "Spurs": "Tottenham Hotspur",
  "Tottenham": "Tottenham Hotspur"
};

function canonicalClub(name) {
  return ALIASES[name] || name;
}

function numberOrZero(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function cleanRow(row, index) {
  return {
    pos: numberOrZero(row.pos) || index + 1,
    club: canonicalClub(String(row.club || "")),
    p: numberOrZero(row.p),
    w: numberOrZero(row.w),
    d: numberOrZero(row.d),
    l: numberOrZero(row.l),
    gf: numberOrZero(row.gf),
    ga: numberOrZero(row.ga),
    gd: numberOrZero(row.gd),
    pts: numberOrZero(row.pts)
  };
}

function formatUpdated(value) {
  if (!value) return "not available";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/London"
  }).format(d);
}

function rankScores(scores) {
  scores.sort((a,b) => a.score - b.score || a.name.localeCompare(b.name));
  let previousScore = null;
  let previousRank = 0;
  return scores.map((item, i) => {
    const rank = item.score === previousScore ? previousRank : i + 1;
    previousScore = item.score;
    previousRank = rank;
    return {...item, rank};
  });
}

function renderLeaderboard(rows) {
  const target = document.getElementById("leaderboardRows");
  const started = rows.some(r => r.p > 0);
  if (!started) {
    target.innerHTML = Object.keys(PREDICTIONS).map(name => `
      <div class="leader-row">
        <div class="rank">—</div>
        <div class="person">${name}</div>
        <div class="score">Starts after first match</div>
      </div>`).join("");
    document.getElementById("leaderStatus").textContent =
      "The league has not started yet, so nobody has a score. Lowest total wins once matches are played.";
    return;
  }

  const positions = new Map(rows.map(r => [canonicalClub(r.club), r.pos]));
  const missing = new Set();
  const scores = Object.entries(PREDICTIONS).map(([name, picks]) => {
    let score = 0;
    for (let i=0; i<picks.length; i++) {
      const current = positions.get(canonicalClub(picks[i]));
      if (!current) missing.add(picks[i]);
      else score += Math.abs((i+1) - current);
    }
    return {name, score};
  });

  if (missing.size) {
    document.getElementById("dataWarning").classList.add("show");
    document.getElementById("dataWarning").textContent =
      "The live data did not contain every expected club, so scores may be incomplete. Missing: " +
      [...missing].join(", ");
  } else {
    document.getElementById("dataWarning").classList.remove("show");
  }

  const ranked = rankScores(scores);
  target.innerHTML = ranked.map(item => `
    <div class="leader-row ${item.rank === 1 ? "first" : ""}">
      <div class="rank">${item.rank}</div>
      <div class="person">${item.name}</div>
      <div class="score">${item.score} points</div>
    </div>`).join("");
  const leaders = ranked.filter(x => x.rank === 1).map(x => x.name).join(" & ");
  document.getElementById("leaderStatus").textContent =
    `Current leader${ranked.filter(x=>x.rank===1).length > 1 ? "s" : ""}: ${leaders}. Lowest score wins.`;
}

function renderLeagueTable(rows) {
  document.getElementById("leagueBody").innerHTML = rows
    .slice()
    .sort((a,b)=>a.pos-b.pos)
    .map(r => `
      <tr>
        <td class="num"><strong>${r.pos}</strong></td>
        <td><strong>${r.club}</strong></td>
        <td class="num">${r.p}</td>
        <td class="num optional-col">${r.w}</td>
        <td class="num optional-col">${r.d}</td>
        <td class="num optional-col">${r.l}</td>
        <td class="num optional-col">${r.gd}</td>
        <td class="num"><strong>${r.pts}</strong></td>
      </tr>`).join("");
}

function renderPredictions() {
  const container = document.getElementById("predictionCards");
  container.innerHTML = Object.entries(PREDICTIONS).map(([name,picks]) => `
    <details>
      <summary><span>${name}</span><span aria-hidden="true">View ▾</span></summary>
      <div class="table-wrap prediction-table">
        <table>
          <thead><tr><th>Place</th><th>Predicted team</th></tr></thead>
          <tbody>
            ${picks.map((team,i)=>`<tr><td>${i+1}</td><td><strong>${team}</strong></td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </details>`).join("");
}

async function getStandings() {
  try {
    const response = await fetch(`standings.json?ts=${Date.now()}`, {cache:"no-store"});
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    if (!Array.isArray(data.standings) || data.standings.length !== 20) {
      throw new Error("Standings file did not contain 20 clubs");
    }
    return {
      rows: data.standings.map(cleanRow),
      updatedAt: data.generatedAt,
      source: data.source || "Live standings feed",
      fallback: false
    };
  } catch (err) {
    console.error(err);
    return {
      rows: FALLBACK_STANDINGS.map(cleanRow),
      updatedAt: null,
      source: "Built-in pre-season fallback",
      fallback: true
    };
  }
}

async function refresh() {
  const info = await getStandings();
  renderLeagueTable(info.rows);
  renderLeaderboard(info.rows);
  document.getElementById("updated").textContent = formatUpdated(info.updatedAt);
  document.getElementById("source").textContent = info.source;
  if (info.fallback) {
    const warning = document.getElementById("dataWarning");
    warning.classList.add("show");
    warning.textContent = "The live standings could not be reached. The page is showing the built-in fallback table.";
  }
}

renderPredictions();
refresh();
setInterval(refresh, 15 * 60 * 1000);
