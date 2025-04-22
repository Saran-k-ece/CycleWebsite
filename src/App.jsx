import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import ProductList from './ProductList';
import CartPage from './CartPage';
import LoginPage from './LoginPage'; // Make sure you have a LoginPage component
import SignupPage from './SignUpPage'; // And a SignupPage component
import OrderPage from './OrderPage'; 
import About from './About'


const App = () => {
  const [cart, setCart] = useState(0);

  console.log(cart);

  return (
    <div className="App">
      <Routes>
        {/* Redirect root path to /HomePage */}
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/About" element={<About />} />
        
        
      </Routes>
    </div>
  );
};

export default App;
