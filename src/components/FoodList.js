import React, { Component } from "react";

export default function Foodlist(props) {
  return (
    <div id="grocery-items">
      <table border="1">
        <tbody>
          <tr>
            <th>Item Price</th>
            <th>Item Name</th>
          </tr>
          {/* {initialState.map((item, index) => {
            return (
              <tr id={index}>
                <td>
                  <button>Add to Cart</button>
                </td>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.name}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
}
