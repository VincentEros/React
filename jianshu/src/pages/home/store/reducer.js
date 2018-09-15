import { fromJS } from 'immutable'
import * as actionTypes from "./actionTypes"

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  boardList: [],
  authorList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    boardList: fromJS(action.boardList),
    authorList: fromJS(action.authorList)
  })
}

const addHomeData = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case actionTypes.ADD_HOME_DATA:
      return addHomeData(state, action)
    case actionTypes.TOGGLE_TOP_BLOCK:
      return state.merge({
        showScroll: action.show
      })
    default:
      return state
  }
}
