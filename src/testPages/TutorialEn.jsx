import React from 'react';
import { Link } from 'react-router-dom';
import CopyCodeBlock from './components/CopyCodeBlock';
import './css/Code.css';

function TutorialEn() {
    return (
        <main>
            <h1>Using React's BrowserRouter and Deploying to GitHub Pages with Webpack</h1>
            <div>
                <h2>Introduction</h2>
                <p>This tutorial will guide you through using React's BrowserRouter and deploying it to GitHub Pages with Webpack.</p>

                <h2>Requirements</h2>
                <p>You need the following tools installed:</p>
                <ul>
                    <li><strong>npm</strong>, recommended version {'>'}= 10</li>
                    <li><strong>Node.js</strong>, recommended version {'>'}= 22</li>
                </ul>
                <p>Make sure your environment meets these requirements.</p>
                <p>Initialize your project with the following command:</p>
                <CopyCodeBlock
                    code={'npm init'}
                    isTerminal={true}
                />

                <h2>Step 1: Install React and React Router</h2>
                <p>Install the necessary dependencies using npm:</p>
                <CopyCodeBlock
                    code={'npm install react react-dom react-router-dom'}
                    isTerminal={true}
                />
                <p>Recommend using the following versions:</p>
                <ul>
                    <li><strong>react</strong> {'>'}= 18.3.1</li>
                    <li><strong>react-dom</strong> {'>'}= 18.3.1</li>
                    <li><strong>react-router-dom</strong> {'>'}= 6.26.2</li>
                </ul>

                <h2>Step 2: Install Webpack and Related Tools</h2>
                <p>Install Webpack, Babel, and other development tools:</p>
                <CopyCodeBlock
                    code={`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader gh-pages html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server`}
                    isTerminal={true}
                />
                <p>It is recommended to use the latest versions.</p>

                <h3>Development Tools Explanation:</h3>
                <ul>
                    <li><strong>@babel/core</strong> - Babel's core tool to convert modern JavaScript to a form understandable by browsers.</li>
                    <li><strong>@babel/preset-env</strong> - Babel preset to convert modern JavaScript to support various environments.</li>
                    <li><strong>@babel/preset-react</strong> - Babel preset to compile JSX and other React syntax.</li>
                    <li><strong>babel-loader</strong> - A bridge between Babel and Webpack, allowing Webpack to use Babel for processing.</li>
                    <li><strong>css-loader</strong> - Allows Webpack to load and process CSS files.</li>
                    <li><strong>gh-pages</strong> - A tool to easily deploy projects to GitHub Pages.</li>
                    <li><strong>html-webpack-plugin</strong> - Automatically generates HTML files and injects the bundled resources into the HTML file.</li>
                    <li><strong>style-loader</strong> - Allows Webpack to inject CSS as inline styles into HTML pages.</li>
                    <li><strong>webpack</strong> - A tool used to bundle JavaScript, CSS, and other resources.</li>
                    <li><strong>webpack-cli</strong> - A command-line interface tool for interacting with Webpack.</li>
                    <li><strong>webpack-dev-server</strong> - A local server for development, supporting hot module replacement.</li>
                </ul>

                <h2>Step 3: Configure Webpack and Babel</h2>
                <p>Create a <code>webpack.config.js</code> and <code>.babelrc</code> file in your project directory and configure them:</p>

                <h4><code>webpack.config.js</code></h4>
                <CopyCodeBlock
                    code={`const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/' // set publicPath to your GitHub repo name ex: '/my-repo-name/'
    },
    mode: argv.mode, // mode is set by the --mode flag in the npm script
    devtool: 'inline-source-map', // devtool is used for debugging in development mode
    devServer: {
      static: path.join(__dirname, 'public'),
      port: 3000,
      open: true,
      historyApiFallback: true,
    }, // devServer is used for development only
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/i,
          type: 'asset/resource'
        } // if you want to use images, you need to add this rule
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        favicon: './public/favicon.ico' // if you want to use a favicon, you need to add this line
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: '404.html',
        favicon: './public/favicon.ico' // if you want to use a favicon, you need to add this line
      }), // must set up 404.html for GitHub Pages to work
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
};`} />

                <h4><code>.babelrc</code></h4>
                <CopyCodeBlock
                    code={`{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}`} />

                <h2>Step 4: Create React Components</h2>
                <p>Create the <code>index.js</code>, <code>App.js</code>, and <code>index.html</code> files.</p>

                <h4><code>src/index.js</code></h4>
                <CopyCodeBlock
                    code={`import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>
);`} />

                <h4><code>src/App.js</code></h4>
                <CopyCodeBlock
                    code={`import React from 'react';
import { Routes, Route } from "react-router-dom";

function Home() {
    return <h1>Home</h1>;
}

function ErrorPage() {
    return <h1>Error Page</h1>;
}

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
}

export default App;`} />

                <h4><code>public/index.html</code></h4>
                <CopyCodeBlock
                    code={`<!DOCTYPE html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>{your-title-name}</title>
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>`} />

                <h2>Step 5: Start the Development Server</h2>
                <p>Run the following command to start the development server:</p>
                <CopyCodeBlock
                    code={'npm start'}
                    isTerminal={true}
                />
                <p>This command will start Webpack Dev Server, and you can test your app locally.</p>
                <p>By default, the server will run on <code>http://localhost:3000</code>, and you can view the app by opening this address in your browser.</p>

                <h2>Step 6: Initialize Git and Connect to Remote Repository</h2>
                <p>Before deploying to GitHub Pages, ensure that the project has been initialized with Git and is connected to a remote repository.</p>

                <h3>Step 6.1: Initialize Git</h3>
                <p>Run the following command in your project directory to initialize Git:</p>
                <CopyCodeBlock
                    code={`git init`}
                    isTerminal={true}
                />

                <h3>Step 6.2: Create GitHub Repository</h3>
                <p>If you haven't created a repository yet, follow these steps:</p>
                <ol>
                    <li>Log in to <Link to="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</Link>.</li>
                    <li>Click the <strong>+</strong> icon in the upper-right corner, then select <strong>New repository</strong>.</li>
                    <li>Name your repository, preferably the same as your project, and select <strong>Public</strong>.</li>
                    <li>Click <strong>Create repository</strong> to create it.</li>
                </ol>

                <h3>Step 6.3: Connect to Remote Repository</h3>
                <p>After creating the repository, connect your project to the GitHub repository:</p>
                <CopyCodeBlock
                    code={`git remote add origin https://github.com/{your-github-username}/{your-repo-name}.git`}
                    isTerminal={true}
                />

                <h3>Step 6.4: Push to Remote Repository (Optional)</h3>
                <p>If you don't want to push your code immediately, you can skip this step and do it later:</p>
                <CopyCodeBlock
                    code={`git add .\ngit commit -m "Initial commit"\ngit push -u origin main`}
                    isTerminal={true}
                />

                <h2>Step 7: Deploy to GitHub Pages</h2>

                <h3>Step 7.1: Modify <code>package.json</code></h3>
                <p>Add the following scripts to your <code>package.json</code> file:</p>
                <CopyCodeBlock code={`{
  "homepage": "https://{your-github-user-name}.github.io/{your-repo-name}",
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production",
    "deploy": "npm run build && gh-pages -d dist"
  }
}`} />

                <h3>Step 7.2: Set <code>basename</code> and <code>publicPath</code></h3>
                <ol>
                    <li>Set the <code>basename</code> in your <code>BrowserRouter</code>:</li>
                    <CopyCodeBlock code={`<BrowserRouter basename="/{your-repo-name}">`} />
                    <li>Ensure that the <code>publicPath</code> is set correctly in your <code>webpack.config.js</code>:</li>
                    <CopyCodeBlock code={`output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: '/{your-repo-name}/'
}`} />
                </ol>

                <h3>Step 7.3: Run the Deploy Command</h3>
                <p>Run the following command to deploy your app:</p>
                <CopyCodeBlock code={'npm run deploy'} isTerminal={true} />

                <h3>Step 7.4: View the Deployment</h3>
                <p>Once the deployment is complete, you can view your app at <code>https://username.github.io/my-repo-name</code>.</p>

                <h2>Conclusion:</h2>
                <p>If you need a working example or want to see the full code implementation, feel free to visit my GitHub repository to view or download:</p>
                <p>
                    <Link to="https://github.com/blank0082/reactRouterGithubPagesWithWebpackExample" target="_blank" rel="noopener noreferrer">
                        https://github.com/Blank0082/reactRouterGithubPagesWithWebpackExample
                    </Link>
                </p>
                <p>I hope this tutorial helps you successfully deploy your React app to GitHub Pages.</p>
            </div>
        </main>
    );
}

export default TutorialEn;