import { combineReducers } from 'redux-immutable'
import { reducer as guildReducer } from '../common/guild/store'
import { reducer as searchReducer } from '../common/search/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as trendingReducer } from '../pages/trending/store'

// import { reducer as loginReducer } from '../pages/login/store'

const reducer = combineReducers({
  guild: guildReducer,
  search: searchReducer,
  home: homeReducer,
  trending: trendingReducer,
  // detail: detailReducer,
  // login: loginReducer
})

export default reducer
