import { combineReducers } from 'redux'
import users from './users'
import reducerGetHost from './reducerGetHost'

import reducerRandomHost from './reducerRandomHost'
import reducerRandomSurfer from './reducerRandomSurfer'
import reducerLogIn from './reducerLogIn'


export default combineReducers({
  users,
  reducerGetHost,

  reducerRandomHost,

  reducerRandomSurfer,

  reducerLogIn


})