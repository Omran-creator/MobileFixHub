import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';

import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import {Services} from './Pages/Services';
import {Contact} from './Pages/Contact';
import {Buying} from './Pages/Buying_Phones';
import {Reparing} from './Pages/Repairing-Phones';
import {Accessories} from './Pages/Buying-Accessories';

function App() {
  return (
    <Router>

    <div className="App">
      
       <div className='App-NavBar'>        
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/buying-phones' element={<Buying/>} />
          <Route path='/repairing-phones' element={<Reparing/>} />
          <Route path='/buying-accessories' element={<Accessories/>} />
        </Routes>
        <Footer/>
       </div>

    </div>
    </Router>
  );
}

export default App;
