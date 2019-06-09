![React Core Boilerplate](./docs/assets/project-title.png)

---

Preconfigured solution for building a Single Page Application project with ASP.NET Core and React.

[Live Demo](https://smiosoft.github.io/react-core-boilerplate)

## Usage

Template repository - generate a new repository with the same directory structure and files.

### Node

Node (`npm`) commands are defined in `package.json`, which is located with the project (`src/*/*.csproj`).

#### package.json

```json
"scripts": {
  "start": "webpack-dev-server --hot --open --mode development",
  "build": "webpack --mode production"
}
```

| Command         | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `npm install`   | Install module dependencies to the `node_modules` directory                                                              |
| `npm run start` | Start the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) server running on `http://localhost:9000`  |
| `nom run build` | Builds the application with [webpack](https://webpack.js.org/) for production environment; output is `wwwroot` directory |

### .NET Core

MSBuild triggers are defined in the project (`src/*/*.csproj`) file.

| Target       | Condition                               | Action                  |
| ------------ | --------------------------------------- | ----------------------- |
| Before Build | If there is no `node_modules` directory | `npm install`   |
| Before Build | Always                                  | `npm run build` |
