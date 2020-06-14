import React, {Component} from 'react';
import './App.css';

class CurrOrders extends Component {
  constructor(props){
    super(props);
    this.state = {show: false, numOfOrders: 0, orderNum: 0, 
      id0: "", strawb0: 0, corn0: 0, squash0: 0,
      id1: "", strawb1: 0, corn1: 0, squash1: 0,
      id2: "", strawb2: 0, corn2: 0, squash2: 0,
      id3: "", strawb3: 0, corn3: 0, squash3: 0,
      id4: "", strawb4: 0, corn4: 0, squash4: 0
    };

    this.getOrders = this.getOrders.bind(this);
    this.completed = this.completed.bind(this);
    this.showOrders = this.showOrders.bind(this);
  }


  async getOrders(){
      const response = await fetch("http://localhost:3001/getOrders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const orders = await response.json();
      this.setState({numOfOrders: orders.length});
      return orders;
  }

  async completed(id){//Should prolly go by order id here, then remove whenever its marked complete
      let bod = { id: id};
      const response = await fetch("http://localhost:3001/removeOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bod),
      });
      window.location.reload(false);
  }

  async showOrders(){
    var orders = await this.getOrders();
    var i = 0;
    if(i<this.state.numOfOrders){
      this.setState({id0:orders[i]._id, strawb0:orders[i].Strawberry, corn0: orders[i].Corn, squash0: orders[i].Squash});
      i++;
    }
    if(i<this.state.numOfOrders){
      this.setState({id1:orders[i]._id, strawb1:orders[i].Strawberry, corn1: orders[i].Corn, squash1: orders[i].Squash});
      i++;
    }
    if(i<this.state.numOfOrders){
      this.setState({id2:orders[i]._id, strawb2:orders[i].Strawberry, corn2: orders[i].Corn, squash2: orders[i].Squash});
      i++;
    }
    if(i<this.state.numOfOrders){
      this.setState({id3:orders[i]._id, strawb3:orders[i].Strawberry, corn3: orders[i].Corn, squash3: orders[i].Squash});
      i++;
    if(i<this.state.numOfOrders){
      this.setState({id4:orders[i]._id, strawb4:orders[i].Strawberry, corn4: orders[i].Corn, squash4: orders[i].Squash});
      i++;
    }
    }
    this.setState({show:true, orderNum: this.state.orderNum++});
  }
  render(){
    if(this.state.show){
      var i = 0;
      if(this.state.numOfOrders===0){
        var none = <p>There are no orders at this time</p>
      }
      if(i<this.state.numOfOrders){
        var ords0 = <div>
          <h2>Order1</h2>
          <p>{this.state.id0}</p>
          <p>Strawberry: {this.state.strawb0}</p>
          <p>Corn: {this.state.corn0}</p>
          <p>Squash: {this.state.squash0}</p>
          <button id={this.state.id0} onClick = {() => this.completed(this.state.id0)}>Completed</button>
          </div>
      } i++;
      if(i<this.state.numOfOrders){
        var ords1 = <div>
          <h2>Order2</h2>
          <p>{this.state.id1}</p>
          <p>Strawberry: {this.state.strawb1}</p>
          <p>Corn: {this.state.corn1}</p>
          <p>Squash: {this.state.squash1}</p>
          <button id={this.state.id1} onClick = {() => this.completed(this.state.id1)}>Completed</button>
          </div>
      } i++;
      if(i<this.state.numOfOrders){
        var ords2 = <div>
          <h2>Order3</h2>
          <p>{this.state.id2}</p>
          <p>Strawberry: {this.state.strawb2}</p>
          <p>Corn: {this.state.corn2}</p>
          <p>Squash: {this.state.squash2}</p>
          <button id={this.state.id2} onClick = {() => this.completed(this.state.id2)}>Completed</button>
          </div>
      }
      if(i<this.state.numOfOrders){
        var ords3 = <div>
          <h2>Order4</h2>
          <p>{this.state.id3}</p>
          <p>Strawberry: {this.state.strawb3}</p>
          <p>Corn: {this.state.corn3}</p>
          <p>Squash: {this.state.squash3}</p>
          <button id={this.state.id3} onClick = {() => this.completed(this.state.id3)}>Completed</button>
          </div>
      } i++;
      if(i<this.state.numOfOrders){
        var ords4 = <div>
          <h2>Order5</h2>
          <p>{this.state.id4}</p>
          <p>Strawberry: {this.state.strawb4}</p>
          <p>Corn: {this.state.corn4}</p>
          <p>Squash: {this.state.squash4}</p>
          <button id={this.state.id4} onClick = {() => this.completed(this.state.id4)}>Completed</button>
          </div>
      } i++;
    }
    return (
      <div className="App">
        <p>Current Orders in progress. Select Completed when they are picked up.</p>
        <button onClick = {this.showOrders}>View Orders</button>
        <div>
          {none}
          {ords0}
          {ords1}
          {ords2}
          {ords3}
          {ords4}
        </div>
      </div>
    );
  }
}
export default CurrOrders;