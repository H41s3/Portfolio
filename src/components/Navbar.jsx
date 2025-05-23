import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMoon, IoSunny, IoMenu, IoClose } from 'react-icons/io5';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link to="/">
            <img 
              src="/images/ejc.png" 
              alt="SimpleBlog logo" 
              width="250" 
              className={`logo-${theme}`} 
            />
          </Link>

          <div className="btn-group">
            <button 
              className={`theme-btn theme-btn-mobile ${theme}`}
              onClick={toggleTheme}
            >
              {theme === 'light' ? <IoMoon className="moon" /> : <IoSunny className="sun" />}
            </button>

            <button 
              className="nav-menu-btn"
              onClick={() => setIsMenuOpen(true)}
            >
              <IoMenu />
            </button>
          </div>

          <div className="flex-wrapper">
            <ul className="desktop-nav">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About Me</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>

            <button 
              className={`theme-btn theme-btn-desktop ${theme}`}
              onClick={toggleTheme}
            >
              {theme === 'light' ? <IoMoon className="moon" /> : <IoSunny className="sun" />}
            </button>
          </div>

          <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
            <button 
              className="nav-close-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoClose />
            </button>

            <div className="wrapper">
              <p className="h3 nav-title">Main Menu</p>
              <ul>
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="h3 nav-title">Topics</p>
              <ul>
                <li className="nav-item">
                  <Link to="#" className="nav-link">Database</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">Accessibility</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">Web Performance</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;