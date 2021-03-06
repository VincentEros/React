import { fromJS } from 'immutable'
import * as actionTypes from './createTypes'


const defaultState = fromJS({
  videoList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        videoList: fromJS(action.videoList)
      })
    default:
      return state

  }
}
