# Family Premier League Predictions 2026/27

This is a read-only website generated from the completed family predictions spreadsheet.

## What the family sees
- A large, simple family leaderboard.
- The current Premier League table.
- Each person's locked 1–20 prediction.
- No forms, edit fields, save buttons or logins.

## How the live scores work
`standings.json` is refreshed from ESPN by the GitHub Actions workflow in
`.github/workflows/update-standings.yml`, normally twice per hour.
The browser calculates each person's score from the locked predictions.

If the live update ever fails, GitHub keeps serving the most recent successful deployment.

## Publish it with GitHub Pages
1. Create a GitHub repository and upload all files in this folder, preserving the `.github/workflows` folders.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open **Actions** and run **Update standings and publish website** once if it has not run automatically.
5. GitHub will show the public website address.

Important privacy note: a normal GitHub Pages site is public on the internet. The family names and predictions on this site should be treated as public information.

## Locked predictions
The prediction data is hard-coded in `app.js`. Visitors cannot change it from the website.
Only the owner of the hosting repository could deliberately alter the source files and republish the site.
