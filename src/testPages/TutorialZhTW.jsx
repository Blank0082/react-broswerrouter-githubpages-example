import React from 'react';
import { Link } from 'react-router-dom';
import CopyCodeBlock from './components/CopyCodeBlock';
import './css/Code.css';

function TutorialZhTW() {
    return (
        <main>
            <h1>使用 React 的 BrowserRouter 並通過 Webpack 部署到 GitHub Pages</h1>
            <div>
                <h2>介紹</h2>
                <p>本教程將引導您如何使用 React 的 BrowserRouter 並通過 Webpack 將其部署到 GitHub Pages。</p>
                <h2>先決條件</h2>
                <p>需要安裝以下工具：</p>
                <ul>
                    <li><strong>npm</strong>，建議 {'>'}= 10</li>
                    <li><strong>Node.js</strong>，建議 {'>'}= 22.</li>
                </ul>
                <p>確保您的環境滿足以上要求。</p>
                <p>並初始化您的專案：</p>
                <CopyCodeBlock
                    code={'npm init'}
                    isTerminal={true}
                />
                <h2>步驟 1：安裝 React 和 React Router</h2>
                <p>使用 npm 安裝必要的依賴：</p>
                <CopyCodeBlock
                    code={'npm install react react-dom react-router-dom'}
                    isTerminal={true}
                />
                <p>建議使用以下版本：</p>
                <ul>
                    <li><strong>react</strong> {'>'}= 18.3.1</li>
                    <li><strong>react-dom</strong> {'>'}= 18.3.1</li>
                    <li><strong>react-router-dom</strong> {'>'}= 6.26.2</li>
                </ul>

                <h2>步驟 2：安裝 Webpack 和相關工具</h2>
                <p>安裝 Webpack、Babel 和其他開發工具：</p>
                <CopyCodeBlock
                    code={`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader gh-pages html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server`}
                    isTerminal={true}
                />
                <p>建議使用最新版本。</p>
                <h3>必要開發工具包：</h3>
                <ul>
                    <li>
                        <strong>@babel/core</strong> - Babel 核心工具，用於將最新的 JavaScript 轉換為瀏覽器可理解的代碼。
                    </li>
                    <li>
                        <strong>@babel/preset-env</strong> - Babel 預設集，用於轉換現代 JavaScript 代碼為兼容各個環境的代碼。
                    </li>
                    <li>
                        <strong>@babel/preset-react</strong> - 用於編譯 JSX 和其他 React 語法的 Babel 預設集。
                    </li>
                    <li>
                        <strong>babel-loader</strong> - Babel 與 Webpack 的橋樑，允許 Webpack 使用 Babel 來處理代碼。
                    </li>
                    <li>
                        <strong>css-loader</strong> - 允許 Webpack 加載並處理 CSS 文件。
                    </li>
                    <li>
                        <strong>gh-pages</strong> - 用於將項目輕鬆部署到 GitHub Pages 的工具。
                    </li>
                    <li>
                        <strong>html-webpack-plugin</strong> - 自動生成 HTML 文件，並將打包後的資源自動插入 HTML 文件中。
                    </li>
                    <li>
                        <strong>style-loader</strong> - 允許 Webpack 將 CSS 以內聯樣式的方式注入到 HTML 頁面中。
                    </li>
                    <li>
                        <strong>webpack</strong> - 用於打包 JavaScript、CSS 等資源的工具。
                    </li>
                    <li>
                        <strong>webpack-cli</strong> - 用於在命令行中與 Webpack 進行交互的工具。
                    </li>
                    <li>
                        <strong>webpack-dev-server</strong> - 為開發環境提供一個本地伺服器，並支持即時重載（Hot Module Replacement）。
                    </li>
                </ul>

                <h2>步驟 3：配置 Webpack 和 Babel</h2>
                <p>在專案目錄中創建 <code>webpack.config.js</code> 和 <code>.babelrc</code> 文件，並進行配置：</p>

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
      publicPath: '/' // set publicPath to your github repo name ex: '/my-repo-name/'
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
      ] // rules are used to tell webpack how to handle different file types
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
      }), // must set up 404.html for github pages to work
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    } // resolve is used to tell webpack how to resolve different file types
  }
};`} />
                <h4><code>webpack.config.js</code> 重要修改點：</h4>
                <ul>
                    <li>
                        <strong>publicPath</strong>:
                        <p>如果你要將專案部署到 GitHub Pages，<code>output.publicPath</code> 必須設置為你 GitHub 專案的名稱。</p>
                        <p>舉例你的專案網址是 <code>https://username.github.io/my-repo-name/</code>，那麼你應該將 <code>publicPath</code> 設置為 <code>/my-repo-name/</code>。</p>
                    </li>
                    <li>
                        <strong>404.html</strong>:
                        <p>GitHub Pages 不會自動處理無效的路徑，這會導致 React Router 產生錯誤，因為找不到路徑。</p>
                        <p>為了解決這個問題，你必須在 <code>plugins</code> 中新增一個 <code>HtmlWebpackPlugin</code> 插件，生成一個 <code>404.html</code> 頁面，內容與 <code>index.html</code> 一樣，這樣當用戶訪問無效的路徑時，GitHub Pages 會加載 <code>404.html</code>，並讓 React Router 處理路由。</p>
                    </li>
                </ul>
                <h4>其他注意事項：</h4>
                <ul>
                    <li>
                        <p>如果你正在使用自訂域名或部署到 GitHub Pages 的 <code>master</code> 或 <code>gh-pages</code> 分支，請確保 <code>pubicPath</code> 設置正確。</p>
                    </li>
                </ul>
                <h4><code>.babelrc</code></h4>
                <CopyCodeBlock
                    code={`{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}`} />
                <p>為了使 Babel 正確編譯現代 JavaScript 和 React 語法，您必須添加一個 <code>.babelrc</code> 文件，並在其中設置所需的預設集。</p>
                <p>這個文件會告訴 Babel 使用 <code>@babel/preset-env</code> 來處理 JavaScript，並使用 <code>@babel/preset-react</code> 來處理 React 的 JSX 語法。</p>

                <h2>步驟 4：創建 React 組件</h2>
                <p>創建 <code>index.js</code> 、 <code>App.js</code> 和 <code>index.html</code> 文件。</p>

                <h4><code>src/index.js</code></h4>
                <CopyCodeBlock
                    code={`import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>
);`} />
                <p><code>index.js</code> 重要修改點：</p>
                <ul>
                    <li><strong>BrowserRouter：</strong>
                        <p>當應用部署在 GitHub Pages 上時，<code>basename</code> 需要設置為你的專案路徑，類似 <code>basename="/my-repo-name"</code>。</p>
                    </li>
                </ul>

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

                <h2>步驟 5：啟動開發伺服器</h2>
                <p>運行以下命令來啟動開發伺服器：</p>
                <CopyCodeBlock
                    code={'npm start'}
                    isTerminal={true}
                />
                <p>這個命令會啟動 Webpack Dev Server，您可以在本地測試應用程式。</p>
                <p>預設情況下，伺服器會運行在 <code>http://localhost:3000</code>，您可以在瀏覽器中打開這個地址來查看應用的效果。</p>

                <h2>步驟 6：初始化 Git 並連接遠端儲存庫</h2>
                <p>在部署到 GitHub Pages 之前，您需要確保當前專案已經初始化 Git，並且已經連接到遠端儲存庫。</p>
                <p>如果您還沒有初始化 Git 和連接 GitHub 儲存庫，請按照以下步驟進行操作。</p>

                <h3>步驟 6.1：初始化 Git</h3>
                <p>在專案目錄中運行以下命令來初始化 Git：</p>
                <CopyCodeBlock
                    code={`git init`}
                    isTerminal={true}
                />
                <p>這個命令會在專案目錄中創建一個 Git 儲存庫。</p>

                <h3>步驟 6.2：創建 GitHub 儲存庫</h3>
                <p>如果您還沒有創建儲存庫，可以按照以下步驟創建：</p>
                <ol>
                    <li>登錄到 <Link to="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</Link>。</li>
                    <li>點擊右上角的 <strong>+</strong> 號，選擇 <strong>New repository</strong>。</li>
                    <li>為您的儲存庫命名，建議與專案名稱一致，並選擇 <strong>Public</strong>（公開）。</li>
                    <li>點擊 <strong>Create repository</strong> 來創建儲存庫。</li>
                </ol>

                <h3>步驟 6.3：連接遠端儲存庫</h3>
                <p>創建完儲存庫後，您會看到 GitHub 提供的遠端連接命令，將您的專案與 GitHub 儲存庫連結：</p>
                <CopyCodeBlock
                    code={`git remote add origin https://github.com/{your-github-username}/{your-repo-name}.git`}
                    isTerminal={true}
                />
                <p>用您的 GitHub 用戶名和儲存庫名稱替換 <code>{'{'}your-github-username{'}'}</code> 和 <code>{'{'}your-repo-name{'}'}</code>。</p>

                <h3>步驟 6.4：推送到遠端儲存庫（可選）</h3>
                <p>在連接到遠端儲存庫後，您可以運行以下命令將本地代碼推送到 GitHub</p>
                <p>（如果暫時不想推送，您可以跳過這一步，稍後再推送）：</p>
                <CopyCodeBlock
                    code={`git add .\ngit commit -m "Initial commit"\ngit push -u origin main`}
                    isTerminal={true}
                />
                <p>這個命令會將您本地的代碼添加到暫存區，提交到 Git 並推送到遠端儲存庫。</p>


                <h2>步驟 7：部署到 GitHub Pages</h2>
                <p>將應用部署到 GitHub Pages。</p>

                <h3>7.1 修改 <code>package.json</code> 文件</h3>
                <p>在 <code>package.json</code> 文件中，添加以下腳本：</p>
                <CopyCodeBlock code={`{
  "homepage": "https://{your-github-user-name}.github.io/{your-repo-name}",
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production",
    "deploy": "npm run build && gh-pages -d dist"
  }
}`} />
                <p>將 <code>homepage</code> 字段設置為你的 GitHub Pages 項目地址，替換 <code>{'{'}your-github-user-name{'}'}</code> 和 <code>{'{'}your-repo-name{'}'}</code> 為你的 GitHub 用戶名和項目名稱。</p>
                <p>例如：<code>https://username.github.io/my-repo-name</code>。</p>

                <h3>7.2 設置 <code>basename</code> 和 <code>publicPath</code></h3>
                <p>為了讓應用在 GitHub Pages 上正確運行，必須在以下兩個地方進行修改：</p>

                <ol><li>設置 React Router 的 <code>basename</code>：</li>
                    <p>在你的 <code>src/index.js</code> 文件中，設置 <code>BrowserRouter</code> 的 <code>basename</code> 屬性，使其匹配你的 GitHub Pages 項目路徑：</p>
                    <CopyCodeBlock code={`<BrowserRouter basename="/{your-repo-name}">`} />
                    <p>確保 <code>{'{'}your-repo-name{'}'}</code> 與 GitHub Pages 上的項目名稱一致。</p>

                    <li>設置 Webpack 的 <code>publicPath</code>:</li>
                    <p>在 <code>webpack.config.js</code> 中，確保 <code>output</code> 部分的 <code>publicPath</code> 被設置為你的項目路徑：</p>
                    <CopyCodeBlock code={`output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: '/{your-repo-name}/'
}`} />
                    <p>這樣可以確保 Webpack 構建的資源（如 JavaScript 和 CSS 文件）在 GitHub Pages 上被正確引用。</p>
                </ol>

                <h3>7.3 運行部署命令</h3>
                <p>運行以下命令進行部署：</p>
                <CopyCodeBlock code={'npm run deploy'} isTerminal={true} />
                <p>這個命令會自動構建你的應用，並將其部署到 GitHub Pages。</p>
                <p>部署需要一點時間。</p>

                <h3>7.4 查看部署結果</h3>
                <p>部署完成後，你可以在 <code>https://username.github.io/my-repo-name</code> 查看你的應用。</p>

                <h2>結尾：</h2>
                <p>如果你需要範例或想查看完整的代碼，可以前往我的 GitHub 項目查看或者下載：</p>
                <p>
                    <Link to="https://github.com/blank0082/reactRouterGithubPagesWithWebpackExample" target="_blank" rel="noopener noreferrer">
                        https://github.com/Blank0082/reactRouterGithubPagesWithWebpackExample

                    </Link>
                </p>
                <p>希望這個教程能幫助你順利地將 React 應用部署到 GitHub Pages。</p>
            </div>
        </main>
    );
}

export default TutorialZhTW;