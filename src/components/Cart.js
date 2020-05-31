import React from 'react';
import './App.css';
import NavBar from './NavBar';



function Cart(props) {

  async function getCart() {
    let bod = { id: props.user._id };
    const response = await fetch("http://localhost:3001/getCartById", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
    const cart = await response.json();
    return cart;
  }

  return (
    <div className="cartPage">
      <div>
          <header>
            <h1>Kubecka Farms</h1>
            <NavBar />
          </header>
        </div>
      <p>Your Cart. Once you leave this page you will not be able to return(after you order ofc)</p>
      <div className = "cart">
        {getCart}
      </div>
    </div>
  );
}

export default Cart;