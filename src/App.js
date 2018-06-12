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

class App extends Component {

  

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
