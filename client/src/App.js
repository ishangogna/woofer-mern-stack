import React from 'react';
import WoofEntry from './components/WoofEntry';
import GetWoofs from './components/GetWoofs';
import InfoContextProvider from './context/InfoContext';

function App() {
  return (
    <div className="App">
    <InfoContextProvider>
        <h1 className = "app-title"><span className = 'woof-title'>Woofer!</span>Twitter for dogs 🐶</h1>
        <WoofEntry />
        <GetWoofs />
      </InfoContextProvider>
    </div>
  );
}

export default App;
