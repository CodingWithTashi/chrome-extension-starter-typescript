# chrome-extension-starter-typescript

Chrome Extension Typescript starter

<!-- add image here -->
<img src="https://raw.githubusercontent.com/CodingWithTashi/chrome-extension-starter-typescript/refs/heads/main/icons/demo.png" alt="Chrome Extension Starter" width="580" height="230">


This is a starter project for building Chrome extensions using TypeScript. It includes a basic setup with a bundler and essential packages to streamline the development process.

## Project Structure

- `src/`: Contains the source code for the extension.
- `dist/`: The output directory for the bundled code.
- `manifest.json`: The configuration file for the Chrome extension.

## Bundler

We are using `webpack` as the bundler for this project. Webpack helps in bundling the TypeScript code and other assets into a format that can be used by the Chrome extension. It also supports various loaders and plugins to handle different types of files and optimize the build process.

## Packages

Here is a list of packages used in this project and their purposes:

- `typescript`: Adds TypeScript support to the project.
- `webpack`: Bundles the source code and assets.
- `webpack-cli`: Provides a command-line interface for webpack.
- `ts-loader`: A TypeScript loader for webpack.
- `html-webpack-plugin`: Simplifies the creation of HTML files to serve the webpack bundles.
- `clean-webpack-plugin`: Cleans the output directory before each build.
- `copy-webpack-plugin`: Copies files from the source directory to the output directory.

## Commands

Here are the commands defined in `package.json` and their purposes:

- `build`: Runs webpack to bundle the source code and assets.
- `watch`: Runs webpack in watch mode to automatically rebuild the project on file changes.
- `start`: Starts a development server for the extension.
- `lint`: Runs ESLint to check for code quality issues.
- `format-check`: Formats check using Prettier.
- `format`: Formats the code using Prettier.

## Getting Started

1. **Clone the repository:**

```sh
git clone https://github.com/CodingWithTashi/chrome-extension-starter-typescript.git
   ```
2. **Install dependencies**
```sh
npm run install
   ```
3. **Start application**
```sh
npm run start
   ```
4. **Format code**
```sh
npm run format
   ```   
5. **Build application**
```sh
npm run build
   ```

## Disclaimer
If you enjoy this
project, I'd appreciate your [🌟 on GitHub](https://github.com/CodingWithTashi/chrome-extension-starter-typescript/).   

## You can also buy me a cup of coffee   
<a href="https://www.buymeacoffee.com/codingwithtashi"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width=200px></a>

   
   


   