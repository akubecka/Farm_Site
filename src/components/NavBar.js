import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <ul className = "bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart/Checkout</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    </nav>
  );
}

export default NavBar;