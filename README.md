# Angular Notes App

A modern Single-Page Application (SPA) for creating, viewing, and managing notes, built with **Angular 22** and **TypeScript** as part of the Sololearn Front-End / Angular course (developed with the Angular Team at Google).

## Features
- **Notes List View:** Displays all saved notes using Angular's modern built-in `@for` control flow syntax.
- **Create & View Notes:** Client-side navigation via `@angular/router` (`./new` for adding notes and `/note/:id` for viewing/managing individual notes).
- **Reactive/Template Forms:** Structured form handling using `@angular/forms`.
- **Clean Architecture:** Modular component-based design with strict TypeScript configuration and Prettier formatting.

## Tech Stack
- **Framework:** Angular 22 (`@angular/core`, `@angular/router`, `@angular/forms`)
- **Language:** TypeScript, HTML5, CSS3
- **Utilities & Testing:** RxJS, Vitest, Prettier

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/KonstantinosChristodoulos/notes-app.git
   cd notes-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   ng serve
   ```

4. Open your browser at `http://localhost:4200/`.