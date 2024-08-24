
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
    <Route path="/KozoWebsite" element={<Home/>}/>
    <Route path="/KozoWebsite/aboutMe" element={<AboutMe/>}/>
    <Route path='/KozoWebsite/Academy' element={<Academy/>}/>
  </Routes>
  <Footer/>
  </>
  );
}

export default App;
