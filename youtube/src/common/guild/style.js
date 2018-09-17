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
  ::after {
    bottom: -5px;
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .06);
    content: "";
    height: 5px;
    left: 0px;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    right: 0px;
    width: 100%;
    z-index: 2050;
  }
  background: #fff;
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
  transition: background .3s;
  &.deep {
    background: #ececec;
    transition: background .3s;
  }
`

export const Logo = styled.a.attrs({
  href: '/'
})`
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
export const TopMenuButton = styled.div.attrs({className:'change-bg'})`
  margin: 0px 16px 0 0;
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  transition: background .2s;
  &.deep {
    background: #ececec;
    transition: background .2s;
  }
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

export const LeftGuildContainer =styled.div`
  &.invisible {
    visibility: hidden;
  }
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  #guide-wrapper {
    background: transparent;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
    #guide-spacer {
      background: transparent;
      margin-top: 56px;
    }
`

export const GuildContent = styled.div`
  background: #F5F5F5;
  width: 240px;
  flex: 1;
  flex-basis: 0.000000001px;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
  }
    #guide-section-title {
      display: block;
      padding: 8px 24px;
      letter-spacing: .007px;
      text-transform: uppercase;
    }
    .none-title {
      padding: 0 !important;
    }
      #guide-section-title>a {
      color: #a0a0a0;
      font-size: .8rem;
      font-weight: 500;
      letter-spacing: .007px;
      text-transform: uppercase;
      }
`

export const GuildSection = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 12px 0;
`

export const GuildItem = styled.div.attrs({id:'guild-item'})`
  width: 100%;
  &:hover {
    background: #f0f0f0;
  }
  a {
    padding: 8px 24px;
    cursor: pointer;
    box-sizing: border-box;
    outline: 0;
    font-size: 0.9rem;
    color: var(--yt-primary-color);
    display: flex;
    flex-direction: row;
    align-items: center;  
  }
    a>i.iconfont {
      margin-right: 24px;
    }
    a>i.home {
      color: red;
    }
`
