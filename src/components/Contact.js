import React from 'react';
import './App.css';
import NavBar from './NavBar';

function Contact() {
  return (
    <div className="App">
      <div>
          <header>
            <h1>Kubecka Farms</h1>
            <NavBar />
          </header>
        </div>
      <p>Contact Us</p>
      <div className="fbLink">
      <a href = "https://www.facebook.com/KubeckaFarms">
        <img className = "fbImg" src = {require(`../pics/fb1.jpg`)}/>
      </a>
      </div>
    </div>
  );
}

export default Contact;