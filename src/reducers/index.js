import { combineReducers } from 'redux'
import users from './users'
import reducerGetHost from './reducerGetHost'
import reducerRandomHost from './reducerRandomHost'

export default combineReducers({
  users,
  reducerGetHost,
  reducerRandomHost

})