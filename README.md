# HyperLoot: CC0 Wars Website
![hyperloot-cc0-wars-github-repo-banner](https://user-images.githubusercontent.com/3419259/231532454-dec0e624-e038-4cea-8bfa-2654be316d86.jpg)

## Table of Contents
- [Links](#links)
- [Technologies](#how-to-getting-started)
- [Project Structure](#project-structure)
- [How To Get Started](#how-to-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How To Run Locally](#how-to-run-locally)
- [Git Commit Style Guide](#git-commit-style-guide)
- [Git Branch Naming Convention](#git-branch-naming-convention)
- [License](#license)

## Links
| Description | URL                     |
| ----------- | ----------------------- |
| Production  | https://cc0wars.com/    |

## Technologies
- (Nuxt 3)[https://nuxt.com/] - for building Vue.js server-rendered site.
- (SCSS)(https://sass-lang.com/) - for maintainable and organized styling.
- (Yarn)(https://yarnpkg.com/) - for package management.
- (Vercel)(https://vercel.com/) - for staging and production deployment.
- (Fathom)(https://usefathom.com/) - for analytics.
- (Include-media) - for maintaining media queries in SCSS.

## Project Structure
```
.
├── assets/               # Asset files that build tool will process
|   └── styles/           # Global CSS and SCSS files
|       └── base/         # Base styles and resets
|       └── variables/    # Variables, mixins, and functions
|       └── global.scss   # global SCSS import file 
|
├── components/           # Vue components
|   ├── global/           # Global components
|   |   └── ...
|   |
|   └── pages/            # Page-specific components
|       └── ...
|
├── layouts/              # Layout templates
|   └── ...
|
├── locales/              # Localization files
|   └── ...
|
├── pages/                # Nuxt.js pages
|   └── ...
|
├── plugins/              # Vue.js plugins
|   └── ...
|
├── public                # Static files that served at the server root as-is
|   └── ...
|
└── .env                  # Environment variables
└── .gitignore            # Git ignore rules
└── .npmrc                # NPM configuration file
└── app.vue               # Root Vue component
└── LICENSE               # License terms for the software code
└── nuxt.config.js        # Nuxt.js configuration file
└── package.json          # Dependencies and scripts
└── README.md             # Project documentation
└── tsconfig.json         # TypeScript configuration file
└── yarn.lock             # Yarn lock file
```

## How To Get Started

### Prerequisites
Before you start working on this project, make sure you have the following installed on your local machine:

1. [Node.js](https://nodejs.org/) - for running the application locally.
2. [Yarn](https://yarnpkg.com/) - for package management.

Once you have these prerequisites installed and set up, you can proceed with the "Installation" section to start working on the project.

### Installation

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## How To Run Locally

Follow these steps to run the project locally on your machine:

### Development Server

```bash
# Start the development server on http://localhost:3000
yarn run dev
```

### Production

Build the application for production:

```bash
yarn run build
```

Locally preview production build:

```bash
yarn run preview
```

## Git Commit Style Guide
- Keep your Git commit [atomic](https://en.wikipedia.org/wiki/Atomic_commit) and small.
- Follow this format:
```
Format:
<type>(<scope>): <subject>
Types:
- feat (new feature for the user, not a new feature for build script)
- fix (bug fix for the user, not a fix to a build script)
- chore (updating grunt tasks, etc.; no production code change)
- style (formatting, missing semi-colons, etc.; no production code change)
- refactor (refactoring production code, e.g., renaming a variable)
- docs (changes to the documentation)
- test (adding missing tests, refactoring tests; no production code change)
Examples:
feat(navbar): implement dropdown menu
chore(footer): remove Twitter icon
fix(form): fix incorrect border color (#138)
```

## Git Branch Naming Convention
1. If it is a feature, prefix the branch name with `feat/`.
2. If it is a bug fix, prefix the branch name with `fix/`.
3. If it is a refactor, prefix the branch name with `refactor/`.

**Example:**
```
feat/navbar
fix/footer
```

## License
[MIT](https://github.com/hyperloot-nft/hyperloot-cc0-wars-website/blob/main/LICENSE)

Copyright (c) 2023-present, HyperLoot
