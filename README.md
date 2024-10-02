# React Router with Webpack and Deployment to GitHub Pages

This repository demonstrates how to set up a **React** project using **React Router** with **BrowserRouter** and deploy it to **GitHub Pages** using **Webpack**. The project contains two tutorials, one in Traditional Chinese (繁體中文) and one in English, and provides detailed steps for the setup and deployment process.

## Table of Contents
- [Installation](#installation)
- [Project Setup](#project-setup)
- [Running the Development Server](#running-the-development-server)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Additional Information](#additional-information)
- [License](#license)

---

## Installation

Make sure you have **npm** and **Node.js** installed in your environment. The recommended versions are:

- **npm**: >= 10
- **Node.js**: >= 22

Run the following command to install the necessary dependencies:

```bash
npm install
```
This will install the following:

- React, ReactDOM, React Router
- Webpack, Webpack Dev Server, Babel, and related tools

## project-setup

The project is set up using Webpack and React Router. You can find the main configuration files:

- **webpack.config.js**: Webpack configuration for bundling and development.
- **.babelrc**: Babel configuration for transpiling modern JavaScript and JSX.

You will also find the main React components under the src/ folder.

### File Structure
```bash
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Optional favicon
├── src/
│   ├── components/         # Reusable components like CopyCodeBlock
│   ├── testPages/          # Tutorial pages (Traditional Chinese and English)
│   ├── App.js              # Main App component
│   ├── index.js            # Entry point for React app
│   └── css/                # Stylesheets for the project
├── .babelrc                # Babel configuration
├── webpack.config.js       # Webpack configuration
├── package.json            # Dependencies and scripts
└── package-lock.json       # Lock file for dependencies
```

## Running the Development Server

To run the project locally for development, use the following command:
```bash
npm start
```
This will start a development server at http://localhost:3000, where you can view the app.

## Deploying to GitHub Pages

To deploy the project to GitHub Pages, follow these steps:

1.  In the package.json file, set the homepage field to the URL of your GitHub Pages project. For example:
```json
{
  "homepage": "https://{your-github-username}.github.io/{your-repo-name}"
}
```

2.	Set the basename in the src/index.js file:
```javascript
<BrowserRouter basename="/{your-repo-name}">
```
3.  Make sure the publicPath is set correctly in webpack.config.js:
```javascript
publicPath: '/{your-repo-name}/',
```
4.	Run the deploy command:
```bash
npm run deploy
```

This will build the project and deploy it to GitHub Pages.

## Additional Information:

For more detailed instructions, please check the tutorials available in this repository:

- [使用 React 的 BrowserRouter 並通過 Webpack 部署到 GitHub Pages (Traditional Chinese)](https://blank0082.github.io/reactRouterGithubPagesWithWebpackExample/tutorialZhTw)
- [Using React's BrowserRouter and Deploying to GitHub Pages with Webpack (English)](https://blank0082.github.io/reactRouterGithubPagesWithWebpackExample/tutorialEn)

These tutorials provide a step-by-step guide to setting up the project, configuring Webpack and Babel, and deploying to GitHub Pages.

## License

LICENSE (MIT License)
```
Copyright (c) 2024 blank0082

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
