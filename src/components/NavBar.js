import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
    <nav>
      <div className = "heading">
      <h1>Kubecka Farms</h1>
      <Link to = "/">
                <img className = "logo" src = {require(`../pics/logo.jpeg`)}/>
              </Link>
              </div>
        <ul className = "bar">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
        <hr></hr>
    </nav>
    </div>
  );
}
//<li><Link to="/cart">Cart/Checkout</Link></li>
export default NavBar;