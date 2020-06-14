import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';


class Checkout extends Component {
    constructor(props) {
      super(props);
      this.state = {nameBool: false, name: "", placed: false, id: this.props.id, strawb:"", corn:"", squash:""};
  
      this.componentDidMount = this.componentDidMount.bind(this);
      this.sendOrder = this.sendOrder.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    componentDidMount(){
        this.getCart();
    }

    handleSubmit(event){
        //this.setState({nameBool: true});
        event.preventDefault();
    }
    handleInputChange(event){
        this.setState({name:event.target.value});
      }
    async getCart(){
        let bod = { id: this.state.id };
            const response = await fetch("http://localhost:3001/getCartByIdTemp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bod),
            });
            const cart = await response.json();
            console.log(cart.Strawberry);
            this.setState({name: "", strawb: cart.Strawberry, corn: cart.Corn, squash: cart.Squash});
            return cart;
        }

    async sendOrder(){
        let bod = {};
        let strawbs1 = "";
        let corn1 = "";
        let squash1 = "";
        if(this.state.strawb!==0||this.state.strawb!==""){//"" is bad
            strawbs1 = this.state.strawb;
        }
        if(this.state.corn!==0||this.state.corn!==""){//"" is bad
            corn1 = this.state.corn;
        }
        if(this.state.squash!==0||this.state.squash!==""){//"" is bad
            squash1 = this.state.squash;
        }
        bod = { strawbs: strawbs1, corn: corn1, squash: squash1 };
        const response = await fetch("http://localhost:3001/sendOrder", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(bod),
        });
        const cart = await response.json();

        let body = { order: cart };
        const resp = await fetch("http://localhost:3001/saveOrder", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        let body2 = { id: this.state.id };
        const respo = await fetch("http://localhost:3001/deleteCart", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(body2),
        });
        if(this.state.name!==""){
            this.setState({placed: true, nameBool: true});
        }else{
            this.setState({placed: true});
        }
        
    }
  render(){
      let strawbs, name, vh, corn, squash, cart, place, noName;
    if(this.state.strawb!=="" && this.state.strawb!=="0" && this.state.strawb!==undefined){//undefined all we need
        strawbs = <p>{this.state.strawb} : Strawberry</p>
        vh = true;
      }
      if(this.state.corn!=="" && this.state.corn!=="0"&& this.state.corn!==undefined){//undefined all we need
        corn = <p>{this.state.corn} : Corn</p>
        vh = true;
      }
      if(this.state.squash!==""  && this.state.squash!=="0"&& this.state.squash!==undefined){//undefined all we need
        squash = <p>{this.state.squash} : Squash</p>
        vh = true;
      }
      if(!this.state.placed){
            place = <button className="cartButton" onClick = {this.sendOrder}>Place Order</button>
      }else{
        if(this.state.nameBool){
            place = <p>Your order has been placed. Come pick it up plz.</p>
        }else{
            place = <button className="cartButton" onClick = {this.sendOrder}>Place Order</button>
            noName = <p className = "makeRed">Please enter a name for your order.</p>
        }
      }
      if(!this.state.nameBool){
          name = 
        <form onSubmit = {this.handleSubmit}>
        <label>
          <input name="name" type="text" placeholder="Enter Name" value={this.state.name} onChange = {this.handleInputChange}/>
          {noName}
        </label>
      </form>
      }else{
          name = <p>Name: {this.state.name}</p>
      }
      if(this.state.strawb!==undefined
        ||this.state.corn!==undefined
        ||this.state.squash!==undefined){
            cart = <div className = "cart">
            {strawbs}
            {corn}
            {squash}
            {name}
            {place}
        </div>
      }else{
        cart = <p>Your cart is empty</p>
      }
    return (
        <div className="App">
                <div>
                <header>
                    <NavBar />
                </header>
                </div>
                <div className="realStuff">
            <h2>Checkout</h2>
            <div className = "checkout">
                <h4>Your Cart</h4>
                <p>{cart}</p>
            </div>
            {this.state.cart}
            </div>
        </div>
    );
  }
  }

export default Checkout;