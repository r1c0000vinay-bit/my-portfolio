# Vinay Raghuwanshi - React Portfolio

## Requirements
- Node.js (LTS version)
- VS Code

## Run the project
1. Extract this ZIP file.
2. Open the `vinay-react-portfolio` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Update your links
Open `src/data.js` and edit the `linkedin` and `github` values in the `profile` object.
Your GitHub profile is already added:
https://github.com/r1c0000vinay-bit

## Project structure
```text
vinay-react-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js
    ├── styles.css
    └── components/
        ├── Navbar.jsx
        ├── SectionTitle.jsx
        └── SkillCard.jsx
```