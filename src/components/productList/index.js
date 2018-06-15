import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ProductListItem from '../productListItem'

class ProductList extends Component {

  componentWillMount() {
    
  }

  renderProducts() {
    if (!this.props.products) {
      return (
        <Col md="12">
          No Products
        </Col>
      )
    } else {
      return this.props.products.map( prod => {
        return (
          <Col xs="12" md="6" lg="3" key={prod.id.toString()}>
            <ProductListItem product={prod} />
          </Col>
        )
      })
    }
  }

  render() {
    return (
      <Row>
        { this.renderProducts() }
      </Row>
    )
  }
}

export default ProductList;