// src/components/Header.jsx

import React from 'react';

function Header({ toggleTheme }) {
  return (
    <header className="main-header">
      <div className="header-container">
        <a href="#" className="header__logo">HN.</a>
        <nav className="main-nav">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header__actions">
          <button 
            id="toggle-theme" 
            aria-label="Toggle dark/light mode" 
            onClick={toggleTheme} 
          >
            <span className="toggle-thumb"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;