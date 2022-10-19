<h1 align="center">
  Weather forecast
</h1>
<h3 align="center"></h3>

[![React](https://img.shields.io/badge/react-17.0.1-lightgrey.svg)](https://github.com/facebook/react)

## 📦 Table of Contents

1. [Rules](#📜-rules)
2. [Requirements](#-requirements)
3. [Installation](#-installation)
4. [Running the Project](#-running-the-project)
5. [Project Structure](#-project-structure)
6. [Development Tools](#-development-tools)
7. [Wikihow](#-wikihow)
8. [Code Review Process](#-code-review-process)
9. [Building for Production](#-building-for-production)
10. [Troubleshooting & FAQ](#-troubleshooting-&-faq)

## 📜 Rules

1. Avoid in-line styles and in-line TypeScript whenever possible.
2. Take advantage of available components.
3. Write nice and clean code, line breaks after each declaration and each component.
4. Make good use of notes (comments).
5. Declare routers and variables in the right place according to the structure.
6. Handle ESLint errors & delete unused code before committing.

## 💼 Requirements

## 💾 Installation
```bash
# For development environment

$ yarn dev 
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

| `yarn <script>` | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| `yarn dev`      | Starts the app at `localhost:3000` by default                        |
| `yarn build`    | Builds the app in production mode and serves files from build folder |

## ✏️ Project Structure

```
.
├── README.md                             # Readme file for the whole app
├── env                                   # All environment variables to be configured from here
│   └── <environment>.env                 # The naming convention of env files
├── package.json                          # All npm dependencies can be found here
├── public                                # Public folder
│   ├── favicon
│   │   └── ...
│   ├── fonts
│   │   └── ...
│   ├── index.html
│   ├── manifest.json
│   └── static
│       └── ...
├── src                                   # Application main source code
│   ├── App.tsx                           # Defines routes and containers
│   ├── index.tsx                         # This file is the entry file for the application, only used for setting up stores and wrapping application with providers.
│   ├── apis                              # All API endpoints and API related logic goes here
│   │   └── apiClient.ts
│   ├── components                        # Global reusable components
│   │   ├── Button                        # Button common components
│   │   │   ├── ...
│   │   │   └── index.ts
│   │   └── ...
│   ├── constants                         # Folder for constants
│   │   ├── apiUrl.ts
│   │   ├── appConfig.ts
│   │   ├── common.ts
│   │   ├── commonCodes.ts
│   │   ├── lengths.ts
│   │   └── routes.ts
│   ├── containers                        # Global smart components  
│   │   └── ...
│   ├── pages                             # Contains pages/modules
│   │   └── <component_name>
│   │       └── <epic_name/page_name>
│   │           ├── apis.ts
│   │           ├── components
│   │           │   └── ...
│   │           ├── constants.ts
│   │           ├── index.tsx
│   │           ├── models
│   │           │   ├── ...
│   │           │   └── index.ts
│   │           ├── slices.ts
│   │           ├── styles.ts
│   │           └── types.ts
│   ├── hooks                             # Contains custom hooks
│   │   └── ...
│   ├── index.tsx
│   ├── layouts
│   │   └── ...
│   ├── test                             # Unit-test setting up
│   ├── locales                          # Locale translation files
│   │   ├── en
│   │   │   ├── ...
│   │   │   └── index.ts
│   │   ├── i18n.ts
│   │   └── kr
│   │       ├── ...
│   │       └── index.ts
│   ├── models                           # Common used `class-transformer` models
│   │   ├── ...
│   ├── pages
│   │   ├── ...
│   │   └── Page404.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── store                             # A folder containing all Redux stores
│   │   ├── errorHandlerSaga.ts           # Handles with error in saga layer
│   │   ├── index.ts                      # The App's Redux Store
│   │   ├── rootReducer.ts                # Root reducer for the app
│   │   └── rootSaga.ts                   # A root Saga aggregates multiple Sagas to a single
│   ├── types                             # Common used interfaces/types
│   │   ├── settings.ts
│   │   └── theme
│   │       ├── index.ts
│   │       └── palette.ts
│   └── utils                             # A folder for Utility methods and Helpers
│       └── ...
├── .eslintrc                             # ESLint configuration file
├── .prettierrc                           # Prettier config
├── .gitignore                            # List of ignored files/folders
├── tree.txt
├── tsconfig.extend.json
├── tsconfig.json                         # TypeScript configuration file
├── yarn-error.log
└── yarn.lock                             # Yarn lock file for locking the dependency versions
```

## ✏️ Development tools
### Technical
- React: Use to render the view layer of application
- Redux: use to  management React state
- Redux saga: Middleware responsible for asynchronous processing within Redux
- Axios: Http Communication Library
- Typescript: the superset of JavaScript and adds optional static typing to the language.
  
### Tools
- VSCode

### Browsers
Chrome (latest version)
Firefox (latest version)