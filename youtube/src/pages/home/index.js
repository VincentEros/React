import React, {Component} from 'react'
import {
  HomeWrapper,
  SectionList,
  HomeVideoSection,
  VideoRenderer
} from './style'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <SectionList>
          <HomeVideoSection>
            <div className="grad-subheader">
              <div className="title-container">
                <span id="title">推荐视频</span>
              </div>
            </div>
            <div className="contents">
              <div className="items">
                <VideoRenderer>
                  <div className="thumbnail">
                    <img src="" alt=""/>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3></h3>
                      <div className="metadata"></div>
                    </div>
                  </div>
                </VideoRenderer>
              </div>
              <div className="paper-button">
                展开
              </div>
            </div>
          </HomeVideoSection>
        </SectionList>
      </HomeWrapper>
    )
  }
}

export default Home
