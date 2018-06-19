import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeCheckout } from '../../actions/checkout/'

class Checkout extends Component {
  render() {
    return(
      <div className={'Checkout'}>
        <h1>Check it OUT</h1>
        <Button onClick={this.props.closeCheckout}>Close</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  closeCheckout: bindActionCreators(closeCheckout, dispatch)
})

export default connect(null, mapDispatchToProps)(Checkout);