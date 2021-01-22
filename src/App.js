import React from 'react';
import './App.scss';
import Chart from './Chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Covid Global Cases by SGN</h2>

        <Chart />
      </header>
    </div>
  );
}

export default App;
