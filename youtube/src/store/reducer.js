import { combineReducers } from 'redux-immutable'
import { reducer as guildReducer } from '../common/guild/store'
import { reducer as searchReducer } from '../common/search/store'
import { reducer as loginReducer } from '../common/login/store'
import { reducer as signupReducer } from '../common/signup/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as trendingReducer } from '../pages/trending/store'


const reducer = combineReducers({
  guild: guildReducer,
  search: searchReducer,
  login: loginReducer,
  signup: signupReducer,
  home: homeReducer,
  trending: trendingReducer,
  detail: detailReducer,
})

export default reducer
