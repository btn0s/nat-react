import React from 'react';
import { Route, Link } from 'react-router-dom'
import Client from 'shopify-buy';
import { Row, Col } from 'antd';
import Home from '../home'
import Shop from '../shop'
import Create from '../create'
import Live from '../live'
import Nav from '../../components/nav'
import About from '../about'

import CLIENT_OPTIONS from '../../client_options';

import 'antd/dist/antd.css';
import './App.css';

const client = Client.buildClient(CLIENT_OPTIONS);

// constructor(props) {
//   super(props);
//   this.state = {};
// }

// componentWillMount() {
//   this.getAllProducts();
//   this.getAllCollections();
//   this.createCheckout();
// }

// componentDidMount() {
//   console.log('done');
// }

const App = () => (
  <div className="App">
    <section className={'App__Navigation'}>
      <Nav/>
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
)

export default App;