![React Core Boilerplate](./docs/.assets/project-title.png)

[![Build Status](https://dev.azure.com/smiosoft/react-core-boilerplate/_apis/build/status/smiosoft.react-core-boilerplate?branchName=master)](https://dev.azure.com/smiosoft/react-core-boilerplate/_build/latest?definitionId=2&branchName=master)

---

Preconfigured solution for building a SPA with ASP.NET Core and React.

[Live Demo](https://smiosoft.github.io/react-core-boilerplate)

## Overview

Generate a new repository with the same directory structure and files.

### Prerequisite

- [.NET Core](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/en/)

### Quick Start

```shell
cd ./src/Boilerplate.Web
npm install
npm run start
```

### Features

- Optimised Webpack configuration
- Preconfigured ESLint using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- Preconfigured hot reloading using [react-hot-loader](https://www.npmjs.com/package/react-hot-loader)
- Lazy Loading and Code Splitting
- Offline support

## Usage

### Node

| Command         | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `npm install`   | Install module dependencies to the `node_modules` directory                                                              |
| `npm run start` | Start the [webpack-dev-server](https://github.com/webpack/webpack-dev-server); running on `http://localhost:9000`  |
| `nom run build` | Build with [webpack](https://webpack.js.org/); output to `wwwroot` directory |

### MSBuild

| Target       | Condition                               | Action                  |
| ------------ | --------------------------------------- | ----------------------- |
| Before Build | If there is no `node_modules` directory | `npm install`   |
| Before Build | Always                                  | `npm run build` |

## Repository Structure

```markdown
|   .gitattributes
|   .gitignore
|   Boilerplate.sln                                 # Visual Studio Solution
|   LICENSE
|   README.md
|
+---build                                           # Any scripts related to building the project
|       azure-pipelines.yml
|
+---docs                                            # Any documentation files and assets
|   \---assets
|           project-title.png
|
\---src                                             # Any projects related to the source code
    \---Boilerplate.Web
        |   .babelrc                                # Babel configuration
        |   .eslintrc                               # ESLint configuration
        |   .stylelintrc                            # Stylelint configuration
        |   appsettings.json                        # Application configuration
        |   Boilerplate.Web.csproj                  # ASP.NET Core Project
        |   package-lock.json
        |   package.json                            # Packages configuration
        |   Program.cs
        |   Startup.cs
        |   webpack.config.js                       # Webpack configuration
        |
        +---ClientApp
        |   |   index.jsx                           # React client-side entrypoint
        |   |   template.html                       # HTML template
        |   |
        |   +---assets                              # Global-scope assets
        |   |   \---img
        |   |           favicon.png                 # Example favicon
        |   |
        |   \---components                          # Global-scope components
        |       \---App
        |           |   index.jsx                   # App entrypoint
        |           |
        |           +---assets                      # App-scope assets
        |           |   +---fonts                   # Example fonts
        |           |   |
        |           |   \---icons                   # Example icons
        |           |
        |           +---components                  # App-scope components
        |           |   |   Counter.jsx             # Example Counter
        |           |   |   Home.jsx                # Example Home
        |           |   |   Routes.jsx              # Example Routes
        |           |   |
        |           |   +---layout
        |           |   |   |   index.jsx           # Example layout entrypoint
        |           |   |   |
        |           |   |   \---components          # Example layout-scope components
        |           |   |           Footer.jsx      # Example Footer
        |           |   |           Header.jsx      # Example Header
        |           |   |           Main.jsx        # Example Main
        |           |   |
        |           |   \---shared
        |           |           Loading.jsx         # Example Loading
        |           |
        |           \---utils                       # App-scope utilities
        |               \---style
        |                       globalStyle.js      # Example global style
        |                       media.js            # Example media queries
        |                       variables.js        # Example style variables
        |
        \---wwwroot                                 # Webpack build output
```
