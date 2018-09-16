import { fromJS } from 'immutable'
import * as actionTypes from './createTypes'


const defaultState = fromJS({

})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state

  }
}
