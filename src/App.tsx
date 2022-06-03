import React from 'react';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Header from './components/Header';
import example from './data/example.json'

function App() {
  const name = `Hi, my name is ${example.name}`
  const bio = `My short biography - ${example.biography}`
  return (
    <div className="App">
      <Header headerTitle='Let me introduce myself!'></Header>
      <About text={name}></About>
      <About text={bio}></About>
      <Contacts data={example.contacts}></Contacts>
    </div>
  );
}

export default App;
