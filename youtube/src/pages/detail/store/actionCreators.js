import * as actionTypes from './createTypes'
import axios from 'axios'
// import { fromJS } from 'immutable'

// const changeList = (data) => ({
// //   type: actionTypes.CHANGE_LIST,
// //   data: fromJS(data),
// //   totalPage: Math.ceil(data.length / 10)
// // })

const getVideoDetail = (VideoDetail) => ({
  type: actionTypes.GET_VIDEO_DETAIL,
  VideoDetail
})

export const getVideoInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/videos.json?id=' + id)
      .then((res) => {
        const result = res.data.data[id-1]
        dispatch(getVideoDetail(result))
      })
  }

}

