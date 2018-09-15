import React, {PureComponent} from 'react'
import {QrDownload} from '../style'

class Qrbox extends PureComponent {
  render() {
    return (
      <QrDownload>
        <img className="qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        <div className="info">
          <div className="title">
            下载简书手机App
            <i className="iconfont">></i>
          </div>
          <div className="description">随时随地发现和创作内容</div>
        </div>
      </QrDownload>
    )
  }
}

export default Qrbox
