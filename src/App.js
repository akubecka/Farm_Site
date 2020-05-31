import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./Home"
import Order from "./Order"
import Cart from "./components/Cart"
import Contact from "./Contact"
import NavBar from "./NavBar"
import Admin from "./Login"

function App() {
  return (
    <Router>
        <div>
          <header>
            <h1>Kubecka Farms</h1>
            <NavBar />
          </header>
        </div>
        <Route exact path = '/order' component = {Order}/>
        <Route exact path = '/cart' component = {Cart}/>
        <Route exact path = '/admin' component = {Admin}/>
        <Route exact path = '/contact' component = {Contact}/>
        <Route exact path = "/" component = {Home}/>
      </Router>
  );
}

export default App;
