/* Project content is maintained here. Confirm source-dependent entries before replacing their review notes. */
window.portfolioConfig = {
  resumePath: "assets/resume.pdf",
  categories: ["Data Science & Machine Learning", "Data Analytics & Business Intelligence", "Web Development"],
  projects: [
    {
      id: "salarysense-ai", name: "SalarySense AI", shortDescription: "An AI-powered career intelligence platform combining salary prediction, resume analysis, and career insights.",
      description: "SalarySense AI combines salary prediction with resume analysis and career insights. Its described features include salary estimates using job role, experience, skills, certifications, company size, industry, and location; resume ATS scoring and categorization; skill detection with missing-skill suggestions; user authentication; prediction history; interactive charts; and PDF salary reports.",
      category: "Data Science & Machine Learning", technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "SQLite", "Plotly", "ReportLab", "Joblib"],
      repositoryUrl: "https://github.com/meenakshi-shaji/salarysense-ai", liveDemoUrl: "", logo: "assets/logos/salarysense-logo.svg", featured: true,
      verification: "Public README, requirements.txt, and database.py were reviewed. The repository contains a SQLite users/predictions database module; runtime behavior and results were not tested."
    },
    {
      id: "echoes", name: "Echoes", shortDescription: "An interactive branching-scenario experience with a persistent 3D world, rewind, and alternate decisions.",
      description: "Echoes presents interactive scenarios in a persistent 3D world, with rewind and branching decisions. Scenarios and inline SVG illustrations are organized separately. React Three Fiber manages the persistent Canvas; Framer Motion animates screen and metric transitions, while GSAP handles camera movement, picker rotation, the intro cover, and consequence-group separation. A ?lite=1 option reduces rendering quality, and ?static=1 enables an SVG/HTML presentation. Reduced-motion preferences and WebGL failures trigger static mode.",
      category: "Web Development", technologies: ["React", "TypeScript", "Vite", "Three.js", "React Three Fiber", "Framer Motion", "GSAP"],
      repositoryUrl: "https://github.com/meenakshi-shaji/Echoes", liveDemoUrl: "", logo: "assets/logos/echoes-logo.svg", featured: true,
      verification: "Public README and package.json were reviewed. Stack tags reflect declared dependencies; the app and tests were not run locally."
    },
    {
      id: "campus-care", name: "CampusCare — Campus Safety Response System", shortDescription: "A local demonstration MVP for campus issue reporting and response coordination.",
      description: "CampusCare is a local demonstration MVP for campus reporting and response coordination. Reporters submit issues and receive a CC-YYYY-NNNN reference; responders can review, acknowledge, assign, update, and resolve reports, with simulated status changes shown in student timelines. Portal switching is a local demonstration role switch, not identity verification. Responder actions are simulated: this prototype does not contact campus responders or emergency services. Its Flask app uses SQLite and creates campuscare.db on first run.",
      category: "Web Development", technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
      repositoryUrl: "https://github.com/meenakshi-shaji/campus-care", liveDemoUrl: "", logo: "assets/logos/campus-care-logo.svg", featured: true,
      verification: "Public README, repository tree, and requirements.txt were reviewed. Flask is declared; features are described as simulated local workflows, not emergency services."
    },
    {
      id: "gas-booking-system", name: "Gas Booking Management System", shortDescription: "A static gas booking interface mockup with booking, tracking, account, and admin sections.",
      description: "The accessible index.html contains navigation between home, booking, order tracking, admin, login, and sign-up sections. It includes client-side section switching and a fixed Pending status; no backend, persistent order tracking, or database is present in the inspected files. This differs from resume notes describing Java/MySQL, booking history, and status tracking.",
      category: "Web Development", technologies: ["HTML", "CSS", "JavaScript"],
      repositoryUrl: "https://github.com/meenakshi-shaji/gas-booking-system", liveDemoUrl: "", logo: "assets/logos/gas-booking-logo.svg", featured: false,
      needsReview: true, verification: "Verified from public index.html and repository tree. Resume lists Java/MySQL and additional functional workflows; public source currently appears to be a static HTML/CSS/inline-JavaScript mockup. Review the discrepancy."
    },
    {
      id: "iam-arts-academy", name: "IAM Arts Academy", shortDescription: "Project details are awaiting review of the repository README and source files.",
      description: "The repository could not be accessed or matched to reliable search results during this update. Add a verified purpose, features, and implementation details after inspecting its README, source code, and dependency files.",
      category: "Web Development", technologies: [],
      repositoryUrl: "https://github.com/meenakshi-shaji/IAM-Arts-Academy", liveDemoUrl: "", logo: "assets/logos/iam-arts-academy-logo.svg", featured: false,
      needsReview: true, verification: "Repository was inaccessible (404) during this update. Purpose, stack, and category are unverified; review when access is available."
    },
    {
      id: "helpit", name: "HelpIt", shortDescription: "A helper and item-delivery platform with booking and request tracking.",
      description: "The user-supplied project README describes a platform connecting users with helpers for item purchase and delivery, with booking and request tracking. Those notes describe an index.html frontend with a Flask backend, SQLite, and upload folders. The repository returned 404 during this update, so the implementation, technologies, and run instructions could not be checked against source files.",
      category: "Web Development", technologies: [],
      repositoryUrl: "https://github.com/meenakshi-shaji/helpit", liveDemoUrl: "", logo: "assets/logos/helpit-logo.svg", featured: false,
      needsReview: true, verification: "Repository was inaccessible (404) during this update. User-supplied project notes describe Flask/SQLite and conflict with the resume's PHP/MySQL list; verify source and category when accessible."
    }
  ]
};
