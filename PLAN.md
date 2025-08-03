# PLAN.md — Okirem EdTech Platform

## 1. Project Overview

**Purpose:**  
Okirem is a modern, scalable EdTech platform for grades 1-8, designed to empower students, teachers, and parents with interactive learning, progress tracking, and personalized educational content.

**Vision & Core Values:**  
- Democratize quality education for all.
- Foster curiosity, self-learning, and growth.
- Support teachers and parents as active partners.
- Data privacy, accessibility, and inclusivity.

**Target Users:**  
- **Students:** Grades 1-8, mobile-first experience.
- **Teachers:** Content management, analytics, feedback.
- **Parents:** Progress monitoring, communication.

---

## 2. Tech Stack & Architecture

| Layer      | Technology/Notes                                                                 |
|------------|----------------------------------------------------------------------------------|
| Frontend   | Angular 19+ (standalone), Tailwind CSS, RxJS, CoreUI, Iconify, SPA, PWA-ready    |
| Backend    | Firebase (Firestore, Auth), .NET/C# (optional for advanced logic), SQL (optional)|
| Architecture | Clean Architecture, DDD, modular, scalable, responsive/mobile-first             |
| Deployment | Vercel/Netlify/Firebase Hosting, CI/CD via GitHub Actions                        |
| Secrets/Config | .env, Firebase Console, Angular environments                                 |
| Media/CDN  | Static assets in `/assets`, CDN for images/fonts                                 |
| Backup/Restore | Firestore export/import, versioned assets                                    |

---

## 3. Features Table

| Feature Name                | Status | Description                                  |
|-----------------------------|--------|----------------------------------------------|
| Student Dashboard           | ✅     | Main student landing page, navigation        |
| Unit/Topic Accordion        | ✅     | Vertical units, horizontal topics, Firestore |
| Auth (Login/Logout)         | ✅     | Firebase Auth, role-based access             |
| Admin Unit Manager          | ✅     | CRUD for units, modal-based UI               |
| Admin Topic Manager         | ✅     | CRUD for topics, modal-based UI              |
| Teacher Dashboard           | ⏳     | Teacher-specific analytics, content tools    |
| Parent Dashboard            | ⏳     | Progress tracking, communication             |
| Lesson Manager              | 🚧     | Advanced lesson CRUD, scheduling             |
| Responsive Design           | ✅     | Mobile-first, Tailwind, CoreUI               |
| Error Handling              | ⏳     | User feedback, edge case management          |
| E2E/Unit Tests              | 🚧     | Cypress/Jest, coverage targets               |
| GDPR/KVKK Compliance        | ⏳     | Data privacy, user consent                   |
| Backup/Restore              | ⏳     | Firestore export/import                      |
| CDN/Media Strategy          | ✅     | Static assets, scalable delivery             |

---

## 4. Detailed Feature Breakdown

### Student Dashboard
- **Description:** Main entry for students, shows units/topics, progress.
- **Status:** Done
- **Route:** `/student`
- **Roles:** Student
- **Flows:** View units/topics, select topic, start lesson.
- **Validation:** Auth required, error if no units/topics.
- **Tests:** Basic navigation, topic selection.

### Unit/Topic Accordion
- **Description:** Interactive accordion, units (vertical), topics (horizontal), dynamic from Firestore.
- **Status:** Done
- **Route:** `/student` (component: `unit-topic-accordion`)
- **Roles:** Student
- **Flows:** Expand unit, view topics, select topic.
- **Validation:** Handles empty units/topics, loading state.
- **Tests:** Accordion open/close, topic click.

### Admin Unit Manager
- **Description:** CRUD for units, modal-based add/update/delete.
- **Status:** Done
- **Route:** `/admin/unit`
- **Roles:** Admin
- **Flows:** Add unit, edit unit, delete unit (confirmation).
- **Validation:** Required fields, duplicate order check.
- **Tests:** Modal open/close, CRUD ops.

### Admin Topic Manager
- **Description:** CRUD for topics under units, modal-based add/update/delete.
- **Status:** Done
- **Route:** `/admin/topic`
- **Roles:** Admin
- **Flows:** Select unit, add topic, edit topic, delete topic.
- **Validation:** Required fields, image/icon format.
- **Tests:** Modal ops, topic CRUD.

