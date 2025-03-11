import React from 'react';

const CoinDisplay = ({ coins }) => (
  <div className="text-center p-4 bg-green-200 border border-green-300 rounded-md shadow-sm">
    Coins: {coins}
  </div>
);

export default CoinDisplay;
