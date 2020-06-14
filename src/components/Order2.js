import React, {Component} from 'react';
import './App.css';
import "./Order.css";
import NavBar from './NavBar';
import Cart from './Cart';
import Checkout from './Checkout'
let id = "";
class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {checkout: false, cartId: "", show: false, avalue: "", bvalue: "", cvalue: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.showCart = this.showCart.bind(this);
    this.hideCart = this.hideCart.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount(){
      this.renderPosts();
  }

  async handleSubmit(event){
      console.log("hello");
    event.preventDefault();
  }

  handleInputChange(event){
    let nam = event.target.name;
    let id = event.target.id;
    //console.log(id);
    let val = event.target.value;
    let addThis = [val, id]
    //console.log(val);
    this.setState({[nam]:addThis});
    //console.log(this.state[1][0]);
  }
  async renderPosts() {
    const response = await fetch("http://localhost:3001/getProducts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(),
    });
    const prods = await response.json();
    console.log(prods);
    this.setState({
        Posts: prods.map((prod, i) => (
            <div className ="grid-item">
                    <img className = "strawbImg" src = {require(`../pics/strawb.webp`)}/>
                    <h3>{prod.name}</h3>
                    <p>Price: {prod.price}</p>
                    <form onSubmit = {this.handleSubmit}>
                        <label>
                            <input name={i} id={prod._id} placeholder="0" type="number" value={this.state.value} onChange = {this.handleInputChange}/>
                        </label>
                        <input type="submit" value="Add to Cart" />
                    </form>
            </div>
        ))
    });
    console.log(prods);
    return prods;
  }

  showCart(){
    this.setState({show: true});
  }
  hideCart(){
    this.setState({show: false});
  }


  render(){
    var everything
    everything= 
    <div>
      <header>
        <NavBar />
      </header>
      <div className="realStuff">
        <h2>Order</h2>
            <div className = "grid-container">
            {this.state.Posts}
        </div>
    </div>
  </div>
    return (
      <div>
          {everything}
          {this.state[0]}
      </div>
    );
  }
}

export default Order;