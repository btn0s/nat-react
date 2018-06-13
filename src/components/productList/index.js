import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Product from '../product'

class ProductList extends Component {

  componentWillMount() {
    
  }

  renderProducts() {
    if (!this.props.products) {
      return (
        <Col span={24}>
          No Products
        </Col>
      )
    } else {
      return this.props.products.map( prod => {
        return (
          <Col span={6} key={prod.id.toString()}>
            <Product product={prod} />
          </Col>
        )
      })
    }
  }

  render() {
    return (
      <Row type="flex">
        { this.renderProducts() }
      </Row>
    )
  }
}

export default ProductList;