# TuneHR - HR Management Dashboard

A responsive HR Management System dashboard built with React and Material-UI.
Portfolio demo project inspired by real-world HRMS products.

## Features
- Login page with form validation
- Dashboard with stat cards, weekly attendance bar chart, and recent activity feed
- Employee directory with live search and department filter
- Leave request form with validation and success feedback
- Fully responsive layout

## Tech stack
- React 18 + Vite
- Material-UI (MUI) v5 with a custom theme
- React Router v6 (HashRouter for easy static hosting)

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```
The build output is in `dist/` and can be deployed to GitHub Pages, Netlify, or Vercel.

## Deploy to GitHub Pages
1. Push this repo to GitHub.
2. Settings -> Pages -> Source: "GitHub Actions" (or deploy the `dist/` folder on the `gh-pages` branch).
3. The app uses HashRouter, so no server rewrite rules are needed.

---
Built by MaheshKumar K. (portfolio demo)
