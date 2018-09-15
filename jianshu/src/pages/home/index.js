import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
import SwiperBox from '../../common/swiper'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Qrbox from './components/Qrbox'
import Writer from './components/Writer'
import { actionCreators } from './store'

class Home extends PureComponent {

  render () {
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <SwiperBox></SwiperBox>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Qrbox></Qrbox>
            <Writer></Writer>
          </HomeRight>
          {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>TOP</BackTop> : null}
        </HomeWrapper>
      </Fragment>
    )
  }

  handleScrollTop () {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) =>({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop >= 100) {
      dispatch(actionCreators.toggleReturnTop(true))
    } else {
      dispatch(actionCreators.toggleReturnTop(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
