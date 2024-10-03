import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../css/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className={`navbar ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
            <div className="container">
                <div className="title">
                    <Link to='/' onClick={() => setIsMenuOpen(false)}>React Router Example:<br />Deploying to GitHub Pages <br />with Webpack</Link>
                </div>
                <div className='content'>
                    <div className='content-body'>
                        <nav className="nav-links">
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                            <Link to='/tutorialZhTw' onClick={() => setIsMenuOpen(false)}>
                                Tutorial-zh-TW
                            </Link>
                            <Link to='/tutorialEn' onClick={() => setIsMenuOpen(false)}>
                                Tutorial-en
                            </Link>
                            <Link
                                to='https://github.com/Blank0082/reactRouterGithubPagesWithWebpackExample'
                                target="_blank"
                                rel="noopener noreferrer"
                                className='external-link-icon'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Github
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </Link>
                            <ThemeToggle />
                        </nav>
                    </div>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
            </div>
            <div className="divider" />
        </header>
    );
}

export default Navbar;