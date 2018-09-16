import { fromJS } from 'immutable'
import * as actionTypes from './createTypes'


const defaultState = fromJS({
  mouseDown: false,
  leftGuildShow: false,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LEFT_GUILD_TOGGLE:
      return state.set('leftGuildShow', action.show)
    default:
      return state

  }
}
