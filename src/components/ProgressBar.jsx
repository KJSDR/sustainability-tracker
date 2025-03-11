import React from 'react';

const ProgressBar = ({ points, level }) => {
  const progressPercentage = (points / (level * 100)) * 100;

  return (
    <div className="w-full bg-green-200 rounded-full h-4">
      <div
        className="bg-green-600 h-4 rounded-full text-xs font-medium text-blue-100 text-center p-0.5 leading-none"
        style={{ width: `${progressPercentage}%` }}
      >
        {`${Math.round(progressPercentage)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