### Auth (Login/Logout)
- **Description:** Firebase Auth, role-based routing.
- **Status:** Done
- **Route:** `/login`, `/logout`
- **Roles:** All
- **Flows:** Login, logout, session check.
- **Validation:** Invalid credentials, session expiry.
- **Tests:** Auth flow, protected routes.

### Responsive Design
- **Description:** Mobile-first, Tailwind, CoreUI, accessibility.
- **Status:** Done
- **Validation:** All screens responsive, keyboard nav.

### Error Handling
- **Description:** User feedback, error boundaries, edge cases.
- **Status:** In Progress
- **Validation:** API errors, empty states, permission errors.

### E2E/Unit Tests
- **Description:** Cypress/Jest, coverage for critical flows.
- **Status:** Planned
- **Validation:** Coverage targets, CI integration.

---

## 5. Current Directory Structure (3 Levels)

```
src/
  app/
    core/
      services/
        auth.service.ts
        learn-content.service.ts
        lesson.service.ts
    pages/
      admin/
        components/
          unit-manager/
            add/
            update/
            delete/
            unit-manager.component.ts
            unit-manager.component.html
          topic-manager/
            add/
            update/
            delete/
            topic-manager.component.ts
            topic-manager.component.html
      student/
        components/
          student-dashboard/
          unit-topic-accordion/
    shared/
    features/
    icons/
  assets/
    images/
    fonts/
    brand/
    svg/
  scss/
    styles.scss
    _custom.scss
    ...
  environments/
    environment.ts
    environment.prod.ts
  index.html
  main.ts
```

---

## 6. Todo/Backlog

- [ ] Teacher dashboard: analytics, lesson tools
- [ ] Parent dashboard: progress, messaging
- [ ] Advanced lesson manager (scheduling, assignments)
- [ ] E2E and unit test coverage
- [ ] Error boundary and user feedback improvements
- [ ] GDPR/KVKK compliance review
- [ ] Backup/restore automation
- [ ] Role-based content/route guards
- [ ] User profile and settings
- [ ] Media upload (image/file) support

---

## 7. Known Issues/Risks

- Firestore rules: Ensure correct read/write permissions for all roles.
- Edge cases: Empty units/topics, network errors.
- Modal stacking/z-index issues in some browsers.
- Tailwind @apply in SCSS: Use only in .css or via HTML classes.
- SwitchAll/rxjs: Correct import and usage required.
- Asset paths: Always use `/` not `\` for cross-platform compatibility.

---

## 8. Roadmap

| Milestone         | Target Date | Features/MVP                          |
|-------------------|-------------|---------------------------------------|
| MVP v1            | 2025-08-15  | Student/Admin dashboards, CRUD, Auth  |
| Teacher/Parent    | 2025-09-15  | Teacher/Parent modules, analytics     |
| Full Release      | 2025-10-30  | E2E tests, compliance, polish         |

---

## 9. Contributing & Onboarding

- **Setup:**  
  - `npm install`
  - `ng s -o` for local dev
  - Firebase config in `environments/`
- **Code Style:**  
  - Angular, TypeScript, Tailwind best practices
  - Use standalone components, modular structure
- **Commits:**  
  - Conventional commits (`feat:`, `fix:`, `docs:`)
- **Code Review:**  
  - PRs via GitHub, at least 1 reviewer
- **Docs:**  
  - Update PLAN.md/README.md for major changes

---

## 10. Legal & Compliance

- **GDPR/KVKK:**  
  - Data privacy, user consent, right to be forgotten
- **Licensing:**  
  - MIT for code, check third-party assets
- **Open Source Policy:**  
  - Contributions welcome, code of conduct applies

---

## 11. References

- [CoreUI Angular Docs](https://coreui.io/angular/docs/)
- [Angular Docs](https://angular.io/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [Figma Design](link-if-available)
- [User Research](link-if-available)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Iconify](https://iconify.design/)

---

> For questions, onboarding, or technical support, contact the Okirem core team.
