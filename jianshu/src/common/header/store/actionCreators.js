import * as actionTypes from './createTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

// const nextList = (page) => ({
//   type: actionTypes.LIST_SWITCH,
//   page: page % this.props.totalPage + 1
// })

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data
        dispatch(changeList(data.data))
      })
      .catch(() => {
        console.log('请求失败')
      })
  }
}

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const searchFocus = () => ({
  type: actionTypes.FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.BLUR
})

export const searchSwitch = (nextPage) => ({
  type: actionTypes.LIST_SWITCH,
  nextPage
})
