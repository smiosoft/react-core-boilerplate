# React Core Boilerplate

[![Build Status](https://dev.azure.com/smiosoft/react-core-boilerplate/_apis/build/status/smiosoft.react-core-boilerplate?branchName=master)](https://dev.azure.com/smiosoft/react-core-boilerplate/_build/latest?definitionId=2&branchName=master)

_Pre-configured solution for building a single-page-application with ASP.NET Core and React._

![React Core Boilerplate](./docs/.assets/project-title.png)

## Overview

[Live Demo](https://smiosoft.github.io/react-core-boilerplate)

### Features

- Optimised Webpack configuration
- Lazy loading and code splitting
- PWA and offline support
- SEO
- Hot reloading
- Azure pipelines

## Usage

### Prerequisites

- [.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/)
- [Node.js](https://nodejs.org/en/download/)

### Quick Start

Run the following commands to start the [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server):

```shell
cd ./src/Boilerplate.Web/
npm install
npm run start
```

### Build

Run the following commands to build the app with [`webpack`](https://github.com/webpack/webpack):

```shell
cd ./src/Boilerplate.Web/
npm run build
```

Build artifact can be found in the `wwwroot` folder.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please reference the [contributing](docs/CONTRIBUTING.md) docs for more information.
