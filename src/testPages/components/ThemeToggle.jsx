import React, { useState, useEffect } from 'react';
import '../css/ThemeToggle.css';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div className="NavBarAppearance">
            <button
                className="SwitchAppearance "
                type="button"
                role="switch"
                title={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
                aria-checked={isDarkMode}
                onClick={toggleTheme}
            >
                <span className="check">
                    <span className="icon">
                        <span className="sun">☀️</span>
                        <span className="moon">🌙</span>
                    </span>
                </span>
            </button>
        </div>
    );
};

export default ThemeToggle;