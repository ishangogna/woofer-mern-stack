import React from 'react';
import WoofEntry from './components/WoofEntry';
import GetWoofs from './components/GetWoofs';

function App() {
  return (
    <div className="App">
      <div className = "app-title">Woof! Twitter for dogs 🐶</div>
      <WoofEntry />
      <GetWoofs />
    </div>
  );
}

export default App;
