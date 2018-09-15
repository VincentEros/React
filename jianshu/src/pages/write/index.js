import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {

} from './style'
import { actionCreators } from './store'

class Write extends Component {
  render() {
    const { loginValue } = this.props
    if (loginValue) {
      return (
        <Fragment>
          <div>write</div>
        </Fragment>
      )
    } else {
      alert('请先登录!')
      return <Redirect to="/login"/>
    }
  }
}

const mapState = (state) => ({
  loginValue: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write)
