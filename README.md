# Amit Makwana — Portfolio

Static site: HTML, CSS and vanilla JavaScript. No build step.

```text
amit-portfolio/
├── index.html
├── css/style.css
├── js/main.js          # CONFIG + projects data live here
├── assets/images/profile.jpg
├── assets/documents/resume.pdf
├── README.md
└── .nojekyll
```

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Replace the profile photo
Save the photo as `assets/images/profile.jpg` (portrait, about 4:5, ideally 800×1000 or larger). Until it exists, the page shows an "AM" placeholder.

## Add the resume
1. Put the file at `assets/documents/resume.pdf`.
2. In `js/main.js`, set `resumeAvailable: true`. The "Download Resume" link appears.

## Configure the contact form (Formspree)
1. Create a free form at https://formspree.io and copy its endpoint (`https://formspree.io/f/xxxxxxxx`).
2. Paste it into `CONFIG.formspreeEndpoint` in `js/main.js`.
3. Send a test message and confirm it reaches your inbox. The "not connected" notice hides once the endpoint is set.

A hidden honeypot field (`_gotcha`) provides basic spam protection. Enable Formspree's own spam filtering in your dashboard as well.

## Update email, LinkedIn, GitHub
Fill `email`, `linkedin`, `github` in `CONFIG`. Empty values are not shown.

## Add more projects
Add an object to the `projects` array in `js/main.js`. Fields: `id`, `number`, `title`, `category`, `description`, `points` (optional), `technologies`, `link` (optional), `visual` (`mcp`, `erp` or `generic`), `featured`. The layout renders automatically.

## Deploy on GitHub Pages
1. Create a GitHub repository and push these files to the `main` branch.
2. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Wait a minute; the site appears at `https://<user>.github.io/<repo>/`. All paths are relative, so the repository subpath works.

## Information to confirm before publishing
- Photo and resume file.
- Formspree endpoint, email, LinkedIn, GitHub.
- End date of the Keypress IT Services role (currently "August 2023 – Present").
- Which Advanced Odoo MCP Server capabilities are Amit's own work, and a verified project link.
- Odoo "11–19" range and "50+ modules" come from the original resume; confirm they are current.
