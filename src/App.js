import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';

import { NavBar } from './Components/NavBar';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import {Services} from './Pages/Services';
import {Contact} from './Pages/Contact';


function App() {
  return (
    <Router>

    <div className="App">
      
       <div className='App-NavBar'>
        {/* NavBar component will be inserted here */}
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
       </div>
    </div>
    </Router>
  );
}

export default App;
