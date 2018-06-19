import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Col, Row, Button } from 'reactstrap'
import { openCheckout, closeCheckout } from '../../actions/checkout/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NavBar extends React.Component {

    render() {
      return (
        <div className={'Nav'}>
          <Row>
            <Col>
              <Button color="link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </Button>
            </Col>
            <Col>
              <Link to={'/create'}>
                <Button color="link">Create</Button>
              </Link>
            </Col>
            <Col>
              <div className={'Nav__Logo'}>
                <Link to={'/'}>La Tienda</Link>
              </div>
            </Col>
            <Col>
              <Link to={'/shop'}>
                <Button color="link" className="rounded-circle">Shop</Button>  
              </Link>
            </Col>
            <Col>
              <Button color="link" onClick={this.props.openCheckout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </Button>
            </Col>
          </Row>
        </div>
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    openCheckout: bindActionCreators(openCheckout, dispatch),
  })

  export default connect(null,mapDispatchToProps)(NavBar);