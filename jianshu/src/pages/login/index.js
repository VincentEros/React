import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  LoginWrapper
} from './style'
import { actionCreators } from './store'

class Login extends Component {
  render() {
    const { loginValue } = this.props
    if (!loginValue) {
      return (
        <Fragment>
          <LoginWrapper>
            <div className="main">
              <h4 className="title">
                <div className="normal-title">
                  <a className="active" href="">登录</a>
                  <b>·</b>
                  <a className="sign-up-btn" href="">注册</a>
                </div>
              </h4>
              <div className="sign-in-container">
                <div className="login-form">
                  <div className="input-prepend">
                    <input ref={(input) => {this.account = input}} type="text" placeholder="手机号或邮箱"/>
                    <i className="iconfont">人</i>
                  </div>
                  <div className="input-prepend">
                    <input ref={(input) => {this.passwd = input}} type="password" placeholder="密码"/>
                    <i className="iconfont">锁</i>
                  </div>
                  <div className="remember-btn">
                    <input type="checkbox" className="remeber-me"/>
                    <span>记住我</span>
                  </div>
                  <div className="forget-btn">
                    <a href="">登录遇到问题?</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="">用手机号重置密码</a>
                      </li>
                      <li>
                        <a href="">用手机号重置密码</a>
                      </li>
                      <li>
                        <a href="">用手机号重置密码</a>
                      </li>
                      <li>
                        <a href="">用手机号重置密码</a>
                      </li>
                    </ul>
                  </div>
                  <button
                    className="sign-in-button"
                    onClick={() => this.props.login(this.account,this.passwd)}
                  >
                    <span className="sign-in-loading"></span>
                    登录
                  </button>
                </div>
                <div className="more-sign">
                  <h6>
                    社交账号登录
                  </h6>
                  <ul className="more-sign-types">
                    <li>微博</li>
                    <li>微信</li>
                    <li>QQ</li>
                    <li>其他</li>
                  </ul>
                </div>
              </div>
            </div>
          </LoginWrapper>
        </Fragment>
      )
    } else {
      return <Redirect to="/"/>
    }

  }
}

const mapState = (state) => ({
  loginValue: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login (accountElem, passwdElem) {
    dispatch(actionCreators.login())
  }
})
export default connect(mapState, mapDispatch)(Login)
