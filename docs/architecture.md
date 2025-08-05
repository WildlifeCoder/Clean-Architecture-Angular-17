# Project Architecture

## 📁 Folder Structure

```
src/
├── app/
│   ├── core/                 # Global configurations and singleton services
│   ├── domain/               # Business logic (models and use cases)
│   ├── infrastructure/       # Adapters to external services, helpers
│   ├── shared/               # Reusable resources (pipes, guards, directives, constants)
│   ├── ui/                   # Visual components and design system
│   │   ├── design-system/    # BPDS Design System (buttons, inputs, etc.)
│   │   │   ├── atoms/
│   │   │   ├── molecules/
│   │   │   ├── organism/
│   │   │   └── templates/
│   │   ├── components/       # Other general components not part of bvds
│   │   ├── features/         # Feature-specific components
│   ├── features/             # Isolated business functionalities
│   ├── pages/                # Independent pages (home, login, etc.)
│   └── app.component.ts      # Root component
```

## 🧱 Architecture Principles

- **Clean Architecture**: clear separation of responsibilities between `domain`, `infrastructure`, `ui`, etc.
- **Microfrontend Ready**: each feature can be easily converted into a microfrontend thanks to modularization.
- **Atomic Design**: UI components are structured from the smallest (atoms) to the largest (templates and pages).
- **DRY & SOLID**: we promote reusability, low coupling, and high cohesion.
- **BeVetter Design System (BVDS)**: usage of client-defined design components to maintain visual consistency.

## 🥪 Testing

- **Unit Tests**: implemented with Jasmine/karma.
- **E2E & Acceptance Tests**: implemented with Playwright.
- **Minimum Expected Coverage**: 70% for unit tests, 100% for critical logic.

## ⚙️ Technologies

| Layer         | Tool                              |
| ------------- | --------------------------------- |
| Frontend      | Angular 19                        |
| Microfrontend | Webpack 5 + Module Federation     |
| Testing       | Jasmine/karma + Playwright        |
| Design        | BPDS (BankPlatform Design System) |

## 📈 Recommended Workflow

1. Define models and use cases in `domain/`
2. Implement adapters and services in `infrastructure/`
3. Create views and components in `ui/`
4. Compose business functionalities in `features/`
5. Render in `pages/` and configure routes with `app.routes.ts`
6. Apply lazy loading to optimize module loading.
7. Prevent memory leaks: unsubscribe from observables or use signals when appropriate.
8. Use NgOptimizedImage to improve image loading performance.
