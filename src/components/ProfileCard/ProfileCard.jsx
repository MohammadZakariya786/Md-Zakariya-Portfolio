import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ 
  backgroundImage, 
  name = "Your Name",
  className = "" 
}) => {
  return (
    <div className={`profile-card ${className}`}>
      <div className="card-inner">
        <div className="card-front">
          <div 
            className="card-background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="glass-overlay" />
          <div className="card-content">
            <div className="name-container">
              <h2 className="name">{name}</h2>
            </div>
          </div>
          <div className="floating-elements">
            <div className="floating-dot dot-1"></div>
            <div className="floating-dot dot-2"></div>
            <div className="floating-dot dot-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;