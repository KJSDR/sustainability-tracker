import React from 'react';

const ActivityLog = ({ activities }) => (
  <ul className="space-y-2 p-4 bg-amber-900 bg-opacity-90 shadow-lg">
    {activities.map((activity, index) => (
      <li key={index} className="p-2 bg-amber-950 border border-amber-700 shadow-sm">
        {activity.name}
      </li>
    ))}
  </ul>
);

export default ActivityLog;
