import axios from "axios";
import * as actionTypes from "./actionTypes"
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  boardList: result.boardList,
  authorList: result.authorList
})

const addHomeData = (list, nextPage) => ({
  type: actionTypes.ADD_HOME_DATA,
  list: fromJS(list),
  nextPage
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

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page)
      .then((res) => {
        const result = res.data.data
        // console.log(result)
        dispatch(addHomeData(result, page + 1))
      })
  }
}

export const toggleReturnTop = (show) => ({
  type: actionTypes.TOGGLE_TOP_BLOCK,
  show
})


