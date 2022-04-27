import React from 'react';
import './App.css';
import example from './data/example.json'

function App() {
  return (
    <div className="App">
      <p>Hi, my name is {example.name}</p>
      <p>My short biography - {example.biography}</p>
      <p>Use {example.contacts} to contact me</p>
    </div>
  );
}

export default App;
