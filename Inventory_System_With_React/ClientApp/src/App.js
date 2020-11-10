import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FullActiveInventory } from './components/FullActiveInventory';
import { CreateProduct } from './components/CreateProduct';
import { DiscontinueProduct } from './components/DiscontinueProduct';
import { SendProduct } from './components/SendProduct';
import { ReceiveProduct } from './components/ReceiveProduct';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/active-inventory' component={FullActiveInventory} />
        <Route path='/create-product' component={CreateProduct} />
        <Route path='/discontinue-product' component={DiscontinueProduct} />
        <Route path='/send-product' component={SendProduct} />
        <Route path='/receive-product' component={ReceiveProduct} />
      </Layout>
    );
  }
}
