![React Core Boilerplate](./docs/assets/project-title.png)

---

Preconfigured solution for building a Single Page Application project with ASP.NET Core and React.

[Live Demo](https://smiosoft.github.io/react-core-boilerplate)

## Usage

Template repository - generate a new repository with the same directory structure and files.

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
|   .gitattributes
|   .gitignore
|   Boilerplate.sln
|   LICENSE
|   README.md
|
+---build
|       azure-pipelines.yml
|
+---docs
|   \---assets
|           project-title.png
|
\---src
    \---Boilerplate.Web
        |   .babelrc
        |   .eslintrc
        |   .stylelintrc
        |   appsettings.json
        |   Boilerplate.Web.csproj
        |   package-lock.json
        |   package.json
        |   Program.cs
        |   Startup.cs
        |   webpack.config.js
        |
        +---ClientApp
        |   |   index.jsx
        |   |   template.html
        |   |
        |   +---assets
        |   |   \---img
        |   |           favicon.png
        |   |
        |   \---components
        |       \---App
        |           |   index.jsx
        |           |
        |           +---assets
        |           |   +---fonts
        |           |   |       open-sans-v16-latin-regular.woff
        |           |   |       open-sans-v16-latin-regular.woff2
        |           |   |
        |           |   \---icons
        |           |           logo.svg
        |           |
        |           +---components
        |           |   |   Counter.jsx
        |           |   |   Home.jsx
        |           |   |   Routes.jsx
        |           |   |
        |           |   +---layout
        |           |   |   |   index.jsx
        |           |   |   |
        |           |   |   \---components
        |           |   |           Footer.jsx
        |           |   |           Header.jsx
        |           |   |           Main.jsx
        |           |   |
        |           |   \---shared
        |           |           Loading.jsx
        |           |
        |           \---utils
        |               \---style
        |                       globalStyle.js
        |                       media.js
        |                       variables.js
        |
        \---wwwroot
```
