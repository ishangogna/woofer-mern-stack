import React from 'react';
import WoofEntry from './components/WoofEntry';
import InfoContextProvider from './context/infoContext';

function App() {
  return (
    <div className="App">
      <InfoContextProvider>
          <div className = "app-title">Woof! Twitter for dogs 🐶</div>
          <WoofEntry />
      </InfoContextProvider>
    </div>
  );
}

export default App;
