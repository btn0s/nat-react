import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import Client from 'shopify-buy';
import { Row, Col } from 'antd';
import { Product, ProductList, Nav } from './LaTienda';
import 'antd/dist/antd.css';
import './App.css';
import CLIENT_OPTIONS from './client_options.js';

const client = Client.buildClient(CLIENT_OPTIONS);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  getAllProducts() {
    client.product.fetchAll().then(products => {
      this.setState({ products: products });
    });
  }

  getProduct(productId) {
    client.product.fetch(productId).then(product => {
      console.log(product);
    });
  }

  getAllCollections() {
    client.collection.fetchAllWithProducts().then(collections => {
      this.setState({ collections: collections });
    });
  }

  getCollection(collectionId) {
    client.collection.fetchWithProducts(collectionId).then(collection  => {
      console.log(collection);
    });
  }

  createCheckout() {
    client.checkout.create().then(checkout => {
      this.setState({ checkout: checkout });
    });
  }

  getCheckout() {
    client.checkout.fetch(this.getCheckoutID()).then(checkout => {
      this.setState({ checkout: checkout });
    });
  }

  getCheckoutID() {
    return this.state.checkout.id;
  }

  addItemToCheckout(lineItemsToAdd) {
    client.checkout.addLineItems(this.getCheckoutID(), lineItemsToAdd).then(checkout => {
      this.getCheckout();
    });
  }

  updateItemInCheckout(lineItemsToUpdate) {
    client.checkout.updateLineItems(this.getCheckoutID(), lineItemsToUpdate).then(checkout => {
      this.getCheckout();
    });
  }

  removeItemFromCheckout(lineItemIdsToRemove) {
    client.checkout.removeLineItems(this.getCheckoutID(), lineItemIdsToRemove).then(checkout => {
      this.getCheckout();
    });
  }

  componentWillMount() {
    this.getAllProducts();
    this.getAllCollections();
    this.createCheckout();
  }

  componentDidMount() {
    console.log('done');
  }

  render() {
    return (
      <main className="App">

        <section className={'Navigation'}>
          <Nav />
        </section>

        <section className={'Hero'}>
          <div className={'Hero__Content'}>
            <h1 className={'Hero__Headline'}>Let Your Parties Do the Talking</h1> 
          </div>
        </section>

        <section className={'Home__Content'}>

        </section>
        
        <section className="prods">
          <ProductList products={this.state.products} />
        </section>

      </main>
    );
  }
}

export default App;
