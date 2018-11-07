import { combineReducers } from 'redux'
import users from './users'
// import reducer2 from './reducers'
import reducerGetHost from './reducerGetHost'
import reducerLogIn from './reducerLogIn'

export default combineReducers({
  users,
  reducerGetHost,
  reducerLogIn

})