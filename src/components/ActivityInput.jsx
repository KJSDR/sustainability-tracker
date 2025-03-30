import React, { useState } from 'react';

const ActivityInput = ({ addActivity }) => {
  const [activity, setActivity] = useState('');
  const [points, setPoints] = useState(10);
  const [coins, setCoins] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.trim() === '') return;
    
    addActivity({ 
      name: activity,
      points: parseInt(points),
      coins: parseInt(coins)
    });
    
    setActivity('');
  };

  return (
    <div className="bg-green-800 bg-opacity-50 rounded-lg shadow-lg p-4 mb-8">
      <h2 className="text-xl font-bold mb-4">Add New Activity</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="activity" className="block text-sm font-medium mb-1">
            What sustainable action did you take?
          </label>
          <input
            id="activity"
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="E.g., Used reusable shopping bags"
            className="w-full p-2 bg-green-700 border border-green-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-white placeholder-green-300"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="points" className="block text-sm font-medium mb-1">
              Points
            </label>
            <select
              id="points"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              className="w-full p-2 bg-green-700 border border-green-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
            >
              <option value="5">5 - Small impact</option>
              <option value="10">10 - Medium impact</option>
              <option value="15">15 - Large impact</option>
              <option value="25">25 - Huge impact</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="coins" className="block text-sm font-medium mb-1">
              Green Coins
            </label>
            <select
              id="coins"
              value={coins}
              onChange={(e) => setCoins(e.target.value)}
              className="w-full p-2 bg-green-700 border border-green-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
            >
              <option value="2">2 coins</option>
              <option value="5">5 coins</option>
              <option value="8">8 coins</option>
              <option value="10">10 coins</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-md shadow transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          Add to Your Journey
        </button>
      </form>
    </div>
  );
};

export default ActivityInput;