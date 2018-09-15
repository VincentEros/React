// import { fromJS } from 'immutable'
import * as actionTypes from "./actionTypes"

const defaultState = {
  article: {
  id: null,
    header: {
    title: '',
      avatorUrl: '',
      userUrl: '',
      userName: '',
      meta: {
      time: '',
        word: '',
        view: '',
        comment: '',
        likes: ''
    }
  },
  content: {
    imgUrl: '',
      pList: []
  }
}
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL_INFO:
      const newState = JSON.parse(JSON.stringify(state))
      newState.article = action.article
      return newState
    default:
      return state
  }
}
