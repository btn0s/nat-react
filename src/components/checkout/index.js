import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeCheckout } from '../../actions/checkout/'

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.data.webUrl);
  }

  render() {
    return(
      <div className={'Checkout Cart text-left'}>
        <Container className={'Checkout__Container'}>
          <Row className={'Checkout__Row'}>
            <Col sm={12}>
              <div className={'Cart__Header'} style={{}}>
                <Container>
                  <Row>
                    <Col sm={12}>
                      <i className={'bx bx-x bx-md pointer'} onClick={this.props.closeCheckout}></i>
                    </Col>
                    <Col className={'text-center'}>My Bag</Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col sm={12}>
              <div className={'Cart__Body'}>
              
              </div>
            </Col>
            <Col sm={12} className={'align-self-end'}>
              <div className={'Cart__Footer'}>
                <div className={'Cart__Totals pb-3'}>
                  <Container>
                    <Row>
                      <Col>
                        <strong>Subtotal</strong>
                      </Col>
                      <Col className={'text-right'}>
                        <span>{this.props.checkout.data.totalPrice}</span>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className={'Cart__Actions'}>
                  <Button type={'Primary'} onClick={this.openCheckout} block>Checkout Now</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  closeCheckout: bindActionCreators(closeCheckout, dispatch)
})

const mapStateToProps = state => ({
  checkout: state.checkout,
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);