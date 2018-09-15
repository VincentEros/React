import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  DetailWrapper
} from './style'
import { actionCreators } from './store'

class Detail extends Component {
  render () {
    const { article } = this.props
    return (
      <Fragment>
        <DetailWrapper>
          <div className="article">
            <h1 className="title">
              {article['header']['title']}
            </h1>
            <div className="author">
              <a href="" className="avator">
                <img src={article['header']['avatorUrl']} alt=""/>
              </a>
              <div className="info">
                <span className="name">
                  <a href={article['header']['userUrl']}>{article['header']['userName']}</a>
                </span>
                <a href="" className="follow">
                  <i className="iconfont">+</i>
                  <span>关注</span>
                </a>
                <div className="meta">
                  <span className="publish-time">{article['header']['meta']['time']}</span>
                  <span className="wordage">字数 {article['header']['meta']['word']}</span>
                  <span className="views-count">阅读 {article['header']['meta']['view']}</span>
                  <span className="comments-count">评论 {article['header']['meta']['comment']}</span>
                  <span className="likes-count">喜欢 {article['header']['meta']['likes']}</span>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="image-package">
                <div className="image-container">
                  <div className="image-container-fill"></div>
                  <div className="image-view">
                    <img src={article['content']['imgUrl']} alt=""/>
                  </div>
                </div>
              </div>
              {
                article['content']['pList'].map((item, index) => {
                  return (
                    <p key={index}>{item}</p>
                  )
                })
              }
            </div>
          </div>
        </DetailWrapper>
      </Fragment>
    )
  }
  componentDidMount () {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  article: state.get('detail').article
})

const mapDispatch = (dispatch) => ({
  getDetail (id) {
    dispatch(actionCreators.getDetailInfo(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))
