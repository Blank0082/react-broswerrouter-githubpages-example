import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <main>
            <h1>Home</h1>
            <p>This repository demonstrates how to set up a React project using BrowserRouter and deploy it to GitHub Pages with Webpack.
                It includes step-by-step instructions,
                configuration examples, 
                and best practices for integrating Webpack with React Router in a GitHub Pages deployment.</p>
            <Link to="/tutorialZhTW">中文教程</Link>
            <Link to="/tutorialEn">English Tutorial</Link>
        </main>
    );
}

export default Home;