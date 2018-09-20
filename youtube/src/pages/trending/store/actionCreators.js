import * as actionTypes from './createTypes'
import axios from 'axios'
// import { fromJS } from 'immutable'

// const changeList = (data) => ({
// //   type: actionTypes.CHANGE_LIST,
// //   data: fromJS(data),
// //   totalPage: Math.ceil(data.length / 10)
// // })

const changeTrendingData = (result) => ({
  type: actionTypes.CHANGE_TR_DATA,
  trVideoList: result.trVideoList
})

export const getTrendingInfo = () => {
  return (dispatch) => {
    axios.get('/api/trending.json')
      .then((res) => {
        const result = res.data.data
        dispatch(changeTrendingData(result))
      })
  }

}

