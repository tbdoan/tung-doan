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

          <p>
            Java{' '}
            <span className="my-tooltip">
              ⓘ
              <span className="my-tooltiptext">
                Object-Oriented Programming, Data Structures, Spring Boot
              </span>
            </span>
          </p>
          <ProgressBar width={500} percent={0.6} />
          <p>
            Python{' '}
            <span className="my-tooltip">
              ⓘ
              <span className="my-tooltiptext">
                numpy, pandas, sk-learn, matplotlib, tensorflow, anaconda,
              </span>
            </span>
          </p>
          <ProgressBar active={false} width={500} percent={0.55} />
          <p>
            C++{' '}
            <span className="my-tooltip">
              ⓘ<span className="my-tooltiptext">Programming Abstractions</span>
            </span>
          </p>
          <ProgressBar width={500} percent={0.3} />
          <p>
            Javascript{' '}
            <span className="my-tooltip">
              ⓘ
              <span className="my-tooltiptext">
                Node, Typescript, Electron, express, mongodb
              </span>
            </span>
          </p>
          <ProgressBar width={500} percent={0.8} />
          <p>
            Number of Friends{' '}
            <span className="my-tooltip">
              ⓘ
              <span className="my-tooltiptext">
                Probably related to the Javascript stat
              </span>
            </span>
          </p>
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
