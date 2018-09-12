import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchBox,
  SearchIcon
} from './style'

class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active iconfont">&#xe7e3;首页</NavItem>
          <NavItem className="left iconfont">&#xe791;下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right iconfont">&#xe636;</NavItem>
          <SearchBox>
            <NavSearch></NavSearch>
            <SearchIcon className="iconfont">&#xe620;</SearchIcon>
          </SearchBox>
        </Nav>
        <Addition>
          <Button className="write iconfont">&#xe600;写文章</Button>
          <Button className="sign">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header
