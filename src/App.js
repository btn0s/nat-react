import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Client from 'shopify-buy';
import { Row, Col } from 'antd';
import { Product, ProductList, Nav } from './components/nat-components';
import { Home } from './pages/nat-pages';

import CLIENT_OPTIONS from './client_options.js';

import 'antd/dist/antd.css';
import './App.css';

const client = Client.buildClient(CLIENT_OPTIONS);

const Shop = () => (
  <div className={'Shop'}>

    <section className={'Hero'}>
      <div className={'Hero__Content'}>
        <h1 className={'Hero__Headline'}>Shop</h1>
      </div>
    </section>

    <section className={'Shop__Content'}>

    </section>
            
  </div>  
)
const Create = () => (
  <div className={'Create'}>

    <section className={'Hero'}>
      <div className={'Hero__Content'}>
        <h1 className={'Hero__Headline'}>Create</h1>
      </div>
    </section>

    <section className={'Create__Content'}>

    </section>
            
  </div>
)

const Live = () => (
  <div className={'Live'}>

    <section className={'Hero'}>
      <div className={'Hero__Content'}>
        <h1 className={'Hero__Headline'}>Live</h1>
      </div>
    </section>

    <section className={'Live__Content'}>

    </section>
            
  </div>
)

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
      <Router>
        <div className="App">
          <section className={'App__Navigation'}>
            <Nav />
          </section>
          <section className={'App__Content'}>
            <Route exact path={'/'} component={Home} />
            <Route path={'/shop'} component={Shop} />
            <Route path={'/create'} component={Create} />
            <Route path={'/live'} component={Live} />
          </section>
          <section className={'App__Footer'}>
          
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
