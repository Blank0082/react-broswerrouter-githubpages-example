import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

{/* basename for blank0082's github pages */}
root.render(
    <BrowserRouter basename="/reactRouterGithubPagesWithWebpackExample">
        <App />
    </BrowserRouter>
);