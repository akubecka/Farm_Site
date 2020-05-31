import React, {Component} from 'react';
import './App.css';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from './Admin';
import NavBar from './NavBar';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', display:false};

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  if(event.target.value==="123"){
    this.setState({value: event.target.value, display:true});
  }else{
    this.setState({value: event.target.value, display:false});
  }
}


render(){
  return (
    <div className = "admin">
            <div>
          <header>
            <h1>Kubecka Farms</h1>
            <NavBar />
          </header>
        </div>
        <form>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
      {this.state.display ? <Admin></Admin> : <p>Enter Admin Password</p>}
    </div>
  );
}
}

export default Login;