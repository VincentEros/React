import styled from 'styled-components'

export const MastheadContainer = styled.div`
  #button {
      text-align: center;
      vertical-align: middle;
      color: #ccc;
      outline: none;
      margin: 0;
      border: none;
      padding: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: transparent;
      color: gray;
    }
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2020;
  transform: translateY(0);
  transition: transform 0.3s ease;
`

export const Masthead = styled.div`
  height: 56px;
  padding: 0 16px;
  display: flex;
`

export const LeftGuildBtn = styled.div`
  margin: 8px 16px 0 0;
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  
`

export const Logo = styled.div`
  width: 129px;
  display: flex;
  flex-direction: row;
  background: white;
  .logo-container {
    margin-top: 16px;
    height: 24px;
  }
    .logo-container>* {
      float: left;
      cursor: pointer;
    }
    .logo-container>span {
        font-size:21px;
      }
`

export const Search = styled.div`
  margin: 0 40px;
  color: var(--yt-swatch-text);
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  flex-basis: 0.000000001px;
  #input-container {
    padding-top: 12px;
  }
`

export const End = styled.div`
  min-width: 225px;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  font-size: 10px;
  #buttons {
    display: flex;
    flex-direction: row;
  }
`
export const TopMenuButton = styled.div`
  margin: 0px 16px 0 0;
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  
`
export const AccountOptionButton = styled.div`
  display: flex;
  #avator-btn {
    background: none;
    border: none;
    outline: none;
    padding: 1px 6px;
    display: flex;
  }
    #avator-btn>div {
      width: 32px;
      height: 32px;
      cursor: pointer;
      margin: 0 8px;
      border-radius: 50%;
      overflow: hidden;
    }
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
      }
`
