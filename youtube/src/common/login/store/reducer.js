import { fromJS } from 'immutable'
import * as actionTypes from "./actionTypes"

const defaultState = fromJS({
  isLogin: false,
  falseTimes: 0,
  userName: '',
  passwd: ''
})


export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.merge({
        isLogin: true,
        userName: action.userName,
        passwd: action.passwd
      })
    case actionTypes.LOGIN_FALSE:
      return state.set('falseTimes', action.falseTimes)
    case actionTypes.KEEP_IS_LOGIN:
      return state.set('isLogin', action.isLogin)
    default:
      return state
  }
}
