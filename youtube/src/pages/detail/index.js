import React, {Component} from 'react'
import YouTube from 'react-youtube'
import { connect } from 'react-redux'
import {
  DetailWrapper,
  VideoPrimaryInfoRenderer,
  MenuRenderer,
  ToggleButtonRenderer,
  ButtonRenderer,
  VideoIconButton,
  ButtonText
} from './style'
import { actionCreators } from './store'
import * as methods from "../../common/methods";
class Detail extends Component {

  render() {
    const opts = {
      height: '703',
      width: '1250',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    const { VideoDetail } = this.props
    console.log(VideoDetail.get('author'))
    return (
      <DetailWrapper>
        <div id="primary">
          <div id="primary-inner">
            <div id="player">
              <YouTube
                videoId={VideoDetail.get('videoId')}
                opts={opts}
                onReady={this._onReady}
                // videoId={string}                  // defaults -> null
                // id={string}                       // defaults -> null
                // className={string}                // defaults -> null
                // containerClassName={string}       // defaults -> ''
                // opts={obj}                        // defaults -> {}
                // onReady={func}                    // defaults -> noop
                // onPlay={func}                     // defaults -> noop
                // onPause={func}                    // defaults -> noop
                // onEnd={func}                      // defaults -> noop
                // onError={func}                    // defaults -> noop
                // onStateChange={func}              // defaults -> noop
                // onPlaybackRateChange={func}       // defaults -> noop
                // onPlaybackQualityChange={func}    // defaults -> noop
              />
            </div>
            <div id="info">
              <div id="info-contents">
                <VideoPrimaryInfoRenderer>
                  <div id="container">
                    <h1>
                      <div>{VideoDetail.get('videoTitle')}</div>
                    </h1>
                    <div id="info">
                      <div id="info-text">
                        <div id="count">
                          <span>{VideoDetail.get('viewCount')}</span>
                        </div>
                      </div>
                      <div id="flex"></div>
                      <div id="menu-container">
                        <div id="menu">
                          <MenuRenderer>
                            <div id="top-level-buttons">
                              <ToggleButtonRenderer>
                                <a>
                                  <VideoIconButton>
                                    <i className="iconfont">&#xe62d;</i>
                                  </VideoIconButton>
                                  <ButtonText>{VideoDetail.get('like')}</ButtonText>
                                </a>
                              </ToggleButtonRenderer>
                              <ToggleButtonRenderer>
                                <a>
                                  <VideoIconButton>
                                    <i className="iconfont">&#xe62f;</i>
                                  </VideoIconButton>
                                  <ButtonText>{VideoDetail.get('dislike')}</ButtonText>
                                </a>
                              </ToggleButtonRenderer>
                              <ButtonRenderer>
                                <a>
                                  <VideoIconButton>
                                    <i className="iconfont">&#xe61b;</i>
                                  </VideoIconButton>
                                  <ButtonText>分享</ButtonText>
                                </a>
                              </ButtonRenderer>
                              <ButtonRenderer>
                                <a>
                                  <VideoIconButton>
                                    <i className="iconfont">&#xe620;</i>
                                  </VideoIconButton>
                                </a>
                              </ButtonRenderer>
                            </div>
                            <VideoIconButton>
                              <button id="button">
                                <i className="iconfont">&#xe7af;</i>
                              </button>
                            </VideoIconButton>
                          </MenuRenderer>
                        </div>
                        <div id="sentiment"></div>
                      </div>
                    </div>
                  </div>
                </VideoPrimaryInfoRenderer>
              </div>
            </div>
            <div id="meta"></div>
            <div id="comments"></div>
          </div>
        </div>
        <div id="secondary">
          推荐部分
        </div>
      </DetailWrapper>
    )
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  componentDidMount () {
    this.props.getVideo(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  VideoDetail: state.getIn(['detail', 'VideoDetail'])
})
//
const mapDispatch = (dispatch) => ({
  getVideo(id) {
    dispatch(actionCreators.getVideoInfo(id))
  }
})

export default connect(mapState, mapDispatch)(Detail)
