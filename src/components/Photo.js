import React from 'react';

import profilePic from '../assets/pic.jpg';

const Photo = () => {
  return (
    <div className="photo-container">
      <img
        src={profilePic}
        alt="Jeff Wong's profile pic"
        height={200}
        width={200}
      />
    </div>
  );
};

export default Photo;
