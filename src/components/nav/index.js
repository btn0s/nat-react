import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Col, Row, Button } from 'reactstrap'
import { openCheckout, closeCheckout } from '../../actions/checkout/'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NavBar extends React.Component {

  componentDidMount() {
    window.feather.replace();
  }

    render() {
      return (
        <div className={'Nav'}>
          <Row className={'align-items-center'}>
            <Col>
              <i className={'bx bx-search bx-md pointer'}></i>
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
              <i className={'bx bx-shopping-bag bx-md bx-tada-hover pointer'} onClick={this.props.openCheckout}></i>
            </Col>
          </Row>
        </div>
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    openCheckout: bindActionCreators(openCheckout, dispatch),
  })

  const mapStateToProps = state => ({
    checkout: state.checkout.data,
  })

  export default connect(mapStateToProps,mapDispatchToProps)(NavBar);