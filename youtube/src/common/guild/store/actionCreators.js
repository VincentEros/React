import * as actionTypes from './actionTypes'
// import axios from 'axios'
// import { fromJS } from 'immutable'

// const changeList = (data) => ({
//   type: actionTypes.CHANGE_LIST,
//   data: fromJS(data),
//   totalPage: Math.ceil(data.length / 10)
// })

export const leftGuildToggle = (show) => ({
  type: actionTypes.LEFT_GUILD_TOGGLE,
  show
})


export const logout = () => ({
  type: actionTypes.CHANGE_LOGOUT,
})
