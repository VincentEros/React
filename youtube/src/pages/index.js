import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import * as methods from '../common/methods'
import {
  PageManager
} from './style'
import Home from "./home";
import Detail from "./detail";
import Trending from "./trending";
import MainPlayList from "./playlist/Mainplaylist";
import ListHistory from "./playlist/child/History";
import Subscription from "./subscriptions";
import { actionCreators } from './home/store'
import SearchPage from "../common/search"
import LoginPage from "../common/login"
import SignUp from "../common/signup"


class Manager extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <PageManager
          className={this.props.doseLeftGuildShow ? "guide-persistent-and-visible" : ""}
        >
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/search' exact component={SearchPage}></Route>
          <Route path='/login' exact component={LoginPage}></Route>
          <Route path='/signup' exact component={SignUp}></Route>
          <Route path='/trending' component={Trending}></Route>
          <Route path='/subscriptions' component={Subscription}></Route>
          <Route path='/playlist' exact component={MainPlayList}></Route>
          <Route path='/playlist/history' exact component={ListHistory}></Route>

        </PageManager>
      </BrowserRouter>
    )
  }

  // 注意 ！！ 必须触发一个 例如 此页面必定更新 所以可省略  但因为这里不止home页面 还有trending页面的didmount 事件 所以不省略，之后可以修改
  componentDidMount () {
    this.props.changeHomeData()
    methods.toGifBindEvent()
  }
  componentDidUpdate () {
    methods.toGifBindEvent()
  }

}

const mapState = (state) => ({
  doseLeftGuildShow: state.getIn(['guild', 'leftGuildShow'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  }

})
export default connect(mapState, mapDispatch)(withRouter(Manager))
