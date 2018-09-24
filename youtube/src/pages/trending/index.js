import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  IconButton,
} from '../../style'
import {
  TrendingWrapper,
} from './style'
import { actionCreators } from './store'
import * as methods from "../../common/methods";
class Trending extends Component {
  render() {
    return (
      <TrendingWrapper>
        <div className="trending-list">
          {
            this.props.trVideoList.map((item) => {
              return (
                <div className="trending-item" key={item.get('id')}>
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
                  <div className="trending-text-wrapper">
                    <div className="meta">
                      <div className="title-wrapper">
                        <h3>
                          <div className="supported">
                            <span>Worth It  第 5 季 • 第 2 集</span>
                          </div>
                          <a className="video-title" href="">
                            {item.get('videoTitle')}
                          </a>
                        </h3>
                        <div className="menu">
                          <IconButton>
                            <button id="button">
                              <i className="iconfont">&#xe680;</i>
                            </button>
                          </IconButton>
                        </div>
                      </div>
                      <div className="metadata">
                        <div id="by-meta">
                          <div className="uploadman">
                            <a href="">{item.get('uploadman')}</a>
                          </div>
                        </div>
                        <div className="badge">
                          <i className="iconfont">&#xe61b;</i>
                        </div>
                        <div id="date-meta">
                          <span className="click-count" >{item.get('clickCount')}</span>
                          <span>{item.get('pubtime')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="description">
                      {item.get('description')}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </TrendingWrapper>
    )
  }
  componentDidMount () {
    this.props.changeTrendingData()
  }
  componentDidUpdate () {
    methods.topBtnBindMouseDownEvent()
    methods.toGifBindEvent()
  }

}

const mapState = (state) => ({
  trVideoList: state.getIn(['trending', 'trVideoList'])
})

const mapDispatch = (dispatch) => ({
  changeTrendingData() {
    dispatch(actionCreators.getTrendingInfo())
  }
})

export default connect(mapState, mapDispatch)(Trending)
