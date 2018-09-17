import React, {Component,Fragment} from 'react'
import { connect } from 'react-redux'
import {actionCreators} from './store'
import TopGuild from './components/MastheadContainer'
import LeftGuild from './components/LeftGuild'


class Guild extends Component {
  render() {
    const { doseLeftGuildShow, toggleLeftGuild } = this.props
    return (
      <div id="nav-container">
        <TopGuild
          doseLeftGuildShow={doseLeftGuildShow}
          toggleLeftGuild={toggleLeftGuild}
          topBtnBgToDeep={this.topBtnBgToDeep}
        />
        <LeftGuild
          doseLeftGuildShow={doseLeftGuildShow}
        />
      </div>
    )
  }

  topBtnBgToDeep (e) {
    let activeElem = e.target
    activeElem.parentElement.parentElement.classList.add('deep')
    activeElem.onmouseup = () => {
      activeElem.parentElement.parentElement.classList.remove('deep')
    }
  }

  topBtnBindMouseDownEvent = () => {
    let menuBtns = document.getElementsByClassName('change-bg')
    for (let i = 0; i < menuBtns.length; i++ ) {
      menuBtns[i].onmousedown = this.topBtnBgToDeep
    }
  }

  componentDidMount () {
    this.topBtnBindMouseDownEvent()
  }
}

const mapState = (state) => ({
  doseMouseDown: state.getIn(['guild', 'mouseDown']),
  doseLeftGuildShow: state.getIn(['guild', 'leftGuildShow'])
})

const mapDispatch = (dispatch) => {
  return {
    toggleLeftGuild (doseLeftGuildShow) {
      dispatch(actionCreators.leftGuildToggle(!doseLeftGuildShow))
    }
  }

}

export default connect(mapState, mapDispatch)(Guild)
