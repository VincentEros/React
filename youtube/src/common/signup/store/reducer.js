import { fromJS } from 'immutable'
import * as actionTypes from "./actionTypes"

const defaultState = fromJS({
  confirmDirty: false,
  autoCompleteResult: [],
})


export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CONFIRM_BLUR:
      return state.merge({
        confirmDirty: action.confirmDirty
      })
    case actionTypes.WEBSITE_CHANGE:
      return state.merge({
        autoCompleteResult: action.autoCompleteResult
      })
    default:
      return state
  }
}
