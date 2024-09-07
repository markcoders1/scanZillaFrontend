import React from 'react';
import './Uiverse.css';

const Uiverse = ({ progress }) => {
  const percentage = typeof progress === 'string' ? parseFloat(progress) * 100 : progress;
  return (
    <div className="loader1234" style={{ '--percentage': `${percentage}%` }} data-percentage={Math.round(percentage)}>
      {/* Removed inner div, as we use data-attribute for content now */}
    </div>
  );
};

export default Uiverse;