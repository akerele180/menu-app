import React from 'react';
import './App.css'
import Nav from './components/Nav';
import Container from './components/container';

function App() {

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <div className='line'></div>
      <Nav/>
      <Container />
    </div>
  )
}

export default App;