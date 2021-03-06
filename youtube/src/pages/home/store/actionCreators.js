import * as actionTypes from './createTypes'
import axios from 'axios'
// import { fromJS } from 'immutable'

// const changeList = (data) => ({
// //   type: actionTypes.CHANGE_LIST,
// //   data: fromJS(data),
// //   totalPage: Math.ceil(data.length / 10)
// // })

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  videoList: result.videoList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then((res) => {
        const result = res.data.data
        dispatch(changeHomeData(result))
      })
  }

}

