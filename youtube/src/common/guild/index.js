import React, {Component,Fragment} from 'react'
import { connect } from 'react-redux'
import {Button, Input} from "antd";
import 'antd/dist/antd.css';
import {
  MastheadContainer,
  Masthead,
  LeftGuildBtn,
  Logo,
  Search,
  End,
  TopMenuButton,
  AccountOptionButton
} from './style'

class Guild extends Component {
  render() {
    const AntdSearch = Input.Search
    return (
      <Fragment>
        <MastheadContainer id="masthead-container">
          <Masthead id="masthead">
            <LeftGuildBtn id="guide-button">
              <button id="button">
                <i className="iconfont">&#xe7e9;</i>
              </button>
            </LeftGuildBtn>
            <Logo id="logo">
              <div className="logo-container">
                <img src='https://www.easyicon.net/api/resizeApi.php?id=1202587&size=32' alt=""/>
                <span>YouTube</span>
              </div>
            </Logo>
            <Search id="search">
              <div id="input-container">
                <AntdSearch
                  placeholder="搜索"
                  onSearch={value => console.log(value)}
                  style={{ width: 640 }}
                  enterButton
                />
              </div>
            </Search>
            <End id="end">
              <div id="buttons">
                <TopMenuButton>
                  <button id="button">
                    <i className="iconfont">&#xe967;</i>
                  </button>
                </TopMenuButton>
                <TopMenuButton>
                  <button id="button">
                    <i className="iconfont">&#xe639;</i>
                  </button>
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
                      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537051909084&di=ba82fd17a691697475e6c11596c23bae&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fimg%2Fh1%2Fh974%2Fimg201709251041100_info300X300.jpg" alt=""/>
                    </div>
                  </button>
                </AccountOptionButton>
              </div>
            </End>
          </Masthead>
        </MastheadContainer>
        <div id="leftGuild"></div>
      </Fragment>
    )
  }
}

export default connect(null, null)(Guild)
