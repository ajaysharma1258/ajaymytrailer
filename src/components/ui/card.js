import React from 'react';
import './card.css';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`card-content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardOverlay = ({ children, className = '' }) => {
  return (
    <div className={`card-overlay ${className}`}>
      {children}
    </div>
  );
};