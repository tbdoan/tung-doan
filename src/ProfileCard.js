import React from 'react';
import Media from 'react-bootstrap/Media';

const ProfileCard = ({ dark, id }) => {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className={'profile-card section' + (dark ? ' section-dark' : '')}
      id={id}
    >
      <div className="section-content">
        <Media
          className="section"
          style={{
            backgroundColor: 'rgba(200, 200, 200, 0.3)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <img
            width={250}
            height={250}
            style={{ marginRight: 100 }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Me%21.png/220px-Taylor_Swift_-_Me%21.png"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>Tung Doan</h5>
            <ul>
              <li> Second year Math-CS major at UCSD </li>
              <li> Trapstar </li>
              <li> Academic </li>
            </ul>
          </Media.Body>
        </Media>
      </div>
    </div>
  );
};

export default ProfileCard;
