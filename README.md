![React Core Boilerplate](./docs/.assets/project-title.png)

[![Build Status](https://dev.azure.com/smiosoft/react-core-boilerplate/_apis/build/status/smiosoft.react-core-boilerplate?branchName=master)](https://dev.azure.com/smiosoft/react-core-boilerplate/_build/latest?definitionId=2&branchName=master)

---

_Preconfigured solution for building a SPA with ASP.NET Core and React._

## Overview

[Live Demo](https://smiosoft.github.io/react-core-boilerplate)

### Features

- Optimised Webpack configuration
- Lazy loading and code splitting
- PWA and offline support
- SEO
- Hot reloading

## Getting Started

### Prerequisites

- [.NET Core](https://dotnet.microsoft.com/download/dotnet-core/2.2)
- [Node.js](https://nodejs.org/en/download/)

### Quick Start

```shell
npm install
npm run start
```

## Usage

### Node

| Command         | Description                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `npm run start` | Start the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) on `http://localhost:9000`  |
| `nom run build` | Build with [webpack](https://webpack.js.org/); output to `wwwroot` directory |

### MSBuild

| Target       | Condition                               | Action                  |
| ------------ | --------------------------------------- | ----------------------- |
| Before Build | If there is no `node_modules` directory | `npm install`   |
| Before Build | Always                                  | `npm run build` |
