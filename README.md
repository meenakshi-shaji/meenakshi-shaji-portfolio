# Meenakshi Shaji — Professional Portfolio

A responsive personal portfolio for Meenakshi Shaji, an early-career Data Science candidate pursuing data, analytics, BI, and software development opportunities. It uses semantic HTML, CSS, and vanilla JavaScript with no framework or build step.

## Profile

- **Education:** Bachelor of Technology in Data Science, SCMS School of Engineering and Technology, Kerala, India (2023–2027; graduation year 2027)
- **Previous education:** Class XII, Science, Girideepam Bethany Higher Secondary School (2022)
- **Internship:** Data Science & Machine Learning Intern, NeST Digital Academy, Ernakulam (2026; one-month industry immersion)
- **Campus focus:** Seeking internships and entry-level roles across Data Science, Analytics, Business Intelligence, and Software Development
- **Location:** Kerala, India
- **Email:** [meenakshishaji622@gmail.com](mailto:meenakshishaji622@gmail.com)
- **Phone:** [+91 6238582542](tel:+916238582542)
- **GitHub:** [meenakshi-shaji](https://github.com/meenakshi-shaji)
- **LinkedIn:** [meenakshi-shaji622](https://www.linkedin.com/in/meenakshi-shaji622/)

## Skills shown

- **Languages:** Python, SQL, C
- **Libraries:** Pandas, NumPy, Matplotlib
- **Tools:** Jupyter Notebook, VS Code, GitHub
- **Domains:** Data Science, Machine Learning, Data Analysis
- **Soft skills:** Problem Solving, Teamwork, Communication, Leadership, Time Management, Adaptability, Analytical Thinking, Attention to Detail
- **Languages spoken:** English, Malayalam

Project details are based on supplied resume/README information and the public repository files noted below. Do not interpret portfolio project descriptions as results from a local run.

## Internship experience

**Data Science & Machine Learning Intern — NeST Digital Academy, Ernakulam (2026)**

One-month industry immersion internship. Resume details include data preprocessing, exploratory data analysis, feature engineering with Python, machine learning techniques, and data visualization applied to real-world business problems.

## Courses and certificates

The seven titles below are provisional from the supplied list. No certificate files were present in the workspace; verify exact titles against the certificates before publishing.

- Full Stack Generative and Agentic AI with Python Certificate — Coursera
- Essentials of Prompt Engineering — AWS Training and Certification
- Foundation of Prompt Engineering — AWS Training and Certification
- Cloud Practitioner Essentials — AWS Training and Certification
- Data Science, Data Analytics and Business Analytics Workshop — Zoople Technologies
- Power BI Workshop — National Institute of Technology
- Advanced Software Engineering Job Simulation — Forage

## Features

- Editorial midnight-violet and dry-sage design with responsive layouts and a mobile navigation menu
- Profile, skills, internship, project, education, course, resume, and contact sections
- Four project filters (all and the three configured categories); project cards are generated from configuration
- Featured projects appear first: SalarySense AI, Echoes, and CampusCare
- Six standalone project logo SVGs and a portfolio favicon
- Failed project logo loads are replaced with labeled placeholders instead of broken-image icons
- Accessible keyboard focus, skip link, live status regions, and reduced-motion handling
- Client-side contact validation and configurable form-service submission; no service endpoint is configured yet
- Resume download links to the actual PDF at `assets/resume.pdf`; hosted previews reveal the link after the file responds successfully
- SEO title, description, and Open Graph metadata

## Technology

HTML5, CSS3, vanilla JavaScript, inline SVG logo assets, Butler for display headings, and DM Sans for body/UI, with serif and Arial fallbacks. Butler is loaded from Font Library and DM Sans from Google Fonts, so those font files require a network connection; system fallbacks work offline. Butler was created by Fabian De Smet; Font Library lists it under CC BY-SA. See the [Butler typeface page](https://fontlibrary.org/en/font/butler) and [creator's site](https://www.fabiandesmet.com/portfolio/butler-font/).

## Project structure

```text
.
├── index.html
├── styles.css
├── js/
│   ├── main.js
│   ├── projects.js
│   └── contact-config.js
└── assets/
    ├── favicon.svg
    ├── logos/
    │   ├── salarysense-logo.svg
    │   ├── gas-booking-logo.svg
    │   ├── echoes-logo.svg
    │   ├── campus-care-logo.svg
    │   ├── iam-arts-academy-logo.svg
    │   └── helpit-logo.svg
    └── resume.pdf (add your own file)
```

## Run locally

1. Open the project folder in VS Code.
2. Open `index.html` directly for a quick preview. Project cards and links work without a build step. The resume availability check requires an HTTP server.
3. For an HTTP preview, open a terminal in the project folder and run `python -m http.server 8000` (Python required), then visit `http://localhost:8000`.

No dependency installation is required.

## Maintain projects

Edit `window.portfolioConfig` in [`js/projects.js`](js/projects.js). Add one object per project with a unique `id`, `name`, `shortDescription`, `description`, `category`, `technologies`, `repositoryUrl`, `liveDemoUrl`, `logo`, and `featured` flag. Keep category values to exactly `Data Science & Machine Learning`, `Data Analytics & Business Intelligence`, or `Web Development`. Set `liveDemoUrl` to an empty string unless a working deployment is verified. Use the canonical repository URL; it remains valid across commits.

The filters display all three configured categories even when a category currently has no project. No GitHub API discovery or synchronization is configured; descriptions, tags, and demos are maintained manually. Never add tokens to frontend files. The current project ordering and `featured` flags prioritize SalarySense AI, Echoes, and CampusCare.

### Change logos

Replace the SVG at the path in a project's `logo` field, or update that path to another accessible SVG. Keep the viewBox proportions and include a `<title>` and `<desc>` in the SVG. Add a useful project-specific accessible name to the logo field/card if its role changes.

## Resume

The provided resume is stored at `assets/resume.pdf`. The download link uses this relative path and saves as `Meenakshi_Shaji_Resume.pdf`. When opened directly as a local file, the link is shown for this included PDF. When served over HTTP(S), the script reveals it only after the server confirms the file exists with a successful HEAD response.

## Contact form

The form validates name, email, subject, and message in the browser, limits field lengths, and includes a `_gotcha` spam honeypot. It POSTs to the endpoint in `js/contact-config.js` only when one is configured, disables the send button during the request, and reports success only after receiving an HTTP success response. With no endpoint configured, submitting opens a prefilled `mailto:` draft; the visitor must send it using their email app, and the website does not send or claim delivery. This portfolio is static and has no backend files; it does not connect to any of the six project applications or their databases. A public form endpoint is not a secret; do not place API keys or private credentials in this file.

### Configure email delivery

For this static site, Formspree is a suitable option. Create an account and a form, set its target email to `meenakshishaji622@gmail.com`, and complete any required verification. Copy the form endpoint from Integration settings and paste it as the `endpoint` string in `js/contact-config.js`, for example `https://formspree.io/f/your-form-id`. The endpoint ID is public; do not use an API key there. Formspree receives submissions and provides spam filtering; this form also includes its `_gotcha` honeypot. Deploy and submit a real test yourself. The form reports success only after the service returns an OK response. Formspree stores submissions in its service, so review its privacy and retention settings. A serverless/backend endpoint is an alternative when you need more control; keep private credentials on that server. No endpoint is set and no real contact submission was sent during this update. See [Formspree's form setup](https://help.formspree.io/articles/building-your-form/building-an-html-form/) and [honeypot guidance](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/).

## Project repository status

All six exact repository links are included in the site. Public GitHub pages/files were available to inspect for SalarySense AI, Gas Booking Management System, Echoes, and CampusCare. IAM Arts Academy and HelpIt returned 404 and remain unverified. The portfolio links to the supplied GitHub and LinkedIn profiles. Repository access does not prove a project has a live deployment. No repository was cloned or modified, and no project-specific README was edited. The SVG marks in this portfolio are original artwork, not claimed as official project logos. Open or clone each repository before preparing project-specific README updates or adding logo assets there.

SalarySense AI's public README, `requirements.txt`, and `database.py` were reviewed; the dependency file lists Streamlit, pandas, scikit-learn, joblib, matplotlib, reportlab, pdfplumber, nltk, and plotly, while `database.py` uses SQLite. Echoes' README and `package.json` were reviewed; its declared stack includes React, TypeScript, Vite, Three.js, React Three Fiber, Framer Motion, GSAP, and lucide-react. CampusCare's README, tree, and requirements file were reviewed; Flask is declared. Gas Booking's public `index.html` was inspected: it is currently a static interface with inline section switching and a fixed “Pending” label. This conflicts with resume details describing Java/MySQL and persistent booking workflows, so the live project representation is intentionally limited to the accessible implementation and the discrepancy is flagged. Public repositories were not run locally; no behavior or tests are claimed as verified. HelpIt's user-supplied README details conflict with the supplied resume's PHP/MySQL list and the repository currently returns 404; verify when access is restored. IAM Arts Academy also returned 404. Categories for the inaccessible projects are provisional.

| Project | Repository | State |
|---|---|---|
| SalarySense AI | [meenakshi-shaji/salarysense-ai](https://github.com/meenakshi-shaji/salarysense-ai) | README, requirements, and database module reviewed; not run locally |
| Gas Booking Management System | [meenakshi-shaji/gas-booking-system](https://github.com/meenakshi-shaji/gas-booking-system) | Public index inspected; static mockup conflicts with resume feature/stack notes |
| Echoes | [meenakshi-shaji/Echoes](https://github.com/meenakshi-shaji/Echoes) | README and package.json reviewed; not run locally |
| CampusCare | [meenakshi-shaji/campus-care](https://github.com/meenakshi-shaji/campus-care) | README, tree, and requirements reviewed; not run locally |
| IAM Arts Academy | [meenakshi-shaji/IAM-Arts-Academy](https://github.com/meenakshi-shaji/IAM-Arts-Academy) | Returned 404; details and category unverified |
| HelpIt | [meenakshi-shaji/helpit](https://github.com/meenakshi-shaji/helpit) | Returned 404; supplied README/resume stack discrepancy unresolved |

### Supplied project README notes

The following commands and implementation notes were provided with the project README content. They are useful starting points, but have not been executed or checked against the repositories in this workspace:

- **SalarySense AI:** install from `requirements.txt`; run with `streamlit run app.py`. Supplied README lists salary prediction, resume ATS analysis, skill detection, career insights, authentication, prediction history, charts, and PDF reports.
- **Echoes:** run with `npm run dev`. Scenario files are described under `src/scenarios`; world modules include `src/world/WorldCanvas.tsx` and `src/world/WorldScene.tsx`. The supplied README lists `npm run validate`, `npm test`, and `npm run build` for validation, tests, and build.
- **CampusCare:** local demo app at `http://127.0.0.1:5001`; the supplied README says the SQLite database `campuscare.db` is created on first run. Its Reporter/Responder workflows are simulated and do not contact emergency services.
- **HelpIt:** user-supplied README notes describe a Flask backend, SQLite, and upload folders, but the repository returned 404 during this update and the supplied resume lists PHP/MySQL. Do not rely on these implementation or setup notes until source access returns and dependencies are checked.

## Deployment

The website is static and can be hosted on GitHub Pages, Netlify, or another static host. Publish this folder as the site root; no build command is needed. Automatic deployment is not configured here. On a suitable host, connect the GitHub repository and configure its static publishing branch/folder so commits trigger a deployment. The host's build/deploy settings are independent from the GitHub source link. Update the Open Graph image to an absolute deployed URL if social previews are needed.

## Troubleshooting

- **Styles/scripts look stale:** reload with cache bypassed; confirm `styles.css` and both `js/` files are deployed beside `index.html`.
- **Resume button is not visible on a hosted site:** confirm `assets/resume.pdf` was deployed beside the `assets/` directory and that the server returns a successful response to a HEAD request.
- **Contact form does not submit:** confirm that `js/contact-config.js` contains the form provider endpoint and that its target email is verified. With no configured endpoint, the form intentionally does not send.
- **External fonts do not load:** the site falls back to Arial without network access.
- **Project details need correction:** verify repository README, implementation, dependency/config files, and genuine deployment before editing `js/projects.js`.

## Project-specific READMEs

The supplied project repositories are not checked out in this workspace. Their README files and project assets have not been edited, and no unverified installation, test, architecture, or database instructions have been drafted. Clone or open each repository before writing its tailored README and logo asset there. Do not push repository changes without review.
