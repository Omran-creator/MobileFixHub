import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Adjust path as needed
import { CartProvider } from './context/CartContext';
import {NavBar} from './Components/NavBar';
import {Footer} from './Components/Footer';
import {Home} from './Pages/Home';
import {Phones} from './Pages/Phones';
import {Repair} from './Pages/Repair';
import {Parts} from './Pages/Parts';
import {Accessories} from './Pages/Accessories';
import {ContactUs} from './Pages/ContactUs';
import Cart from './Pages/Cart';
import './App.css';

// Define AppContent component
const AppContent = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Repair" element={<Repair />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// Main App component
const App = () => (
  <ThemeProvider>
    <CartProvider>
      <AppContent />
    </CartProvider>
  </ThemeProvider>
);

export default App;