import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 1284px;
  margin: 0 auto;
`

export const SectionList = styled.div`
  overflow: hidden;
  
`
export const HomeVideoSection = styled.div`
    .paper-button {
      color: #b5b5b5;
      margin: 0;
      padding: 0;
      margin-right: auto;
      margin-bottom: 24px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: .007px;
      text-transform: uppercase;
    }
    .paper-button>span {
      width: 66px;
    }
    .grid-subheader {
      margin-top: 24px;
    }
      .title-container {
        color: black;
        align-items: center;
        height: 2rem;
      }
        #title {
          max-height: 2rem;
          font-size: 16px;
          font-weight: 500;
          line-height: 2rem;  
        }
    .contents {
      margin-top: 24px;  
    }
      #items {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
`

export const VideoRenderer = styled.div`
  margin-bottom: 24px;
  padding-right: 4px;
  display: inline-block;
  vertical-align: top;
  white-space: normal;
    .thumbnail {
      height: 118px;
      width: 210px;
      display: inline-block;
      position: relative;
      flex: none;
    }
      .thumbnail-default {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .thumbnail-default>img {
        height: 118px;
        width: 210px;
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
        height: 118px;
        width: 210px;
      }
    
    .detail {
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: column;
    }
      .detail>.meta {
        padding-right: 24px;
      }
        .meta>h3 {
          margin: 8px 0 8px;
        }
          #video-title {
            color: black;
            width: 186px;
            display: -webkit-box;
            max-height: 3.2rem;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            -webkit-line-clamp: 2;
            font-size: 14px;
            font-weight: 500;
            line-height: 19px;
          }
          #by-meta {
            max-width: 100%;
            max-height: 1.8rem;
            overflow: hidden;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            text-transform: none;
            flex-wrap: wrap;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
              .uploadmen>a {
                font-size: 14px;
                color: #B5B5B5;
              }
          #date-meta {
            color: #B5B5B5;
            max-width: 100%;
            line-height: 21px;
            max-height: 3.6rem;
            overflow: hidden;
            font-size: 14px;
            font-weight: 400;
            text-transform: none;
            display: flex;
            flex-wrap: wrap;
          }
`
