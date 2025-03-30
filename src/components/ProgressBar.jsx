import React from 'react';

const ProgressBar = ({ points, level }) => {
  const pointsForCurrentLevel = (level - 1) * 100;
  const pointsNeededForNextLevel = 100; // Points needed from current level to next level is always 100
  const progressInCurrentLevel = points - pointsForCurrentLevel;
  const progressPercentage = (progressInCurrentLevel / pointsNeededForNextLevel) * 100;

  return (
    <div className="relative">
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium">Level Progress</span>
        <span className="text-lg">{progressInCurrentLevel}/{pointsNeededForNextLevel} points</span>
      </div>
      <div className="w-full bg-green-800 rounded-full h-6 mb-1">
        <div
          className="bg-gradient-to-r from-green-400 to-green-200 h-6 rounded-full shadow-inner transition-all duration-500 ease-in-out"
          style={{ width: `${Math.min(progressPercentage, 100)}%` }}
        >
          <div className="flex h-full items-center justify-center">
            <span className="text-xs font-semibold text-green-900">
              {progressPercentage >= 15 ? `${Math.round(progressPercentage)}%` : ''}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-xs text-green-200">
        <span>Level {level}</span>
        <span>Level {level + 1}</span>
      </div>
    </div>
  );
};

export default ProgressBar;