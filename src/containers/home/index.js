import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => (
  <div className={'Home'}>

    <section className={'Hero'}>
      <div className={'Hero__Content'}>
        <h1 className={'Hero__Headline'}>Let Your Parties Do the Talking</h1>
      </div>
    </section>

    <section className={'Home__Content'}>

    </section>

  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)