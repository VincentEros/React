import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {actionCreators} from './store'
import TopGuild from './components/MastheadContainer'
import LeftGuild from './components/LeftGuild'
import * as methods from '../../common/methods'



class Guild extends PureComponent {

  render() {
    const { doseLeftGuildShow, toggleLeftGuild } = this.props
    return (
      <div id="nav-container">
        <TopGuild
          doseLeftGuildShow={doseLeftGuildShow}
          toggleLeftGuild={toggleLeftGuild}
        />
        <LeftGuild
          doseLeftGuildShow={doseLeftGuildShow}
        />
      </div>
    )
  }

  componentDidMount () {
    methods.topBtnBindMouseDownEvent()
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
