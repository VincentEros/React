import { fromJS } from 'immutable'
import * as actionTypes from './createTypes'


const defaultState = fromJS({
  VideoDetail: {}
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_VIDEO_DETAIL:
      return state.merge({
        VideoDetail: fromJS(action.VideoDetail)
      })
    default:
      return state

  }
}
