import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import ProductList from '../../components/productList';

class Home extends React.Component {

  render() {
    return (
      <div className={'Home'}>

        <section className={'Hero'}>
          <div className={'Hero__Content'}>
            <h1 className={'Hero__Headline'}>Let Your Parties Do the Talking</h1>
          </div>
        </section>

        <section className={'Home__Content'}>
          <Container>
            <ProductList products={this.props.products.all}/>
          </Container>
        </section>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)