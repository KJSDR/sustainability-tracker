import React, { useState } from 'react';

const TransportationForm = ({ onCalculate }) => {
  const [pointA, setPointA] = useState('');
  const [pointB, setPointB] = useState('');
  const [mode, setMode] = useState('driving'); // Default mode

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(pointA, pointB, mode);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-white">From (Point A):</label>
        <input
          type="text"
          value={pointA}
          onChange={(e) => setPointA(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white">To (Point B):</label>
        <input
          type="text"
          value={pointB}
          onChange={(e) => setPointB(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white">Mode of Transport:</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
        >
          <option value="walking">Walking</option>
          <option value="biking">Biking</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="flying">Flying</option>
          <option value="driving">Driving</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Calculate Emissions
      </button>
    </form>
  );
};

export default TransportationForm;
