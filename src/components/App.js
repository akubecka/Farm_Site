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
import Cart from "./Cart"
import Contact from "./Contact"
import NavBar from "./NavBar"
import Admin from "./Login"

function App() {
  /*const [user, setUser] = useState(null);

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

        <Route exact path = '/order'>
          <Order/>
        </Route>
        <Route exact path = '/cart'>
          <Cart/>
        </Route>
        <Route exact path = '/admin'>
          <Admin/>
        </Route>
        <Route exact path = '/contact' component = {Contact}/>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
