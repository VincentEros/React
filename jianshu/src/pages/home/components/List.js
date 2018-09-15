import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {ListItem, LoadMore} from '../style'
import { actionCreators } from '../store'
import {Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, page, getMore } = this.props

    return (
      <div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <ListItem key={index}>
                  <a className="wrap-img" href="">
                    <img src={item.get('imgUrl')} alt=""/>
                  </a>
                  <div className="content">
                    <Link className="title" to={"/detail/" + item.get('id')}>{item.get('title')}</Link>
                    <p className="abstract">
                      {item.get('abstract')}
                    </p>
                    <div className="meta">
                      <a className="nickname" href="">{item.get('nickname')}</a>
                      <a className="iconfont" href="">私信{item.get('msg')}</a>
                      <span>
                        <i className="iconfont"></i>
                        likes{item.get('likes')}
                      </span>
                    </div>
                  </div>
                </ListItem>
              )
            })
          }
        </ul>
        <LoadMore onClick={() => getMore(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMore (page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
