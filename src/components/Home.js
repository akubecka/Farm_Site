import React from 'react';
import './App.css';
import NavBar from './NavBar';
import {Link} from 'react-router-dom'
import './Home.css';


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
      <NavBar></NavBar>
      </header>
      </div>
      <div className = "main">
        <div className = "boxTopLeft">
          <Link to="/about">
            <img className = "aboutImg" src = {require(`../pics/aboutUs.jpg`)}/>
            <p className = "aboutText">About Us</p>
          </Link>
        </div>
        <a href = "https://www.facebook.com/KubeckaFarms" target="_blank">
          <div className = "boxBotLeft">
              <img className = "contactImg" src = {require(`../pics/fb1.jpg`)}/>
              <p className = "contactText">Contact Us</p>
          </div>
        </a>
        <div className = "boxRight">
          <Link to="/order">
            <img className = "standImg" src = {require(`../pics/aboutUs.jpg`)}/>
          < p className = "standText">Visit Our Virtual Stand</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

/*<p>Big box on right with faded background pic of the stand with text saying, "Visit our virtual farm stand"</p>
<p>Maybe smaller boxes on left saying like, "Read about Kubecka Farms", and "Contact us"(with fb link)</p>
<p>Maybe farmland background pic but very very faded, basically a white background with a lil gray</p>
<img src= {require(`../pics/tractor.jpg`)} />*/