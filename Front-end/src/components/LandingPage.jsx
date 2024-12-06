import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout'; // Adjust the path to the Layout component
import '../styles/LandingPage.css'; // Adjust CSS path as needed

const LandingPage = () => {
  return (
    <Layout hideNavbar={true}>
      <div className="hero-section">
        <h1 className="hero-title">Welcome to MyProject</h1>
        <p className="hero-subtitle">An engaging experience awaits you!</p>
        <Link to="/child-login">
          <button className="hero-button">Start Playing</button>
        </Link>
      </div>
    </Layout>
  );
};

export default LandingPage;
