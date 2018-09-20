import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as methods from '../../common/methods'
import {
  HomeWrapper,
  SectionList,
  HomeVideoSection,
  VideoRenderer
} from './style'
class Home extends Component {
  render() {
    const { videoList } = this.props
    return (
      <HomeWrapper>
        <SectionList>
          <HomeVideoSection>
          <div className="grid-subheader">
            <div className="title-container">
              <span id="title">推荐视频</span>
            </div>
          </div>
          <div className="contents">
            <div className="items">
              {
                videoList.map((item) => {
                  return (
                    <VideoRenderer key={item.get('id')}>
                      <div className="thumbnail">
                        <a id="thumbnail" href="">
                          <div className="thumbnail-default">
                            <img src={item.get('tnDefaultUrl')} alt=""/>
                          </div>
                          <div className="thumbnail-time">
                            <span>
                              {item.get('tnDuration')}
                            </span>
                          </div>
                          <div className="thumbnail-hover">
                            <img src={item.get('tnHoverUrl')} alt=""/>
                          </div>
                        </a>
                      </div>
                      <div className="detail">
                        <div className="meta">
                          <h3>
                            <a id="video-title" href="">{item.get('videoTitle')}</a>
                          </h3>
                          <div className="metadata">
                            <div id="by-meta">
                              <div className="uploadman">
                                <a href="">{item.get('uploadman')}</a>
                              </div>
                            </div>
                            <div id="date-meta">
                              <span className="click-count" >{item.get('clickCount')}</span>
                              <span>{item.get('pubtime')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </VideoRenderer>
                  )
                })
              }
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/uyFOhoIWt78/mqdefault_6s.webp?du=3000&sqp=CP3agt0F&rs=AOn4CLCeHtbPdGCR15nUcmpO_mpZ_mffnA" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/uyFOhoIWt78/mqdefault_6s.webp?du=3000&sqp=CP3agt0F&rs=AOn4CLCeHtbPdGCR15nUcmpO_mpZ_mffnA" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/uyFOhoIWt78/mqdefault_6s.webp?du=3000&sqp=CP3agt0F&rs=AOn4CLCeHtbPdGCR15nUcmpO_mpZ_mffnA" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/uyFOhoIWt78/mqdefault_6s.webp?du=3000&sqp=CP3agt0F&rs=AOn4CLCeHtbPdGCR15nUcmpO_mpZ_mffnA" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/uyFOhoIWt78/mqdefault_6s.webp?du=3000&sqp=CP3agt0F&rs=AOn4CLCeHtbPdGCR15nUcmpO_mpZ_mffnA" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/uyFOhoIWt78/mqdefault_6s.webp?du=3000&sqp=CP3agt0F&rs=AOn4CLCeHtbPdGCR15nUcmpO_mpZ_mffnA" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/-JmA5_gHrrM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAMCSM8e0oTuxr-04XZy08h1vpBvw" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/-JmA5_gHrrM/mqdefault_6s.webp?du=3000&sqp=CKOngt0F&rs=AOn4CLBGRNOVSz8QNmWrYCaEl23RHtG9sw" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/-JmA5_gHrrM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAMCSM8e0oTuxr-04XZy08h1vpBvw" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/-JmA5_gHrrM/mqdefault_6s.webp?du=3000&sqp=CKOngt0F&rs=AOn4CLBGRNOVSz8QNmWrYCaEl23RHtG9sw" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/-JmA5_gHrrM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAMCSM8e0oTuxr-04XZy08h1vpBvw" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/-JmA5_gHrrM/mqdefault_6s.webp?du=3000&sqp=CKOngt0F&rs=AOn4CLBGRNOVSz8QNmWrYCaEl23RHtG9sw" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/-JmA5_gHrrM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAMCSM8e0oTuxr-04XZy08h1vpBvw" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/-JmA5_gHrrM/mqdefault_6s.webp?du=3000&sqp=CKOngt0F&rs=AOn4CLBGRNOVSz8QNmWrYCaEl23RHtG9sw" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/-JmA5_gHrrM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAMCSM8e0oTuxr-04XZy08h1vpBvw" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/-JmA5_gHrrM/mqdefault_6s.webp?du=3000&sqp=CKOngt0F&rs=AOn4CLBGRNOVSz8QNmWrYCaEl23RHtG9sw" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
              <VideoRenderer>
                <div className="thumbnail">
                  <a id="thumbnail" href="">
                    <div className="thumbnail-default">
                      <img src="https://i.ytimg.com/vi/-JmA5_gHrrM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAMCSM8e0oTuxr-04XZy08h1vpBvw" alt=""/>
                    </div>
                    <div className="thumbnail-time">
                      <span>
                        22:56
                      </span>
                    </div>
                    <div className="thumbnail-hover">
                      <img src="https://i.ytimg.com/an_webp/-JmA5_gHrrM/mqdefault_6s.webp?du=3000&sqp=CKOngt0F&rs=AOn4CLBGRNOVSz8QNmWrYCaEl23RHtG9sw" alt=""/>
                    </div>
                  </a>
                </div>
                <div className="detail">
                  <div className="meta">
                    <h3>
                      <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                    </h3>
                    <div className="metadata">
                      <div id="by-meta">
                        <div className="uploadman">
                          <a href="">Kat & Sid</a>
                        </div>
                      </div>
                      <div id="date-meta">
                        <span className="click-count" >2.2万次观看</span>
                        <span>2 天前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </VideoRenderer>
            </div>
            <div className="paper-button">
              <span>展开</span>
            </div>
          </div>
        </HomeVideoSection>
          <HomeVideoSection>
            <div className="grad-subheader">
              <div className="title-container">
                <span id="title">订阅频道的最新视频</span>
              </div>
            </div>
            <div className="contents">
              <div className="items">
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
              </div>
              <div className="paper-button">
                <span>展开</span>
              </div>
            </div>
          </HomeVideoSection>
          <HomeVideoSection>
            <div className="grad-subheader">
              <div className="title-container">
                <span id="title">因为您观看过类似的视频</span>
              </div>
            </div>
            <div className="contents">
              <div className="items">
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
              </div>
              <div className="paper-button">
                <span>展开</span>
              </div>
            </div>
          </HomeVideoSection>
          <HomeVideoSection>
            <div className="grad-subheader">
              <div className="title-container">
                <span id="title">继续观看</span>
              </div>
            </div>
            <div className="contents">
              <div className="items">
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
                <VideoRenderer>
                  <div className="thumbnail">
                    <a id="thumbnail" href="">
                      <div className="thumbnail-default">
                        <img src="https://i.ytimg.com/vi/IaHVtFhdoCE/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAh-eTuMl-zswtPUqMVEKjfulmt4w" alt=""/>
                      </div>
                      <div className="thumbnail-hover">
                        <img src="" alt=""/>
                      </div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="meta">
                      <h3>
                        <a id="video-title" href="">一个美国人在不看歌词的情况下真的能听懂rap吗？</a>
                      </h3>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">Kat & Sid</a>
                          </div>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >2.2万次观看</span>
                          <span>2 天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VideoRenderer>
              </div>
              <div className="paper-button">
                <span>展开</span>
              </div>
            </div>
          </HomeVideoSection>
        </SectionList>
      </HomeWrapper>
    )
  }

  componentDidUpdate () {
    methods.toGifBindEvent()
  }
}

const mapState = (state) => {
  return {
    videoList: state.getIn(['home','videoList'])
  }
}



export default connect(mapState, null)(Home)
