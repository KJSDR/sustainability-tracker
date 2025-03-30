import React from 'react';

const UserStats = ({ level, points, coins }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-green-800 bg-opacity-60 rounded-lg shadow-lg p-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-700 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="text-3xl font-bold">{level}</div>
        <div className="text-sm text-green-300">Level</div>
      </div>
      
      <div className="bg-green-800 bg-opacity-60 rounded-lg shadow-lg p-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-700 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="text-3xl font-bold">{points}</div>
        <div className="text-sm text-green-300">Points</div>
      </div>
      
      <div className="bg-green-800 bg-opacity-60 rounded-lg shadow-lg p-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-700 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="text-3xl font-bold">{coins}</div>
        <div className="text-sm text-green-300">Green Coins</div>
      </div>
    </div>
  );
};

export default UserStats;