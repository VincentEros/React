import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchBox,
  SearchIcon,
  SearchInfo,
  SearchTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'

class Header extends Component{

  render () {
    const { login, focused, list, mouseIn, page, totalPage, handleLogout, handleFocus, handleBlur, handleMouseEnter, handleMouseLeave, handleSwitch } = this.props
    const newList = list.toJS()
    const pageList = []
    for (let i = (page -1 ) * 10; i < page * 10; i++) {
      if (newList[i]) {
        pageList.push(newList[i])
      }
    }

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active iconfont">&#xe7e3;首页</NavItem>
          <NavItem className="left iconfont">&#xe791;下载App</NavItem>
          {
            login ?
              <NavItem onClick={handleLogout} className="right logout">退出</NavItem>:
              <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right iconfont">&#xe636;</NavItem>
          <SearchBox>
            <CSSTransition
              in={focused}
              timeout={500}
              classNames="slide"
            >
              <NavSearch
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}
                className={focused ? "focus" : ""}
              ></NavSearch>
            </CSSTransition>
            <SearchIcon className={focused ? "focus iconfont" : "iconfont"}>
              &#xe620;
            </SearchIcon>
            <SearchInfo
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={focused || mouseIn ? "focus iconfont" : "iconfont"}
            >
              <SearchTitle>
                热门搜索
                <SearchInfoSwitch onClick={() => handleSwitch(page, totalPage, this.spinIcon)}>
                  <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe62e;</i>
                  换一批
                </SearchInfoSwitch>
              </SearchTitle>
              <SearchInfoList>
                {
                  pageList.map((item) => {
                    return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                  })
                }
              </SearchInfoList>
            </SearchInfo>
          </SearchBox>
        </Nav>
        <Addition>
          <Link to="/write"><Button className="write">
            <i className="iconfont">&#xe600;</i>
            写文章
          </Button>
          </Link>
          <Button className="sign">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout () {
      dispatch(loginActionCreators.logout())
    },
    handleFocus (list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleBlur () {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleSwitch (page, totalPage, spin) {
      let prevDeg = spin.style.transform.replace(/[^[0-9]/ig, '')
      if (prevDeg) {
        prevDeg = parseInt(prevDeg, 10)
        prevDeg += 360
      } else {
        prevDeg = 360
      }
      spin.style.transform = 'rotate('+prevDeg+'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.searchSwitch(page + 1))
      } else {
        dispatch(actionCreators.searchSwitch(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
