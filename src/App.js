import React from 'react';
import { Routes, Route } from "react-router-dom";

// test pages
import Navbar from './testPages/components/Navbar';
import Home from './testPages/Home';
import TutorialZhTW from './testPages/TutorialZhTW';
import TutorialEn from './testPages/TutorialEn';
import ErrorPage from './testPages/ErrorPage';
import './App.css';

function App() {
    return (
        <>
            {/* testPages for blank0082's github pages */}
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tutorialZhTW' element={<TutorialZhTW />} />
                <Route path='/tutorialEn' element={<TutorialEn />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;