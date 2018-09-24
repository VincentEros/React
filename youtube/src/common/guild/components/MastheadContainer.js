import React, { PureComponent} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Input} from "antd";
import 'antd/dist/antd.css';
import {IconButton} from '../../../../src/style'
import {
  MastheadContainer,
  Masthead,
  Logo,
  Search,
  End,
  AccountOptionButton,
} from '../style'
import {  Dropdown } from 'antd';
import * as dropMenu from './DropdownMenu'
import { getSearchInfo } from "../../search/store/actionCreators";
import { keepIsLoginChange } from '../../login/store/actionCreators'
import { logout } from '../store/actionCreators'


class TopGuild extends PureComponent {
  render() {


    const AntdSearch = Input.Search
    const {doseLeftGuildShow, toggleLeftGuild, isLogin } = this.props
    const { yieldMenu, appMenu, msgMenu, notiMenu, accountMenu } = dropMenu

    const fetch= (value) => {
      // this.props.history.push('/search', value)  //一般不用这个跳转
      this.props.getSearchData()    // 一般向后台发送请求 获取数据然后渲染
      // return <Redirect push to="/search" />
      window.location.href="search" // 最好不用 这里有bug 因为重新载入后  获取的数据马上被清空了

    }



    return (
      <MastheadContainer id="masthead-container">
        <Masthead id="masthead">
          <IconButton
            id="guide-button"
            onClick={() => toggleLeftGuild(doseLeftGuildShow)}
          >
            <button id="button">
              <i className="iconfont">&#xe7e9;</i>
            </button>
          </IconButton>
          <Logo id="logo">
            <div className="logo-container">
              <img src={require('../../../../src/static/logo1.png')} alt=""/>
              <img src={require('../../../../src/static/alpha1.png')} alt=""/>
            </div>
          </Logo>
          <Search id="search">
            <div id="input-container">
              <AntdSearch
                placeholder="搜索"
                onSearch={value => {fetch(value)}}
                style={{width: 640}}
                enterButton
              />
            </div>
          </Search>
          <End id="end">
            <div id="buttons">
              <IconButton>
                <Dropdown overlay={yieldMenu} trigger={['click']}>
                  <button id="button" className="ant-dropdown-link">
                    <i className="iconfont">&#xe967;</i>
                  </button>
                </Dropdown>
              </IconButton>
              <IconButton>
                <Dropdown overlay={appMenu} trigger={['click']}>
                  <button id="button">
                    <i className="iconfont">&#xe639;</i>
                  </button>
                </Dropdown>
              </IconButton>
              <IconButton>
                <Dropdown overlay={msgMenu} trigger={['click']}>
                  <button id="button">
                    <i className="iconfont">&#xe626;</i>
                  </button>
                </Dropdown>
              </IconButton>
              <IconButton>
                <Dropdown overlay={notiMenu} trigger={['click']}>
                  <button id="button">
                    <i className="iconfont">&#xe680;</i>
                  </button>
                </Dropdown>
              </IconButton>
              <AccountOptionButton>
                {isLogin?
                  <Dropdown overlay={accountMenu} trigger={['click']}>
                    <button id="avator-btn">
                      <div>
                        <img
                          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537051909084&di=ba82fd17a691697475e6c11596c23bae&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh974%2Fimg201709251041100_info300X300.jpg"
                          alt=""/>
                      </div>
                    </button>
                  </Dropdown>
                  :
                  <a id="login" href="/login">登录</a>
                }
              </AccountOptionButton>
            </div>
          </End>
        </Masthead>
      </MastheadContainer>
    )
  }

  componentWillMount () {
    // localStorage.setItem('isLogin', JSON.stringify(this.props.isLogin))
    // console.log('导航即将挂载，是否已登录')
    let isLogin = localStorage.getItem('isLogin')
    if(isLogin){
      // console.log(JSON.parse(isLogin))
      this.props.keepIsLoginChange(JSON.parse(isLogin))
      // console.log(this.props.isLogin)  //因为异步 所以此时呢 这里的仍旧是false 但在渲染之后 已经改变了 这里是个障眼法
    }
  }
}

// 搜索抓取数据
const mapState = (state) => {
  return {
    resultList: state.getIn(['search','resultList']),
    isLogin: state.getIn(['login', 'isLogin'])
  }
}



const mapDispatch = (dispatch) => ({
  getSearchData () {
    dispatch(getSearchInfo())
  },
  keepIsLoginChange (isLogin) {
    dispatch(keepIsLoginChange(isLogin))
  },
  logout () {
    dispatch(logout())
  }
})


export default connect(mapState, mapDispatch)(withRouter(TopGuild))
