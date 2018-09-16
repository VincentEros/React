import { combineReducers } from 'redux-immutable'
import { reducer as guildReducer } from '../common/guild/store'
import { reducer as homeReducer } from '../pages/home/store'
// import { reducer as loginReducer } from '../pages/login/store'

const reducer = combineReducers({
  guild: guildReducer,
  home: homeReducer,
  // detail: detailReducer,
  // login: loginReducer
})

export default reducer
