import { fromJS } from 'immutable'
import * as actionTypes from './createTypes'


const defaultState = fromJS({
  resultList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_RESULT:
      return state.merge({
        resultList: fromJS(action.resultList)
      })
    default:
      return state

  }
}
