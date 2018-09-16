import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import {
  PageManager
} from './style'
import Home from "./home";
import * as actionCreators from "../common/guild/store/actionCreators";

class Manager extends Component {
  render() {
    return (
      <PageManager
        className={this.props.doseLeftGuildShow ? "guide-persistent-and-visible" : ""}
      >
        <Route path='/' exact component={Home}></Route>
        <Route path='/trending' exact render={()=><div>trending</div>}></Route>
        {/*<Route path='/history' exact component={History}></Route>*/}
      </PageManager>
    )
  }
}

const mapState = (state) => ({
  doseLeftGuildShow: state.getIn(['guild', 'leftGuildShow'])
})

const mapDispatch = (dispatch) => {

}

export default connect(mapState, mapDispatch)(Manager)
