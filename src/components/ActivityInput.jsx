import React, { useState } from 'react';

const ActivityInput = ({ addActivity }) => {
  const [activity, setActivity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity({ name: activity, points: 10, coins: 5 }); // Example points and coins
    setActivity('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="Enter green activity"
        className="w-full p-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
      />
      <button
        type="submit"
        className="mt-2 w-full bg-green-500 text-white p-2 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Add Activity
      </button>
    </form>
  );
};

export default ActivityInput;
