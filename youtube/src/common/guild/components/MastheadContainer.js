import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Input} from "antd";
import 'antd/dist/antd.css';
import {
  MastheadContainer,
  Masthead,
  LeftGuildBtn,
  Logo,
  Search,
  End,
  TopMenuButton,
  AccountOptionButton,
} from '../style'
import {  Dropdown } from 'antd';
import * as dropMenu from './DropdownMenu'
import { actionCreators } from "../../search/store";


class TopGuild extends Component {
  render() {
    const AntdSearch = Input.Search
    const {doseLeftGuildShow, toggleLeftGuild, topBtnBgToDeep} = this.props
    const { yieldMenu, appMenu } = dropMenu

    const fetch= (value) => {
      // this.props.history.push('/search', value)  //一般不用这个跳转
      this.props.getSearchData()    // 一般向后台发送请求 获取数据然后渲染
      // return <Redirect push to="/search" />
      window.location.href="search" // 最好不用 这里有bug 因为重新载入后  获取的数据马上被清空了

    }

    return (
      <MastheadContainer id="masthead-container">
        <Masthead id="masthead">
          <LeftGuildBtn
            id="guide-button"
            onMouseDown={topBtnBgToDeep}
            onClick={() => toggleLeftGuild(doseLeftGuildShow)}
          >
            <button id="button">
              <i className="iconfont">&#xe7e9;</i>
            </button>
          </LeftGuildBtn>
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
              <TopMenuButton>
                <Dropdown overlay={yieldMenu} trigger={['click']}>
                  <button id="button" className="ant-dropdown-link">
                    <i className="iconfont">&#xe967;</i>
                  </button>
                </Dropdown>
              </TopMenuButton>
              <TopMenuButton>
                <Dropdown overlay={appMenu} trigger={['click']}>
                <button id="button">
                  <i className="iconfont">&#xe639;</i>
                </button>
                </Dropdown>
              </TopMenuButton>
              <TopMenuButton>
                <button id="button">
                  <i className="iconfont">&#xe626;</i>
                </button>
              </TopMenuButton>
              <TopMenuButton>
                <button id="button">
                  <i className="iconfont">&#xe680;</i>
                </button>
              </TopMenuButton>
              <AccountOptionButton>
                <button id="avator-btn">
                  <div>
                    <img
                      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537051909084&di=ba82fd17a691697475e6c11596c23bae&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh974%2Fimg201709251041100_info300X300.jpg"
                      alt=""/>
                  </div>
                </button>
              </AccountOptionButton>
            </div>
          </End>
        </Masthead>
      </MastheadContainer>
    )
  }
}
// 搜索抓取数据
const mapState = (state) => {
  return {
    resultList: state.getIn(['search','resultList'])
  }
}

const mapDispatch = (dispatch) => ({
  getSearchData() {
    dispatch(actionCreators.getSearchInfo())
  }
})

export default connect(mapState, mapDispatch)(withRouter(TopGuild))
