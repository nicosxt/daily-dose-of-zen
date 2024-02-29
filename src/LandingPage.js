import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="landing-container">
        <h1 className="landing-item">Daily Dose of Zen</h1>
        <button className="general-button" onClick={() => navigate('/input')}>I'm Ready</button>
      </div>
    </div>
  );
}

export default LandingPage;