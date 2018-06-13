import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import { Home, Shop, Create, Live, About } from '../'
import Nav from '../../components/nav'

import 'antd/dist/antd.css';
import './App.css';

const App = () => (
  <div className="App">

    <section className={'App__Navigation'}>
      <Nav/>
    </section>

    <section className={'App__Content'}>
      <Route exact path={'/'} component={Home} />
      <Route path={'/shop'} component={Shop} />
      <Route path={'/create'} component={Create} />
      <Route path={'/live'} component={Live} />
    </section>

    <section className={'App__Footer'}>

    </section>
  </div>
)

export default App;