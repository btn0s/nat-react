import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
import { Row, Col } from 'antd';
import { Home, Shop, Create, Live, About } from '../index'
import Nav from '../../components/nav'
import { getAllProducts, getAllCollections, createCheckout, getCheckout } from '../../actions/app/index'
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';

import 'antd/dist/antd.css';
import './App.css';

class App extends React.Component {

  componentWillMount() {
    this.props.getAllProducts();
    this.props.getAllCollections();
    this.props.createCheckout();
  }
  
  render() {
    return (
      <div className="App">

      <section className={'App__Navigation'}>
        <Nav/>
      </section>

      <section className={'App__Content'}>
        <Route exact path={'/'} component={Home} data={this.state}/>
        <Route path={'/shop'} component={Shop} data={this.state}/>
        <Route path={'/create'} component={Create} data={this.state}/>
        <Route path={'/live'} component={Live} data={this.state}/>
      </section>

      <section className={'App__Footer'}>

      </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  collections: state.collections,
  checkout: state.checkout,
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: bindActionCreators(getAllProducts, dispatch),
  getAllCollections: bindActionCreators(getAllCollections, dispatch),
  createCheckout: bindActionCreators(createCheckout, dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));