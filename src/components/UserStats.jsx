import React from 'react';

const UserStats = ({ streak, co2Saved }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-green-800 bg-opacity-60 rounded-lg shadow-lg p-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-700 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2m0 2c-1.11 0-2.08-.402-2.599-1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="text-3xl font-bold">{streak}</div>
        <div className="text-sm text-green-300">Green Streak</div>
      </div>

      <div className="bg-green-800 bg-opacity-60 rounded-lg shadow-lg p-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-700 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="text-3xl font-bold">{co2Saved.toFixed(2)} kg</div>
        <div className="text-sm text-green-300">CO₂ Saved</div>
      </div>
    </div>
  );
};

export default UserStats;
