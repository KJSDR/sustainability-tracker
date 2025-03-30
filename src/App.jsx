import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import ActivityInput from './components/ActivityInput';
import ActivityLog from './components/ActivityLog';
import UserStats from './components/UserStats';
import './index.css';

const App = () => {
  const [points, setPoints] = useState(0);
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Calculate level based on points
    const newLevel = Math.floor(points / 100) + 1;
    if (newLevel !== level) {
      setLevel(newLevel);
    }
  }, [points, level]);

  const addActivity = (activity) => {
    const newActivity = {
      ...activity,
      date: new Date().toLocaleString(),
      id: Date.now()
    };
    
    setActivities([newActivity, ...activities]); // Add new activity at the top
    setPoints(points + activity.points);
    setCoins(coins + activity.coins);
  };

  return (
    <div className="min-h-screen bg-green-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <div className="mb-8">
          <ProgressBar points={points} level={level} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <UserStats level={level} points={points} coins={coins} />
            <ActivityInput addActivity={addActivity} />
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Your Green Activities</h2>
            <ActivityLog activities={activities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;