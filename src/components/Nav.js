import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Button, Icon } from 'antd';

export default class Nav extends Component {
  render() {
    return (
      <div className={'Nav Nav--Bg-White'}>
        <Row type={'flex'} align={'center'} justify={'center'}>
          <Col span={11}>
            <Row type={'flex'} align={'center'} justify={'center'}>
              <Col span={8} style={{textAlign: 'left'}}>
                <Button size={'large'} shape={'circle'}>
                  <Icon type="search" />
                </Button>
              </Col>
              <Col span={24 - 8}>
                <Row type={'flex'} align={'center'} justify={'center'} style={{paddingTop: '15px'}}>
                  <Col span={8}>
                    <Link to={'/'}>
                      Home
                    </Link>
                  </Col>
                  <Col span={8}>
                    <Link to={'/shop'}>
                      Shop
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={2}>
            <div className={'Nav__Logo'}>La Tienda</div>
          </Col>
          <Col span={11}>
            <Row type={'flex'} align={'center'} justify={'center'}>
              <Col span={24 - 8}>
                <Row type={'flex'} align={'center'} justify={'center'} style={{paddingTop: '15px'}}>
                  <Col span={8}>
                    <Link to={'/create'}>
                      Create
                    </Link>
                  </Col>
                  <Col span={8}>
                    <Link to={'/live'}>
                      Live
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col span={8} style={{textAlign: 'right'}}>
                <Button size={'large'} shape={'circle'}>
                  <Icon type="shopping-cart" />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row type={'flex'} align={'center'} justify={'center'} style={{paddingTop: '25px'}}>
          <Col span={2}>
            <Link to={'/'}>
              Home
            </Link>
          </Col>
          <Col span={2}>
            <Link to={'/shop'}>
              Shop
            </Link>
          </Col>
          <Col span={2}>
            <Link to={'/create'}>
              Create
            </Link>
          </Col>
          <Col span={2}>
            <Link to={'/live'}>
              Live
            </Link>
          </Col>
        </Row> */}
      </div>
    )
  }
}