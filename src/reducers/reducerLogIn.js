import {LOG_IN} from '../actions/actionLogIn'

const logIn = (state = [], action = {}) => {
    switch (action.type) {
      case LOG_IN:
        
          return [
            ...state,
            action.payload
          ]
      
    default:
      return state
    }
  }
  
export default logIn