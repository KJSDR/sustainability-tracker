import React from 'react';

const Shop = ({ purchaseItem, closeModal, coins }) => {
  const items = [
    { name: 'Cat', cost: 300, image: 'src/assets/blackcat.png' },
    { name: 'Turtle', cost: 150, image: 'src/assets/turtle.png' },
    { name: 'Golden Pig', cost: 150, image: 'src/assets/goldenpig.png' },
    { name: 'Lupine Pig', cost: 150, image: 'src/assets/lupinepig.png' },
    { name: 'Cool Dog', cost: 500, image: 'src/assets/cool dog.png'}
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Shop</h2>
        <div className="text-center mb-4">
          <span className="text-lg font-semibold">Your Coins: {coins}</span>
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[60vh]">
          {items.map((item, index) => (
            <div key={index} className="p-4 bg-green-100 border border-green-300 rounded-md shadow-sm text-center">
              <img src={item.image} alt={item.name} className="mx-auto mb-2 w-24 h-24 object-contain" />
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
        <button
          onClick={closeModal}
          className="mt-4 w-full bg-red-500 text-white p-2 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Shop;
