import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`${theme}-theme`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <div className="main">
            <div className="container">
              <Routes>
                <Route path="/" element={
                  <>
                    <Projects />
                    <Aside />
                  </>
                } />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
              </Routes>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;