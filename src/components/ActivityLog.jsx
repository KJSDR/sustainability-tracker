import React from 'react';

const ActivityLog = ({ activities }) => {
  if (activities.length === 0) {
    return (
      <div className="bg-green-800 bg-opacity-40 rounded-lg p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold mb-2">No activities yet</h3>
        <p className="text-green-200">Start adding your green activities to see them here!</p>
      </div>
    );
  }

  return (
    <div className="bg-green-800 bg-opacity-40 rounded-lg shadow-lg overflow-hidden">
      <ul className="divide-y divide-green-700">
        {activities.map((activity) => (
          <li key={activity.id} className="p-4 hover:bg-green-700 transition duration-150">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-lg">{activity.name}</p>
                <p className="text-sm text-green-300">{activity.date}</p>
              </div>
              <div className="flex space-x-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-100">
                  {activity.points} pts
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-900 text-yellow-100">
                  {activity.coins} coins
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;