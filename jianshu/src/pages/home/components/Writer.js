import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {RecAuthor} from '../style'


class Writer extends PureComponent {
  render() {
    const { list } = this.props

    return (
      <RecAuthor className="recommended-authors">
        <div className="title">
          <span>推荐作者</span>
          <a className="page-change" href="">
            <i className="iconfont">&#xe62e;</i>
            换一批
          </a>
        </div>
        <ul className="list">
          {
            list.map((item) => {
              return (
                <li key={item.get('id')}>
                  <a className="avatar" href="">
                    <img src={item.get('imgUrl')} alt=""/>
                  </a>
                  <a className="follow" href="">
                    <i className="iconfont">+</i>
                    关注
                  </a>
                  <a className="name" href={item.get('userUrl')}>
                    {item.get('name')}
                  </a>
                  <p>
                    写了{item.get('wordNum')}字 · {item.get('likes')}喜欢
                  </p>
                </li>
              )
            })
          }
        </ul>
        <a href="" className="find-more">
          查看全部
          <i className="iconfont">></i>
        </a>
      </RecAuthor>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'authorList'])
  }
}

export default connect(mapStateToProps, null)(Writer)

