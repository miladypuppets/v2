import React, { useState } from 'react';
import './App.css';  // Import CSS for styling

function AssetSelector({ type, assets, onSelect }) {
  const [selectedAsset, setSelectedAsset] = useState('');

  const handleSelect = (asset) => {
    setSelectedAsset(asset);
    onSelect(type, asset);
  };

  return (
    <div className="category">
      <h3>{type}</h3>
      <div className="asset-grid">
        {assets.map((asset, index) => (
          <button key={index} 
                  className={`asset-button ${asset === selectedAsset ? 'selected' : ''}`}
                  onClick={() => handleSelect(asset)}>
            <img src={`/assets/${type}/${asset}`} alt={asset} style={{width: '100%', height: 'auto'}} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default AssetSelector;
