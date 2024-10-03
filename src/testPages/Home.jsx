import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';

function Home() {
    return (
        <main>
            <h1>Home</h1>
            <div className="home-content">
                <div className="column">
                    <p>這個網站介紹如何使用 BrowserRouter 設置 React 專案，並通過 Webpack 部署到 GitHub Pages。</p>
                    <p>包括如何使用 BrowserRouter 管理不同的路由，以及有效處理Github Pages 的 404 頁面。</p>
                    <p><Link to="/tutorialZhTW">繁體中文版教程</Link></p>
                    <br />
                    <p>如果你需要範例或想查看完整的代碼，可以前往我的 GitHub 項目查看或者下載：</p>
                    <p>
                        <Link to="https://github.com/blank0082/reactRouterGithubPagesWithWebpackExample" target="_blank" rel="noopener noreferrer">
                            https://github.com/Blank0082/reactRouterGithubPagesWithWebpackExample

                        </Link>
                    </p>
                </div>
                <div className="column">
                    <p>This Site explains how to set up a React project using BrowserRouter and deploy it to GitHub Pages with Webpack.</p>
                    <p>Including managing different routes with BrowserRouter and handling Github Pages's 404 pages effectively.</p>
                    <p><Link to="/tutorialEn">English Ver Tutorial</Link></p>
                    <br />
                    <p>If you need a working example or want to see the full code implementation, feel free to visit my GitHub repository to view or download:</p>
                    <p>
                        <Link to="https://github.com/blank0082/reactRouterGithubPagesWithWebpackExample" target="_blank" rel="noopener noreferrer">
                            https://github.com/Blank0082/reactRouterGithubPagesWithWebpackExample
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Home;