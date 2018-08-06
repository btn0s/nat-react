import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProduct, addItemToCheckout } from '../../actions/app/index'
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

class ProductPage extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;
    const paramSplit = params.productHandle.split('==');
    this.props.getProduct(`${paramSplit[0]}==`);
  }

  render() {
    return (
      <div className={'ProductPage'}>
        <div className={'Product'}>
          <Container>
            <Row>
              <Col>
                <div className={'Product__Image-container'}>
                  <img src={(this.props.product.images) ? this.props.product.images[0].src : 'false'}/>
                </div>
              </Col>
              <Col>
                <div className={'Product__Details'}>
                  <div className={'Product__Name'}>
                    <div>{this.props.product.title}</div>
                    <div>{(this.props.product.variants) ? this.props.product.variants[0].price : 'false'}</div>
                  </div>
                </div>
                <div className={'Product__Options'}>
                  Option 1
                </div>
                <div className={'Product__Actions'}>
                  <Button 
                    onClick={() => this.props.addItemToCheckout(this.props.checkout.data.id, [{variantId: (this.props.product.variants) ? this.props.product.variants[0].id : '', quantity: 1}])}>
                      Add to Bag
                    </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  product: state.products.current,
  collections: state.collections,
  checkout: state.checkout,
})

const mapDispatchToProps = dispatch => ({
  getProduct: bindActionCreators(getProduct, dispatch),
  addItemToCheckout: bindActionCreators(addItemToCheckout, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);