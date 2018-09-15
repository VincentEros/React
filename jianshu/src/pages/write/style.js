import styled from 'styled-components'

export const LoginWrapper = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 400px;
    .main {
      width: 400px;
      margin: 60px auto 0;
      padding: 50px 50px 30px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0,0,0,.1);
      vertical-align: middle;
      display: inline-block;
      box-sizing: border-box;
    }
      .title {
        text-align: center;
        margin: 0 auto 50px;
        padding: 10px;
        font-weight: 400;
        color: #969696;
        font-size: 18px;
      }
        .normal-title {}
          a.active {
            font-weight: 700;
            padding: 10px;
            color: #ea6f5a;
            border-bottom: 2px solid #ea6f5a;
          }
          b {
            padding: 10px;
            font-weight: 700;
          }
          a.sign-up-btn {
            padding: 10px;
            color: #969696;
          }
      .sign-in-container {
        text-align: center;
        font-size: 14px;
      }
        .login-form {
          margin-bottom: 30px;
          text-align: center;
          font-size: 14px;
        }
          .input-prepend {
            display: block;
            position: relative;
            width: 85%;
          }
            .input-prepend>input {
              border-bottom: none;
              border-radius: 4px 4px 0 0;
              width: 100%;
              height: 50px;
              margin-bottom: 0;
              padding: 4px 12px 4px 35px;
              border: 1px solid #c8c8c8;
              background-color: hsla(0,0%,71%,.1);
              vertical-align: middle;
            }
            .iconfont {
              position: absolute;
              top: 14px;
              left: 10px;
              font-size: 18px;
              color: #969696;
            }
          .remember-btn {
            float: left;
            margin: 15px 0;
          }
            input[type=checkbox] {
              margin: 4px 0 0;
              line-height: normal;
            }
            .remember-btn>span {
              margin-left: 5px;
              font-size: 15px;
              color: #969696;
              vertical-align: middle;
            }
          .forget-btn {
            float: right;
            position: relative;
            margin: 15px 0;
            font-size: 14px;
          }
            .forget-btn>a {
              color: #999;
            }
            .dropdown-menu {
              top: 20px;
              left: auto;
              right: 0;
              border-radius: 4px
              margin-top: 0;
              border-color: transparent;
              box-shadow: 0 2px 8px rgba(0,0,0,.1);
              position: absolute;
              z-index: 1000;
              display: none;
              float: left;
              min-width: 160px;
              padding: 5px 0;
              margin: 2px 0 0;
              list-style: none;
              font-size: 14px;
              text-align: left;
              background-color: #fff;
              background-clip: padding-box;
              border: 1px solid rgba(0,0,0,.15);
            }
              .dropdown-menu>li {
                line-height: 20px;
              }
          .sign-in-button {
            margin-top: 20px;
            width: 100%;
            padding: 9px 18px;
            font-size: 18px;
            border: none;
            border-radius: 25px;
            color: #fff;
            background: #3194d0;
            cursor: pointer;
            outline: none;
            display: block;
            clear: both;
          }
            .sign-in-loading {
              position: relative;
              width: 20px;
              height: 20px;
              vertical-align: middle;
              margin-top: -4px;
              margin-right: 2px;
              display: none;
            }
        .more-sign {
          margin-top: 50px;
        }
          h6 {
            position: relative;
            margin: 0 0 10px;
            font-size: 12px;
            color: #b5b5b5;
          }
          ul {
            margin-bottom: 10px;
            list-style: none;
          }
            li {
              margin: 0 5px;
              display: inline-block;
            }
`
