import { Routes, Route } from "react-router-dom"; 
import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage.jsx';
import Gallery from './Pages/Gallery.jsx';
import Pricing from './Pages/Pricing.jsx';
import Request from './Pages/Request.jsx'
import TOS from './Pages/TOS.jsx'


function App() {

  // The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();

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

