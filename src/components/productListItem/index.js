import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductListItem extends Component {
  render() {
    return (
      <div className={'Product'} style={{padding: 20}}>
        <div className={'product__image'}>
          <img style={{ 'width': '100%' }} src={this.props.product.images[0].src} alt={`${this.props.product.title}`} />
        </div>
        <div className={'product__title'}>
          <Link to={`/products/${(this.props.product.productType) ? this.props.product.productType : 'uncategorized'}/${this.props.product.handle}`}>
            {this.props.product.title}
          </Link>
        </div>
        <div className={'product__price'}>
          ${this.props.product.variants[0].price}
        </div>
      </div>
    )
  }
}

export default ProductListItem;