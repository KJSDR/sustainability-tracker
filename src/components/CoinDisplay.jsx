import React from 'react';

const CoinDisplay = ({ coins }) => (
  <div className="text-center p-4 bg-green-900 border border-green-950 rounded-md shadow-sm">
    Coins: {coins}
  </div>
);

export default CoinDisplay;
