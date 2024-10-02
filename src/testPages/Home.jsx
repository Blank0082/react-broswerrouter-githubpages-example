import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';

function Home() {
    return (
        <main>
            <h1>Home</h1>
            <div className="home-content">
                <div className="column">
                    <p>這個儲存庫示範如何使用 BrowserRouter 設置 React 專案，並通過 Webpack 部署到 GitHub Pages。</p>
                    <p>內容包含操作步驟、配置範例以及將 Webpack 與 React Router 部署到 GitHub Pages 的最佳作法。</p>
                    <Link to="/tutorialZhTW">繁體中文版教程</Link>
                </div>
                <div className="column">
                    <p>This repository demonstrates how to set up a React project using BrowserRouter and deploy it to GitHub Pages with Webpack.</p>
                    <p>It includes step-by-step instructions, configuration examples, and best practices for integrating Webpack with React Router in a GitHub Pages deployment.</p>
                    <Link to="/tutorialEn">English Ver Tutorial</Link>
                </div>
            </div>
        </main>
    );
}

export default Home;