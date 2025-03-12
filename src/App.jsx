import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import ActivityInput from './components/ActivityInput';
import ActivityLog from './components/ActivityLog';
import Plant from './components/Plant';
import CoinDisplay from './components/CoinDisplay';
import Shop from './components/Shop';
import Background from './components/Background';
import './index.css'; // Ensure this line is present to apply the styles

const App = () => {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [coins, setCoins] = useState(0);
  const [activities, setActivities] = useState([]);
  const [backgroundItems, setBackgroundItems] = useState([]);
  const [isShopOpen, setIsShopOpen] = useState(false); // State for modal visibility

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
    setPoints(points + activity.points);
    setCoins(coins + activity.coins);
    checkLevelUp();
  };

  const checkLevelUp = () => {
    const pointsNeededForNextLevel = level * 100;
    if (points >= pointsNeededForNextLevel) {
      setLevel(level + 1);
      setPoints(points - pointsNeededForNextLevel); // Reset points for the new level
      setCoins(coins + 50); // Example: reward 50 coins for leveling up
    }
  };

  const purchaseItem = (item) => {
    if (coins >= item.cost) {
      setCoins(coins - item.cost);
      setBackgroundItems([...backgroundItems, item]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row app-container relative">
      <div className="w-full lg:w-1/4 mb-4 lg:mb-0 p-4 bg-opacity-90 rounded-lg shadow-lg">
        <ActivityInput addActivity={addActivity} />
        <ActivityLog activities={activities} />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center mb-4 lg:mb-0 p-4 bg-opacity-90 rounded-lg shadow-lg">
        <Plant level={level} />
      </div>
      <div className="w-full lg:w-1/4 p-4 bg-opacity-90 rounded-lg shadow-lg flex items-center justify-center">
        <CoinDisplay coins={coins} />
        <img
          src="src/assets/panda.png" // Update the path as needed
          alt="Shop Keeper"
          className="w-32 h-32 object-contain cursor-pointer mt-4"
          onClick={() => setIsShopOpen(true)}
        />
      </div>
      <ProgressBar points={points} level={level} />
      <Background backgroundItems={backgroundItems} />
      {isShopOpen && (
        <Shop purchaseItem={purchaseItem} closeModal={() => setIsShopOpen(false)} coins={coins} />
      )}
    </div>
  );
};

export default App;
