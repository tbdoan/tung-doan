import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import pfp from './images/not_edward.jpeg';

const Profile = ({ id }) => {
  const [javaProgress, setJavaProgress] = useState(0);
  const [pythonProgress, setPythonProgress] = useState(0);

  useEffect(() => {
    if (javaProgress < 60) {
      setTimeout(() => setJavaProgress(javaProgress + 1), javaProgress * 2);
    }
  }, [javaProgress]);
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage:
          'linear-gradient(to bottom right, white, #6c3, #09f, white)',
      }}
      className="section"
      id={id}
    >
      <div className="container basic-grid">
        <div className="fireship-card">Tung Doan</div>
        <div className="fireship-card">
          <img src={pfp} width="400px" height="400px"></img>
        </div>
        <div className="fireship-card">
          <span style={{ fontSize: '1.5rem' }}>Skills</span>
          <p>Java</p>
          <ProgressBar now={javaProgress} />
          <p>Python</p>
          <ProgressBar now={30} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
