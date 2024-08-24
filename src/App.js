
import React from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe'
import Menu from './components/Menu';
import Academy from './components/Academy'
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Menu/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="aboutMe" element={<AboutMe/>}/>
    <Route path='Academy' element={<Academy/>}/>
  </Routes>
  <Footer/>
  </>
  );
}

export default App;
