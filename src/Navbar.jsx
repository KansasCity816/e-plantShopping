import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const cart = useSelector((state) => state.cart.items);

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="navbar">
      <h1>Paradise Nursery</h1>
      <div className="navbar-cart-icon">
        <span className="cart-quantity">{calculateTotalQuantity()}</span>
        <img
          src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" // Replace with your cart icon
          alt="Cart"
          className="cart-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
