import { fromJS } from 'immutable'
import * as actionTypes from './createTypes'


const defaultState = fromJS({
  trVideoList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TR_DATA:
      return state.merge({
        trVideoList: fromJS(action.trVideoList)
      })
    default:
      return state

  }
}
