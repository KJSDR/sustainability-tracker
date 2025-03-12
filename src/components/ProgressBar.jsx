import React from 'react';

const ProgressBar = ({ points, level }) => {
  const pointsNeededForNextLevel = level * 100; // Example: 100 points per level
  const progressPercentage = (points / pointsNeededForNextLevel) * 100;

  return (
    <div className="w-full bg-green-600 rounded-full h-4 mb-4">
      <div
        className="bg-green-900 h-4 rounded-full text-xs font-medium text-blue-100 text-center p-0.5 leading-none"
        style={{ width: `${Math.min(progressPercentage, 100)}%` }}
      >
        {`Level ${level} - ${Math.round(progressPercentage)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
