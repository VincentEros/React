import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import {
  PageManager
} from './style'
import Home from "./home";
import * as actionCreators from "../common/guild/store/actionCreators";
import Trending from "./trending";
import MainPlayList from "./playlist/Mainplaylist";
import ListHistory from "./playlist/child/History";
import Subscription from "./subscriptions";

class Manager extends Component {
  render() {
    return (
      <BrowserRouter>
        <PageManager
          className={this.props.doseLeftGuildShow ? "guide-persistent-and-visible" : ""}
        >
          <Route path='/' exact component={Home}></Route>
          <Route path='/trending' component={Trending}></Route>
          <Route path='/subscriptions' component={Subscription}></Route>
          <Route path='/playlist' exact component={MainPlayList}></Route>
          <Route path='/playlist/history' exact component={ListHistory}></Route>

        </PageManager>
      </BrowserRouter>
    )
  }
}

const mapState = (state) => ({
  doseLeftGuildShow: state.getIn(['guild', 'leftGuildShow'])
})

const mapDispatch = (dispatch) => {

}

export default connect(mapState, mapDispatch)(Manager)
