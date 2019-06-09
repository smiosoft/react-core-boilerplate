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

Node (`npm`) commands are defined in `package.json`, which is located with the project (`src/*/*.csproj`).

| Command         | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `npm install`   | Install module dependencies to the `node_modules` directory                                                              |
| `npm run start` | Start the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) server running on `http://localhost:9000`  |
| `nom run build` | Builds the application with [webpack](https://webpack.js.org/) for production environment; output is `wwwroot` directory |

### MSBuild

MSBuild triggers are defined in the project `.csproj` file.

| Target       | Condition                               | Action                  |
| ------------ | --------------------------------------- | ----------------------- |
| Before Build | If there is no `node_modules` directory | `npm install`   |
| Before Build | Always                                  | `npm run build` |

## Directory Structure

```markdown
|   Boilerplate.sln                     # Visual Studio Solution
+---build                               # Any scripts related to building the project
+---docs                                # Any documentation files and assets
\---src                                 # Any projects related to the source code
    \---Boilerplate.Web
        |   .babelrc                    # Babel configuration
        |   .eslintrc                   # ESLint configuration
        |   .stylelintrc                # Stylelint configuration
        |   appsettings.json            # Application configuration
        |   Boilerplate.Web.csproj      # ASP.NET Core Project
        |   package.json                # Packages configuration
        |   Program.cs
        |   Startup.cs
        |   webpack.config.js           # Webpack configuration
        +---ClientApp
        |   |   index.jsx               # Application entrypoint
        |   |   template.html           # HTML template
        |   +---assets
        |   \---components
        |       \---App                 # Demo Application
        \---wwwroot                     # Webpack build output
```
