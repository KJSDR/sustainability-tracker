import React from 'react';

const Plant = ({ level }) => (
  <div className="flex items-center justify-center">
    <img src={`plant_level_${level}.png`} alt="Plant" className="w-32 h-32 object-contain" />
  </div>
);

export default Plant;
