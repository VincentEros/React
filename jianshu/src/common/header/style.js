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
  &.active {
    color: #ea6f5a;
  }
  padding: 0 15px;
  line-height: 58px;
  font-size: 17px;
  color: #333;
`
export const SearchBox = styled.div`
  float: left;
`

export const SearchIcon = styled.div`
  position: absolute;
  top: 23px;
  left: 878px;
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
`
