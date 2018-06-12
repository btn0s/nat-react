import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Product } from './index'

export default class ProductList extends Component {

  products() {
    if (!this.props.products) {

    } else {
      const products = this.props.products.map((prod) =>
        <Col span={6} key={prod.id.toString()}>
          <Product product={prod} />
        </Col>
      );
      return products;
    }
  }

  render() {
    return (
      <Row type="flex">
        {this.products()}
      </Row>
    );
  }

}