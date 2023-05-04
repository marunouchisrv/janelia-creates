import { Routes, Route } from "react-router-dom"; 
import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage.jsx';
import Gallery from './Pages/Gallery.jsx';
import Pricing from './Pages/Pricing.jsx';
import Request from './Pages/Request.jsx'
import TOS from './Pages/TOS.jsx'


function App() {



  return (
    
    <div className="App">
      
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/TOS' element={<TOS/>} />
        <Route path='/request' element={<Request/>} /> 
      </Routes>  
    </div>  

  );
}

export default App;

