import React, { useState } from 'react';

const ActivityInput = ({ addActivity }) => {
  const [activity, setActivity] = useState('');

  // Predefined activities with their corresponding CO₂ saved values
  const activities = [
    { name: 'Used reusable shopping bags', co2Saved: 0.05 },
    { name: 'Biked to work', co2Saved: 0.2 },
    { name: 'Planted a tree', co2Saved: 0.5 },
    { name: 'Ate a plant-based meal', co2Saved: 0.1 },
    { name: 'Used public transportation', co2Saved: 0.3 },
    // Add more activities as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity === '') return;

    const selectedActivity = activities.find(act => act.name === activity);
    if (selectedActivity) {
      addActivity({
        name: selectedActivity.name,
        co2Saved: selectedActivity.co2Saved,
      });
    }

    setActivity('');
  };

  return (
    <div className="bg-green-800 bg-opacity-50 rounded-lg shadow-lg p-4 mb-8">
      <h2 className="text-xl font-bold mb-4">Add New Activity</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="activity" className="block text-sm font-medium mb-1">
            Select a sustainable action:
          </label>
          <select
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full p-2 bg-green-700 border border-green-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
            required
          >
            <option value="" disabled>Select an activity</option>
            {activities.map((act, index) => (
              <option key={index} value={act.name}>
                {act.name}
              </option>
            ))}
          </select>
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
