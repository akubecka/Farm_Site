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
    this.sendOrder = this.sendOrder.bind(this);
  }

  async handleSubmit(event){
    event.preventDefault();
  }

  showCart(){
    this.setState({show: true});
  }
  hideCart(){
    this.setState({show: false});
  }

  handleInputChange(event){
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]:val});
  }

  async sendOrder(){
    let bod = {};
    let strawbs1 = "";
    let corn1 = "";
    let squash1 = "";
    console.log("CVALUE: " + typeof(this.state.cvalue));
    if(this.state.avalue!==0||this.state.avalue!==""){//"" is bad
      strawbs1 = this.state.avalue;
    }
    if(this.state.bvalue!==0||this.state.bvalue!==""){//"" is bad
      corn1 = this.state.bvalue;
    }
    if(this.state.cvalue!==0||this.state.cvalue!==""){//"" is bad
      squash1 = this.state.cvalue;
    }
    bod = { strawbs: strawbs1, corn: corn1, squash: squash1 };
    const response = await fetch("http://localhost:3001/tempOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bod),
    });
    const cart = await response.json();
console.log(typeof(cart._id));
let id1 =""+ cart._id;
id = id1;
    this.setState({checkout: true, cartId: id1});
/*
    let body = { order: cart };
    const resp = await fetch("http://localhost:3001/saveOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    */
    let strawbMesg= "";
    let cornMesg = "";
    let squashMesg = "";
    if(this.state.avalue!=="" && this.state.avalue!=="0"){
      strawbMesg = ""+this.state.avalue+" strawberries ";
    }
    if(this.state.bvalue!=="" && this.state.bvalue!=="0"){
      cornMesg = ""+ this.state.bvalue + " corn ";
    }
    if(this.state.cvalue!=="" && this.state.cvalue!=="0"){
      squashMesg = ""+ this.state.cvalue + " squash ";
    }

    //alert("Your order of "+strawbMesg + cornMesg + squashMesg + "will be ready at the stand, come pick up within the hour please.");
    //window.location.reload(false);
    return cart;
  }
  render(){
    let strawbs, corn, squash, cart, viewHide, cartHere;
    let vh = false;
      if(this.state.show){
        if(this.state.avalue!=="" && this.state.avalue!=="0"){
          strawbs = <p>{this.state.avalue} : Strawberry</p>
          vh = true;
        }
        if(this.state.bvalue!=="" && this.state.bvalue!=="0"){
          corn = <p>{this.state.bvalue} : Corn</p>
          vh = true;
        }
        if(this.state.cvalue!==""  && this.state.cvalue!=="0"){
          squash = <p>{this.state.cvalue} : Squash</p>
          vh = true;
        }
        if((this.state.avalue!==""&& this.state.avalue!=="0") ||(this.state.bvalue!=="" && this.state.bvalue!=="0")||(this.state.cvalue!==""&&this.state.cvalue!=="0")){
          cart = <div className = "cart">
          <p>Your Cart</p>
          {strawbs}
          {corn}
          {squash}
          <button className="cartButton" onClick = {this.sendOrder}>Checkout</button>
        </div>
        }else{
          cart = <p>Your cart is empty</p>
        }
      }

      if(!vh){
        cartHere = 
        <div className = "cartHere2">
          <div>
            <img className = "cartyImg" src = {require(`../pics/cart.png`)}/>
            <button className = "cartButton" onClick = {this.showCart}>View Cart</button>
            {cart}
          </div>
        </div>
      }else{
            cartHere = 
            <div className = "cartHere">
              <div>
                {cart}
                <button className = "cartButton" onClick ={this.hideCart}>Hide Cart</button>
                
              </div>
            </div>  
    }
    var everything
    if(!this.state.checkout){
    everything= <div>
      
    <div>
      <header>
        <NavBar />
      </header>
      <div className="realStuff">
      <h2>Order</h2>
      {cartHere}

  <div className = "grid-container">
    <div className ="grid-item">
      <img className = "strawbImg" src = {require(`../pics/strawb.webp`)}/>
      <h3>Strawberry</h3>
      <p>Price: $5.00</p>
      <form onSubmit = {this.ahandleSubmit}>
      <label>
        <input name="avalue" placeholder="0" type="number" value={this.state.avalue} onChange = {this.handleInputChange}/>
      </label>
      <input type="submit" value="Add to Cart" />
    </form>
  </div>

    <div className ="grid-item">
    <img className = "strawbImg" src = {require(`../pics/strawb.webp`)}/>
      <h3>Strawberry</h3>
      <p>Price: $5.00</p>
      <form onSubmit = {this.bhandleSubmit}>
      <label>
        <input name = "bvalue" placeholder="0" type="number" value={this.state.bvalue} onChange = {this.handleInputChange}/>
      </label>
      <input type="submit" value="Add to Cart" />
    </form>
  </div>


    <div className ="grid-item">
    <img className = "strawbImg" src = {require(`../pics/strawb.webp`)}/>
      <h3>Strawberry</h3>
      <p>Price: $5.00</p>
      <form onSubmit = {this.chandleSubmit}>
      <label>
        <input name="cvalue" placeholder="0" type="number" value={this.state.cvalue} onChange = {this.handleInputChange}/>
      </label>
      <input type="submit" value="Add to Cart" />
    </form>
  </div>

    <div className="grid-item">
    <img className = "strawbImg" src = {require(`../pics/strawb.webp`)}/>
      <h3>Strawberry</h3>
      <p>Price: $5.00</p>
      <form onSubmit = {this.chandleSubmit}>
      <label>
        <input name="cvalue" placeholder="0" type="number" value={this.state.cvalue} onChange = {this.handleInputChange}/>
      </label>
      <input type="submit" value="Add to Cart" />
    </form>
    </div>
    <div className="grid-item">
    <img className = "strawbImg" src = {require(`../pics/strawb.webp`)}/>
      <h3>Strawberry</h3>
      <p>Price: $5.00</p>
      <form onSubmit = {this.chandleSubmit}>
      <label>
        <input name="cvalue" placeholder="0" type="number" value={this.state.cvalue} onChange = {this.handleInputChange}/>
      </label>
      <input type="submit" value="Add to Cart" />
    </form>
    </div>
    <div className="grid-item">
    <img className = "strawbImg" src = {require(`../pics/strawb.webp`)}/>
      <h3>Strawberry</h3>
      <p>Price: $5.00</p>
      <form onSubmit = {this.chandleSubmit}>
      <label>
        <input name="cvalue" placeholder="0" type="number" value={this.state.cvalue} onChange = {this.handleInputChange}/>
      </label>
      <input type="submit" value="Add to Cart" />
    </form>
    </div>
    <div className="grid-item">
    <img className = "strawbImg" src = {require(`../pics/strawb.webp`)}/>
      <h3>Strawberry</h3>
      <p>Price: $5.00</p>
      <form onSubmit = {this.chandleSubmit}>
      <label>
        <input name="cvalue" placeholder="0" type="number" value={this.state.cvalue} onChange = {this.handleInputChange}/>
      </label>
      <input type="submit" value="Add to Cart" />
    </form>
    </div>
    <div className="grid-item">
    <img className = "strawbImg" src = {require(`../pics/strawb.webp`)}/>
      <h3>Strawberry</h3>
      <p>Price: $5.00</p>
      <form onSubmit = {this.chandleSubmit}>
      <label>
        <input name="cvalue" placeholder="0" type="number" value={this.state.cvalue} onChange = {this.handleInputChange}/>
      </label>
      <input type="submit" value="Add to Cart" />
    </form>
    </div>
    <div className="grid-item">
    <img className = "strawbImg" src = {require(`../pics/strawb.webp`)}/>
      <h3>Strawberry</h3>
      <p>Price: $5.00</p>
      <form onSubmit = {this.chandleSubmit}>
      <label>
        <input name="cvalue" placeholder="0" type="number" value={this.state.cvalue} onChange = {this.handleInputChange}/>
      </label>
      <input type="submit" value="Add to Cart" />
    </form>
    </div>
  </div>
  </div>
  </div>
  </div>
  }else{
    everything=
    <div>
      <Checkout id={id}/>
    </div>
  }
    return (
      <div>
          {everything}
      </div>
    );
  }
}

export default Order;