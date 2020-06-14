import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import './App.css';
import Home from "./Home"
import Order from "./Order"
import Order2 from "./Order2"
import Cart from "./Cart"
import Contact from "./Contact"
import NavBar from "./NavBar"
import Admin from "./Login"
import About from "./About"
import Checkout from "./Checkout"

function App() {
 /* const [user, setUser] = useState(null);

  useEffect(() => {
    async function refreshHandler() {
      if(user===null){
        const response = await fetch("http://localhost:3001/makeUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const js = await response.json();
        if (js){
          setUser(js);
        } 
      }
      }
      refreshHandler();
  });
*/
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = '/about' component = {About}/>
        <Route exact path = '/order2' component = {Order2}/>
        <Route exact path = '/order'>
          <Order/>
        </Route>
        <Route exact path = '/admin'>
          <Admin/>
        </Route>
        <Route exact path = '/checkout'>
          <Checkout/>
        </Route>
        </Switch>

        </div>
      </Router>
  );
}

export default App;
