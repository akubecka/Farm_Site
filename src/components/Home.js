import React from 'react';
import './App.css';
import NavBar from './NavBar';
import {Link} from 'react-router-dom'


function Home() {
var id;
  async function setUser() {
      const response = await fetch("http://localhost:3001/makeUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const js = await response.json();
      console.log(js._id);
      id=js._id
      //return js;
    } 

  return (
    <div className="home">
      <div>
      <header>
        <h1>Kubecka Farms</h1>
        <nav>
        <ul className = "bar">
            <li><Link to="/">Home</Link></li>
            <li><button onClick="setUser()"><Link to='/order'>Order</Link></button></li>
            <li><button onClick="setUser()"><Link to="/contact">Contact Us</Link></button></li>
            <li><button onClick="setUser()"><Link to="/cart">Cart/Checkout</Link></button></li>
            <li><button onClick="setUser()"><Link to="/admin">Admin</Link></button></li>
        </ul>
    </nav>
      </header>
      </div>
      <div>
      <img src= {require(`../pics/tractor.jpg`)} />
    </div>
    </div>
  );
}

export default Home;