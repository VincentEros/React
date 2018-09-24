import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }
  

  div, article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  .click-count::after {
    content: '•';
    margin: 0 4px;
  }
  

  
  .ant-dropdown {
    z-index: 3000;
  }
  @keyframes togif 
      {
        from{ opacity: 0;}
        10%{ opacity: 1;}
        90%{ opacity: 1;}
        to{ opacity: 0;}
      }
      
`



export const IconButton = styled.div.attrs({className:'change-bg'})`
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
`
