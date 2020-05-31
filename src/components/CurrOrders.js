import React from 'react';
import './App.css';

async function completed(){//Should prolly go by order id here, then remove whenever its marked complete
    let bod = { name: "Strawberry", bool: true };
    const response = await fetch("http://localhost:3001/updateAvail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
}

function CurrOrders() {//Do a map function to print out all the orders
  return (
    <div className="App">
      <p>Current Orders in progress. Select Completed when they are picked up.</p>
      <h2>Order1 Example</h2>
      <button onClick = {completed()}>Completed</button>
    </div>
  );
}

export default CurrOrders;