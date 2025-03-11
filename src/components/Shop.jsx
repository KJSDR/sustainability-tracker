import React from 'react';

const Shop = ({ purchaseItem }) => {
  const items = [
    { name: 'Cat', cost: 300 },
    { name: 'Bike', cost: 150 },
  ];

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="p-4 bg-green-100 border border-green-300 rounded-md shadow-sm">
          <span>{item.name} - {item.cost} coins</span>
          <button
            onClick={() => purchaseItem(item)}
            className="mt-2 w-full bg-green-500 text-white p-2 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
