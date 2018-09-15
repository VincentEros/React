import axios from "axios";
import * as actionTypes from './actionTypes'

const changeDetail = (article) => ({
  type: actionTypes.GET_DETAIL_INFO,
  article
})

export const getDetailInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id)
      .then((res) => {
        const result = res.data.data
        dispatch(changeDetail(result.article))
      })
  }
}
