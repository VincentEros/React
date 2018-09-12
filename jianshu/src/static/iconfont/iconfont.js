import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1536770146967'); /* IE9*/
    src: url('./iconfont.eot?t=1536770146967#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1536770146967') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1536770146967#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`
