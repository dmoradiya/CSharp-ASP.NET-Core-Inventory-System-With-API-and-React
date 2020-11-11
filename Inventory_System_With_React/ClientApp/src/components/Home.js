import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Inventory Tracking System</h1>
            <ul>
                <li>View Full List of Active Inventory</li>
                <li>Create New Product By ID, Product Name, Quantity and isDiscontinue Status</li>
                <li>Discontinue Product By ID</li>
                <li>Add Product Quantity</li>
                <li>Remove Product Quantity</li>
            </ul>
      </div>
    );
  }
}
