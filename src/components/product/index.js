import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
      <div className={'Product'}>
        <div className={'product__image'}>
          <img style={{ 'width': '100%' }} src={this.props.product.images[0].src} alt={`${this.props.product.title}`} />
        </div>
        <div className={'product__title'}>
          {this.props.product.title}
        </div>
        <div className={'product__price'}>
          ${this.props.product.variants[0].price}
        </div>
      </div>
    )
  }
}