import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import { Product, ProductList, Nav } from '../components/nat-components';

class Home extends Component {
  render() {
    return (
      <div className={'Home'}>

        <section className={'Hero'}>
          <div className={'Hero__Content'}>
            <h1 className={'Hero__Headline'}>Let Your Parties Do the Talking</h1>
          </div>
        </section>

        <section className={'Home__Content'}>

        </section>
               
      </div>
    )
  }
}

export default Home;
