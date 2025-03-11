import React from 'react';

const Background = ({ backgroundItems }) => (
  <div className="relative w-full h-full">
    {backgroundItems.map((item, index) => (
      <div key={index} className={`absolute bg-no-repeat ${item.name.toLowerCase()}`}>
        {/* Display background items */}
      </div>
    ))}
  </div>
);

export default Background;
