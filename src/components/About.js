import React from 'react';
import './App.css';
import NavBar from './NavBar';

function About() {
  return (
    <div className="App">
      <div>
          <header>
            <NavBar />
          </header>
        </div>
        <div className="realStuff">
      <h2>About Us</h2>
        <p>
            Kubecka Farms is a 3rd generation family farm started in 1943.
            Located on a sandy out-wash from a long ago receded glacial lake 
            where we currently grow 200 acres of vegetable crops.
            We are most well known for sweet corn, tomatoes, and potatoes but
            we grow a wide variety of other vegetables and small fruit that are all available at our roadside market. 
        </p>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.4511971610236!2d-75.94979168451955!3d43.11604697914336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d991b0ea2e474b%3A0xb5c3a73103e48e63!2sKubecka%20Farms!5e0!3m2!1sen!2sus!4v1591244499737!5m2!1sen!2sus"></iframe>
   </div>
    </div>
  );
}

export default About;