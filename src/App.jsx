import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ActivityInput from './components/ActivityInput';
import ActivityLog from './components/ActivityLog';
import UserStats from './components/UserStats';
import TransportationForm from './components/TransportationForm';
import './index.css';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [streak, setStreak] = useState(0);
  const [co2Saved, setCo2Saved] = useState(0);
  const [emissions, setEmissions] = useState(null);

  useEffect(() => {
    // Calculate streak based on activities
    const today = new Date().toLocaleDateString();
    const lastActivityDate = activities.length > 0 ? new Date(activities[0].date).toLocaleDateString() : null;

    if (lastActivityDate && lastActivityDate === today) {
      setStreak((prevStreak) => prevStreak + 1);
    } else if (lastActivityDate) {
      setStreak(1);
    }
  }, [activities]);

  const addActivity = (activity) => {
    const newActivity = {
      ...activity,
      date: new Date().toLocaleString(),
      id: Date.now()
    };

    setActivities([newActivity, ...activities]); // Add new activity at the top
    setCo2Saved((prevCo2Saved) => prevCo2Saved + activity.co2Saved);
  };

  const calculateEmissions = (pointA, pointB, mode) => {
    // For simplicity, assume a fixed distance. In a real application, use a mapping API to get the actual distance.
    const distance = 100; // Distance in kilometers

    // Emission factors in kg CO₂ per kilometer
    const emissionFactors = {
      walking: 0,
      biking: 0,
      bus: 0.1,
      train: 0.05,
      flying: 0.2,
      driving: 0.25,
    };

    const emissions = distance * emissionFactors[mode];
    setEmissions(emissions);
  };

  return (
    <div className="min-h-screen bg-green-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <UserStats streak={streak} co2Saved={co2Saved} />
            <ActivityInput addActivity={addActivity} />
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Your Green Activities</h2>
            <ActivityLog activities={activities} />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">CO₂ Emissions Calculator</h2>
          <TransportationForm onCalculate={calculateEmissions} />
          {emissions !== null && (
            <div className="mt-4 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Estimated CO₂ Emissions:</h3>
              <p>{emissions.toFixed(2)} kg CO₂</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
