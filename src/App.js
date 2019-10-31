import React, { Component } from "react";
import "./App.css";
import Foodlist from "./components/FoodList";
import { getProducts } from "./actions/products";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="App">
        <h1>The Food App</h1>
        <h3>
          "I think pressure is healthy, and very few can handle it" - Gordon
          Ramsey
        </h3>
        <div className="topnav">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#Products">Products </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <br></br>
        <div>
          <img
            src="data:image/png;base64,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"
            alt=""
            width={40}
          />
        </div>
        <br></br>
        <div>
          <img
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg?crop=0.669xw:1.00xh;0.300xw,0&resize=640:*"
            alt=""
            width={500}
          />
        </div>
        <Foodlist />
      </div>
    );
  }
}

export default connect(
  null,
  { getProducts }
)(App);
