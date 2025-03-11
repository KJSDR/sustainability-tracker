import React from 'react';

const ActivityLog = ({ activities }) => (
  <ul className="space-y-2">
    {activities.map((activity, index) => (
      <li key={index} className="p-2 bg-green-100 border border-green-300 rounded-md shadow-sm">
        {activity.name}
      </li>
    ))}
  </ul>
);

export default ActivityLog;
