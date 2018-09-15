import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 300px;
`
export const BackTop = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
  line-height: 40px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 6px 10px;
  transition: all .2s;
  &:hover {
    background: #dcdcdc;
    color: #fff;
    cursor: pointer;
    border-color: #fff;
  }
`

export const HomeLeft = styled.div`
  width: 66.66%;
  padding-top: 30px;
  padding-right: 0;
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  display: block;
  box-sizing: border-box;
  .wxchat-banner {
    width: 625px;
    height: 270px;
    overflow: hidden;
    border-radius: 5px;
  }
`
export const TopicWrapper = styled.div`
  margin-top: 30px;
  padding: 20px 0 10px;
`

export const TopicItem = styled.a`
  display: inline-block;
  margin: 0 18px 18px 0;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  overflow: hidden;
  img {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
  }
  span {
    box-sizing: border-box;
    display: inline-block;
    padding: 0 11px 0 6px;
  }
`
export const LoadMore = styled.a`
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 40px
  line-height: 40px;
  margin: 30px auto 60px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  width: 96%;
  border-radius: 20px;
  background: #a5a5a5;
  &:hover {
    background: #999;
  }
`

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  .wrap-img {
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
  }
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
  .content {
    padding-right: 140px;
  }
    .title {
      color: #333;
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }
    .abstract {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .meta {
      display: block;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      word-wrap: break-word;
    }
      .nickname {
        margin-right: 10px;
        color: #b4b4b4;
      }
      .iconfont {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        margin-right: 5px;
        color: #b4b4b4;
      }
       span {
         margin-right: 10px;
         color: #b4b4b4;
       }
`

export const HomeRight = styled.div`
  padding: 30px 0 0;
  margin-left: 4.16667%;
  width: 29.16667%;
  float: left;
  display: block;
  box-sizing: border-box;
  .board {
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
  }
`
export const BoardItem = styled.a`
  img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
    cursor: pointer;
  }
`
export const QrDownload = styled.a`
  position: relative;
  min-height: 1px;
  float: left;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  box-sizing: border-box;
  cursor: pointer;
  .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
    border: 0;
    cursor: pointer;
  }
  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
  }
    .title {
      font-size: 15px;
      color: #333;
    }
      .iconfont {
      font-family: iconfont!important;
      font-size: inherit;
      font-style: normal;
      font-weight: 400!important;
      -webkit-font-smoothing: antialiased;
      }
    .description {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
`

export const RecAuthor = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
  .title {
    text-align: left;
  }
    span {
      font-size: 14px;
      color: #969696;
    }
    .page-change {
      float: right;
      display: inline-block;
      font-size: 14px;
      color: #969696;
      cursor: pointer;
    }
  .list {
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
    padding-left: 0;
  }
    li {
      margin: 20px 0;
      position: relative;
      box-sizing: border-box;
      line-height: 20px;
      display: list-item;
      text-align: -webkit-match-parent;
    }
    .avatar {
      float: left;
      width: 48px;
      height: 48px;
      margin-right: 10px;
      display: block;
      cursor: pointer;
    }
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: middle;
      }
    .follow {
      position: absolute;
      right: 0px;
      margin-top: 5px;
      padding: 0;
      margin-left: -10px;
      font-size: 13px;
      color: #42c02e;
      border-color: #42c02e;
      font-weight: 400;
      line-height: normal;
      cursor: pointer;
    }
    .name {
      padding-top: 5px;
      font-size: 14px;
      display: block;
      color: #333;
    }
    p {
      margin-top: 2px;
      font-size: 12px;
      margin: 0 0 10px;
      color: #969696;
    }
  .find-more {
    box-sizing: border-box;
    position: absolute;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }
`
export const AuthorItem = styled.li`
  
`
