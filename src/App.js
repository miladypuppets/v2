import React, { useState } from 'react';
import AssetSelector from './AssetSelector';
import Canvas from './Canvas';
import assetsData from './assetsData';
import './App.css';

function App() {
  const [selections, setSelections] = useState([]);

  const handleSelect = (type, asset) => {
    const updatedSelections = selections.filter(sel => sel.type !== type);
    updatedSelections.push({ type, path: `/assets/${type}/${asset}` });
    setSelections(updatedSelections);
  };

  return (
    <div className="App">
      <div className="main-content">
        <Canvas selections={selections} />
        <div className="ios-bottom-bar">
          {Object.keys(assetsData).map(type => (
            <AssetSelector key={type} type={type} assets={assetsData[type]} onSelect={handleSelect} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
