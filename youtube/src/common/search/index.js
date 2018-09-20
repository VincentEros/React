import React, {Component} from 'react'
import {
  SearchWrapper,
  VideoMenuButton
} from './style'
import { connect } from "react-redux"
import { actionCreators } from "./store";
import * as methods from "../methods";
class Search extends Component {
  render() {
    return (
      <SearchWrapper>
        <div className="trending-list">
          {
            this.props.resultList.map((item) => {
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
                          <VideoMenuButton>
                            <button id="button">
                              <i className="iconfont">&#xe680;</i>
                            </button>
                          </VideoMenuButton>
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
      </SearchWrapper>
    )
  }
  componentDidMount () {
    this.props.changeResultgData()
  }
  componentDidUpdate () {
    methods.toGifBindEvent()
  }
}
// 第一步  发送给后台 要搜索的value 后台开辟一块带有参数key 的存储空间  第二步后台处理数据 在该空间注入数据 返回这个key第三步  前端key取
const mapState = (state) => {
  return {
    resultList: state.getIn(['search','resultList'])
  }
}

// 因为location载入后 搜索框里获得的数据被清除了  所以 不调用下面这个方法伪装成搜索框获取的数据的话  state resultList里是没有存我们的搜索结果的
const mapDispatch = (dispatch) => ({
  changeResultgData() {
    dispatch(actionCreators.getSearchInfo())
  }
})


export default connect(mapState, mapDispatch)(Search)
