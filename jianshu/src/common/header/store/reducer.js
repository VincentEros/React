import * as actionTypes from './createTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FOCUS: return state.set('focused', true)
    case actionTypes.BLUR:  return state.set('focused', false)
    case actionTypes.MOUSE_ENTER:  return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:  return state.set('mouseIn', false)
    case actionTypes.CHANGE_LIST:  return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
    case actionTypes.LIST_SWITCH: return state.set('page', action.nextPage)
    default:  return state
  }
}
