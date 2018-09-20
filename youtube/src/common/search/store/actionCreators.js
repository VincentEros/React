import * as actionTypes from './createTypes'
import axios from 'axios'
// import { fromJS } from 'immutable'

// const changeList = (data) => ({
// //   type: actionTypes.CHANGE_LIST,
// //   data: fromJS(data),
// //   totalPage: Math.ceil(data.length / 10)
// // })

const changeSearchData = (result) => ({
  type: actionTypes.GET_SEARCH_RESULT,
  resultList: result.resultList
})

export const getSearchInfo = () => {
  return (dispatch) => {
    axios.get('/api/searchResult.json')
      .then((res) => {
        const result = res.data.data
        dispatch(changeSearchData(result))
      })
  }

}

