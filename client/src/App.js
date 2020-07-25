import React from 'react';
import WoofEntry from './components/WoofEntry';
import GetWoofs from './components/GetWoofs';

function App() {
  return (
    <div className="App">
      <h1 className = "app-title"><span className = 'woof-title'>Woof!</span>Twitter for dogs 🐶</h1>
      <WoofEntry />
      <GetWoofs />
    </div>
  );
}

export default App;
