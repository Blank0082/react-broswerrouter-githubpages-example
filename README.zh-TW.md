#   使用 React Router 與 Webpack 並部署至 GitHub Pages

[English](README.md) | [繁體中文](README.zh-TW.md)

本專案展示了如何使用 **React Router** 與 **BrowserRouter**，並透過 **Webpack** 將應用程式部署到 **GitHub Pages**。專案包含繁體中文與英文兩個教程，提供了詳細的設定與部署步驟。

##  目錄
- [安裝](#安裝)
- [專案設置](#專案設置)
- [運行開發伺服器](#運行開發伺服器)
- [部署到 GitHub Pages](#部署到-github-pages)
- [其他資訊](#其他資訊)
- [授權](#授權)

---

##  安裝

請確保您的開發環境已安裝 **npm** 和 **Node.js**，推薦使用的版本為：

- **npm**：>= 10
- **Node.js**：>= 22

執行以下指令來安裝必要的依賴：

```bash
npm install
```

這將安裝以下套件：

- **react**、**ReactDOM**、**react-router-dom**。
- **Wbpack**、**Webpack Dev Server**、**Babel**及相關工具。

##  專案設置

此專案使用 **Webpack** 與 **React Router**。您可以在專案中找到主要的配置文件：

- **webpack.config.js**：Webpack 的打包與開發環境配置文件。
- **.babelrc**：Babel 的配置文件，用於編譯 JavaScript 與 JSX。

您還可以在 src/ 資料夾中找到主要的 React 組件。

### 檔案結構

```bash
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Optional favicon
├── src/
│   ├── testPages/          # Tutorial pages (Traditional Chinese and English)
│   │   ├── components/     # Reusable components like CopyCodeBlock
│   │   └── css/            # Stylesheets for the project
│   ├── App.js              # Main App component
│   ├── index.js            # Entry point for React app
│   └── App.css             # Stylesheets for the project
├── .babelrc                # Babel configuration
├── webpack.config.js       # Webpack configuration
├── package.json            # Dependencies and scripts
└── package-lock.json       # Lock file for dependencies
```

## 運行開發伺服器

若要在本地開發環境中運行專案，請使用以下指令：

```bash
npm start
```

這將啟動一個開發伺服器，並在瀏覽器中打開 http://localhost:3000 來檢視應用程式。

## 部署到 GitHub Pages

若要將專案部署至 **GitHub Pages**，請依照以下步驟進行：

1.	在 package.json 文件中，設置 **homepage** 欄位為您的 GitHub Pages 項目網址，例如：

```json
{
  "homepage": "https://{your-github-username}.github.io/{your-repo-name}"
}
```

2.	在 src/index.js 文件中設置 **basename**：

```javascript
<BrowserRouter basename="/{your-repo-name}">
```

3.  確認 webpack.config.js 中的 **publicPath** 設置正確：

```javascript
publicPath: '/{your-repo-name}/',
```

4.	執行以下部署指令：

```bash
npm run deploy
```

這會自動打包並將您的應用程式部署至 GitHub Pages。

##  其他資訊

欲查看詳細教學，請參考本專案中的教程：

- [使用 React 的 BrowserRouter 並通過 Webpack 部署到 GitHub Pages - 繁體中文版](https://blank0082.github.io/reactRouterGithubPagesWithWebpackExample/tutorialZhTw)
- [Using React's BrowserRouter and Deploying to GitHub Pages with Webpack - 英文版](https://blank0082.github.io/reactRouterGithubPagesWithWebpackExample/tutorialEn)

這些教程提供了關於如何設置專案、配置 Webpack 和 Babel 以及部署至 GitHub Pages 的詳細步驟。

##  授權

本專案使用 MIT 授權。
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