
import React from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="aboutMe" element={<AboutMe/>}/>
  </Routes>
  );
}

export default App;
