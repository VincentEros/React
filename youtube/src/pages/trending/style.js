import styled from 'styled-components'

export const TrendingWrapper = styled.div`
  width: 1284px;
  margin: 0 auto;
  overflow: hidden;
  .trending-list {
    margin-top: 24px;
  }
    .trending-item {
      margin-bottom: 16px;
      width: 100%;
      display: flex;
      flex-direction: row;
      position: relative;
}
    }
    .thumbnail {
      flex: none;
      display: inline-block;
      position: relative;
      width: 246px;
      height: 138px;
      margin-right: 16px;
    }
    a#thumbnail {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
      .thumbnail-default {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .thumbnail-default>img {
        height: 138px;
        width: 246px;
      }
      .thumbnail-time {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 4px;
        color: hsl(0, 0%, 100%);
        opacity: .8;
        padding: 2px 4px;
        border-radius: 2px;
        letter-spacing: .5px;
        font-size: 10px;
        font-weight: 500;
        line-height: 1.2rem;
        flex-direction: row;
        align-items: center;
        display: inline-flex;
        background: hsl(0, 0%, 6.7%);
      }
        .thumbnail-time>span {
          margin: 0;
          padding: 0;
          border: 0;
          background: transparent;
        }
      .thumbnail-hover {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
      }
      @keyframes togif 
      {
        from{ opacity: 0;}
        10%{ opacity: 1;}
        90%{ opacity: 1;}
        to{ opacity: 0;}
      }
      .thumbnail-hover>img {
        height: 138px;
        width: 246px;
      }
    .trending-text-wrapper {
      max-width: 600px;
      min-width: 0;
      cursor: pointer;
      text-decoration: none;
      flex: 1;
      flex-basis: 0.000000001px;
      display: flex;
      flex-direction: column;
    }
        .title-wrapper {
          display: flex;
          justify-content: space-between;
        }
          h3 {
            margin-right: 8px;
          }
            .supported {
              padding: 2px 0 8px 0;
              font-size: 10px;
              font-weight: 500;
              letter-spacing: .007px;
              text-transform: uppercase;
            }
            .video-title {
              color: black;
              display: block;
              max-height: 4.8rem;
              overflow: hidden;
              font-size: 1.17em;
              font-weight: 400;
              line-height: 30px;
            }
          .menu {
            height: 2.4rem;
          }
        .metadata {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
          .metadata>div {
            margin-right: 8px;
          }
          #by-meta {
            max-width: 100%;
            max-height: 21px;
            overflow: hidden;
            font-size: 1.3rem;
            font-weight: 400;
            line-height: 21px;
            text-transform: none;
            -ms-flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            display: flex;
            -ms-flex-direction: row;
            -webkit-flex-direction: row;
            flex-direction: row;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }
            .uploadman {
              overflow-x: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              display: flex;
              font-size: 10px;
              font-weight: 400;
              line-height: 1.8rem;
              text-transform: none;
            }
            .uploadman>a {
              color: #888888;
            }
          .badge>i {
            line-height: 21px;
            font-size: 12px;
          }
          #date-meta {
            max-width: 100%;
            overflow: hidden;
            font-size: 12px;
            font-weight: 400;
            text-transform: none;
            display: flex;
            flex-wrap: wrap;
            line-height: 21px;
          }
          .description {
            color: hsl(0, 0%, 53.3%);
            padding-top: 8px;
            margin-bottom: 8px;
            display: block;
            line-height: 1.8rem;
            max-height: 3.6rem;
            overflow: hidden;
            font-size: 10px;
            font-weight: 400;
            text-transform: none;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
`

