import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from "./navbar";
import Home from './Home';
import Display from './Display';
import Dog from './Dogs';
import DogPhoto from './DogPhoto';
import Todos from './Todos';


function App() {
  const [selectedDog, setSelectedDog] = useState(null);
  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <div className="App">
    <Navbar/>
    {selectedDog && <DogPhoto breed={selectedDog} />}
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="dog" element={ <Dog onDogSelected={onDogSelected}/> } />
      <Route path="display" element={ <Display/> } />
      <Route path="form" element={ <Todos /> } />
    </Routes>
  </div>
  );
}

export default App;
