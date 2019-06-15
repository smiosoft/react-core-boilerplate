![React Core Boilerplate](./docs/assets/project-title.png)

---

Preconfigured solution for building a Single Page Application project with ASP.NET Core and React.

[Live Demo](https://smiosoft.github.io/react-core-boilerplate)

## Quick Start

1. `cd ./src/Boilerplate.Web` - Move to the project directory
2. `npm install` - Install module dependencies
3. `npm run start` - Start application

## Usage

### Node

Node (`npm`) commands are defined in `package.json`, which is located with the project (`Boilerplate.Web.csproj`).

| Command         | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `npm install`   | Install module dependencies to the `node_modules` directory                                                              |
| `npm run start` | Start the [webpack-dev-server](https://github.com/webpack/webpack-dev-server); running on `http://localhost:9000`  |
| `nom run build` | Build with [webpack](https://webpack.js.org/); output to `wwwroot` directory |

### MSBuild

MSBuild triggers are defined in the project file (`Boilerplate.Web.csproj`).

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
