import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({href:'/'})`
  position: absolute;
  top: 0;
  left: 230px;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.right,.iconfont {
    font-size: 20px;
  }
  &.active {
    color: #ea6f5a;
  }
  padding: 0 15px;
  line-height: 58px;
  font-size: 17px;
  color: #333;
`
export const SearchBox = styled.div`
  position: relative;
  float: left;
`

export const SearchIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 25px;
  color: #969696;
  border-radius: 50%
  background: #eee;
  line-height: 30px;
  text-align: center;
  width: 30px;
  height: 30px;
  &.focus {
    background: #969696;
    color: #fff;
  }
`

export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
  line-height: 38px;
  margin: 12px 20px;
  border-radius: 25px;
  width: 180px;
  padding: 0 20px
  border: none;
  outline: none;
  background: #eee;
  font-size: 15px;
  color: #999;
  &.focus {
    width: 260px;
  }
  &.slide-enter {
    transition: all .5s;
  }
  &.slide-enter-active {
    width: 260px;
  }
  &.slide-exit {
    transition: all .5s;
  }
  &.slide-exit-active {
    width: 180px;
  }
`

export const SearchInfo = styled.div`
  visibility: hidden;
  position: absolute;
  left: 18px;
  top: 56px;
  width: 200px;
  padding: 0 20px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  &.focus {
    visibility: visible;
  }
`
export const SearchTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  width: 180px;
  float: left;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  background-color: transparent;
  border-width: 0;
  padding: 0;
  &:hover {
    color: black;
    cursor: pointer;
  }
  .spin {
    display: block;
    float: left;
    margin-right: 3px;
    font-size: 12px;
    transition: transform .2s;
  }

`
export const SearchInfoList =styled.div`
`

export const SearchInfoItem = styled.a`
  margin-bottom: 13px;
  display: inline-block;
  margin-right: 10px;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`

export const Addition = styled.div`
  position: absolute;
  right: 250px;
  top: 0;
  height: 58px;
`

export const Button = styled.div`
  float: right;
  text-align: center;
  &.write {
    background: #ec6149;
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin: 8px 15px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
  }
  &.sign {
    width: 80px;
    height: 38px;
    line-height: 38px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
  }
  .iconfont {
    text-align: center;
    font-size: 22px;
  }
`
