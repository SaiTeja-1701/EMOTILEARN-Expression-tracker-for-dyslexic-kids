import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="landing-navbar">
        <span className="logo">EMOTILEARN</span>
        <div>
          <Link to="/admin-login">Admin Login</Link>
          <Link to="/child-login">Play Game</Link>
        </div>
      </nav>

      <div className="hero-section">
        <h1 className="hero-title">Welcome to MyProject</h1>
        <p className="hero-subtitle">An engaging experience awaits you!</p>
        <Link to="/child-login">
          <button className="hero-button" Link to="/child-login">Start Playing</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
