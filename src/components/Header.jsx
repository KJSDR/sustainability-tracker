import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Green Guardian</h1>
        <p className="text-green-200 text-lg">Track your sustainable living journey</p>
      </div>
      <div className="hidden md:block">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <span className="text-xl font-semibold">Sustainable Living Tracker</span>
        </span>
      </div>
    </header>
  );
};

export default Header;