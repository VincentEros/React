import React, {PureComponent} from 'react'
import 'antd/dist/antd.css';
import {
  LeftGuildContainer,
  GuildContent,
  GuildSection,
  GuildItem
} from '../style'

class LeftGuild extends PureComponent {

  render() {
    const {doseLeftGuildShow} = this.props
    return (
      <LeftGuildContainer
        className={doseLeftGuildShow? "" : "invisible" }
      >
        <div id="guide-wrapper">
          <div id="guide-spacer"></div>
          <GuildContent>
            <div id="sections">
              <GuildSection>
                <h3>
                  <div id="guide-section-title" className="none-title">
                    {/*<a href=""></a>*/}
                  </div>
                </h3>
                <div id="items">
                  <GuildItem>
                    <a href="/">
                      <i className="iconfont home">&#xe6b5;</i>
                      首页
                    </a>
                  </GuildItem>
                  <GuildItem>
                    <a href="/trending">
                      <i className="iconfont">&#xe664;</i>
                      时下流行
                    </a>
                  </GuildItem>
                  <GuildItem>
                    <a href="/subscriptions">
                      <i className="iconfont">&#xe964;</i>
                      订阅内容
                    </a>
                  </GuildItem>
                </div>
              </GuildSection>
              <GuildSection>
                <h3>
                  <div id="guide-section-title">
                    <a href="/playlist">媒体库</a>
                  </div>
                </h3>
                <div id="items">
                  <GuildItem>
                    <a href="/playlist/history">
                      <i className="iconfont">&#xe6b4;</i>
                      历史记录
                    </a>
                  </GuildItem>
                  <GuildItem>
                    <a href="/playlist/later">
                      <i className="iconfont">&#xe699;</i>
                      稍后观看
                    </a>
                  </GuildItem>
                  <GuildItem>
                    <a href="/playlist/learning">
                      <i className="iconfont">&#xe7af;</i>
                      学习
                    </a>
                  </GuildItem>
                  <GuildItem>
                    <a href="/playlist/liked">
                      <i className="iconfont">&#xe74b;</i>
                      顶过的视频
                    </a>
                  </GuildItem>
                </div>
              </GuildSection>
              <GuildSection>
                <h3>
                  <div id="guide-section-title">
                    <a href="">订阅内容</a>
                  </div>
                </h3>
                <div id="items">
                  <GuildItem>
                    <a href="">
                      <i className="iconfont">&#xe6b5;</i>
                      怪异仙人掌
                    </a>
                  </GuildItem>
                  <GuildItem>
                    <a href="">
                      <i className="iconfont">&#xe664;</i>
                      信誓旦旦
                    </a>
                  </GuildItem>
                  <GuildItem>
                    <a href="">
                      <i className="iconfont">&#xe964;</i>
                      德国茶mytea
                    </a>
                  </GuildItem>
                </div>
              </GuildSection>
              <GuildSection>
                <h3>
                  <div id="guide-section-title">
                    <a href="">更多YOUTUBE产品与功能</a>
                  </div>
                </h3>
                <div id="items">
                  <GuildItem>
                    <a href="">
                      <i className="iconfont">&#xe8d0;</i>
                      直播
                    </a>
                  </GuildItem>
                </div>
              </GuildSection>
              <GuildSection>
                <h3>
                  <div id="guide-section-title" className="none-title">
                    {/*<a href=""></a>*/}
                  </div>
                </h3>
                <div id="items">
                  <GuildItem>
                    <a href="">
                      <i className="iconfont">&#xecf9;</i>
                      设置
                    </a>
                  </GuildItem>
                  <GuildItem>
                    <a href="">
                      <i className="iconfont">&#xe73e;</i>
                      举报记录
                    </a>
                  </GuildItem>
                  <GuildItem>
                    <a href="">
                      <i className="iconfont">&#xe765;</i>
                      帮助
                    </a>
                  </GuildItem>
                  <GuildItem>
                    <a href="">
                      <i className="iconfont">&#xeb3a;</i>
                      发送反馈
                    </a>
                  </GuildItem>
                </div>
              </GuildSection>
            </div>
            <div id="footer"></div>
          </GuildContent>
        </div>
      </LeftGuildContainer>
    )
  }
}

export default LeftGuild
