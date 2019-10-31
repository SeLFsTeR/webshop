import React, { Component } from "react";

export default class FoodCart extends Component {
  render() {
    if (this.props.items) {
      return (
        <div id="grocery-cart">
          <p>The cart is empty.</p>
        </div>
      );
    }

    return (
      <div id="grocery-cart">
        <table border="1">
          <tbody>
            <tr>
              <th></th>
              <th>Item Price</th>
              <th>Item Name</th>
            </tr>
            {this.props.items.map((item, index) => {
              return (
                <tr id={index}>
                  <td>{item.price}</td>
                  <td>{item.name}</td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
