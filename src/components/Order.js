import React, {Component} from 'react';
import './App.css';
import "./Order.css";
import NavBar from './NavBar';
import Cart from './Cart'

class Order extends Component {
  constructor(props) {
    super(props);
    
    this.state = {id: props.user._id, avalue: '', bvalue: '', cvalue: '', dvalue: '', evalue: ''};

    this.ahandleChange = this.ahandleChange.bind(this);
    this.bhandleChange = this.bhandleChange.bind(this);
    this.chandleChange = this.chandleChange.bind(this);
    this.ahandleSubmit = this.ahandleSubmit.bind(this);
    this.bhandleSubmit = this.bhandleSubmit.bind(this);
    this.chandleSubmit = this.chandleSubmit.bind(this);
  }

  ahandleChange(event) {
    this.setState({avalue: event.target.value});
  }
  bhandleChange(event) {
    this.setState({bvalue: event.target.value});
  }
  chandleChange(event) {
    this.setState({cvalue: event.target.value});
  }

  async ahandleSubmit(event) {
    let bod = { id: this.state.id, name: "Strawberry", num: this.state.avalue };
    const response = await fetch("http://localhost:3001/updateCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
    //let res = await response.json();
    event.preventDefault();
  }

  async bhandleSubmit(event) {
    let bod = { id: this.state.id, name: "Corn", num: this.state.bvalue };
    const response = await fetch("http://localhost:3001/updateCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
    event.preventDefault();
  }

  async chandleSubmit(event) {
    let bod = { id: this.state.id, name: "Squash", num: this.state.cvalue };
    const response = await fetch("http://localhost:3001/updateCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <div>
          <header>
            <h1>Kubecka Farms</h1>
            <NavBar />
          </header>
          <div className = "cartHere">
            <p>Cart HERE</p>
            
          </div>

        </div>
      <div className = "grid-container">
        <div className ="grid-item">
          <h1>Name and Pic</h1>
          <p>Price: $5.00</p>
          <form onSubmit={this.ahandleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.ahandleChange} />
          </label>
          <input type="submit" value="Add to Cart" />
        </form>

        </div>
        <div className="grid-item">
        <h1>Name and Pic</h1>
        <p>Price: $5.00</p>
          <form onSubmit={this.bhandleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.bhandleChange} />
          </label>
          <input type="submit" value="Add to Cart" />
        </form>
        </div>
        <div className="grid-item">
        <h1>Name and Pic</h1>
        <p>Price: $5.00</p>
          <form onSubmit={this.chandleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.chandleChange} />
          </label>
          <input type="submit" value="Add to Cart" />
        </form>
        </div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
      </div>
      </div>
    );
  }
}

export default Order;