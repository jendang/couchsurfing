import { combineReducers } from 'redux'
import users from './users'


import reducerRandomHost from './reducerRandomHost'
import reducerRandomSurfer from './reducerRandomSurfer'
import reducerLogIn from './reducerLogIn'


export default combineReducers({
  users,
  reducerRandomHost,
  reducerRandomSurfer,
  reducerLogIn


})