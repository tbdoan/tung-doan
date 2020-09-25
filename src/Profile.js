import React from 'react';
import ProgressBar from './ProgressBar';

const Profile = ({ id }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#00f260' /* fallback for old browsers */,
        backgroundImage: 'linear-gradient(to bottom right, #00f260, #0575e6)',
      }}
      className="section"
      id={id}
    >
      <div className="container basic-grid">
        <div className="fireship-card">Tung Doan</div>
        <div className="fireship-card"></div>
        <div className="fireship-card">
          <span style={{ fontSize: '1.5rem' }}>Stats</span>
          <hr />
          <p>Java </p>
          <ProgressBar width={500} percent={0.6} />
          <p>Python</p>
          <ProgressBar width={500} percent={0.55} />
          <p>C++</p>
          <ProgressBar width={500} percent={0.3} />
          <p>Javascript</p>
          <ProgressBar width={500} percent={0.8} />
          <p>Number of Friends</p>
          <ProgressBar width={500} percent={0.1} />

          <p style={{ marginTop: '10px' }}>
            Tools of the Trade: Jupyter Notebook, VSCode, Github, Google
            Firebase
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
