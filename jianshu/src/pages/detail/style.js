import styled from 'styled-components'

export const DetailWrapper = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 620px;
  .article {}
    .title {
      font-size: 34px;
      font-weight: 700;
      line-height: 1.3;
      margin: 20px 0 0;
    }
    .author {
      margin: 30px 0 40px;
      box-sizing: border-box;
      display: block;
    }
      .avator {
        width: 48px;
        height: 48px;
        vertical-align: middle;
        display: inline-block;
      }
        .avator>img {
          width: 100%;
          height: 100%;
          border: 1px solid #ddd;
          border-radius: 50%;
        }
      .info {
        vertical-align: middle;
        display: inline-block;
        margin-left: 16px;
      }
        .name {
          margin-right: 3px;
          font-size: 16px;
          vertical-align: middle;
        }
        .follow {
          border-radius: 40px;
          color: #fff;
          background-color: #42c02e;
          padding: 0 7px 0 5px;
          font-size: 12px;
          font-weight: 400;
          line-height: normal;
        }
        .meta {
          margin-top: 5px;
          font-size: 12px;
          color: #969696;
        }
          span {
            padding-right: 5px;
          }
    .content {
      color: #2f2f2f;
      word-break: break-word!important;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.7;
    }
      .image-package {
        padding-bottom: 25px;
        width: 700px;
        margin-left: -40px;
        text-align: center;
        color: #2f2f2f;
        word-break: break-word!important;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7;
      }
        .image-container {
          z-index: 100;
          position: relative;
          transition: background-color .1s linear;
          margin: 0 auto;
          max-width: 699px;
          max-height: 393px;
          background-color: transparent;
          text-align: center;
          max-width: 699px;
          max-height: 393px;
          background-color: transparent;
        }
          .image-container-fill {
            padding-bottom: 56.220000000000006%;
          }
          .image-view {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
            img {
              cursor: zoom-in;
              display: block;
              transition: all .15s linear;
              z-index: 100;
              -webkit-filter: blur(0);
              filter: blur(0);
              opacity: 1;
            }
      p {
        margin: 0 0 25px;
      }
  
`
