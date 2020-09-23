import React from 'react';
import Media from 'react-bootstrap/Media';

const ProfileCard = ({ dark, id }) => {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className={'section' + (dark ? ' section-dark' : '')}
      id={id}
    >
      <div className="section-content">
        <Media>
          <img
            width={250}
            height={250}
            style={{ marginRight: 100 }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Me%21.png/220px-Taylor_Swift_-_Me%21.png"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>Media Heading</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
      </div>
    </div>
  );
};

export default ProfileCard;
