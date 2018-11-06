import {GET_HOSTS} from '../actions/actionGetHosts'

const getHost = (state = [], action = {}) => {
    switch (action.type) {
      case GET_HOSTS:
        
          return [
            ...state,
            action.payload
          ]
      
    default:
      return state
    }
  }
  
export default getHost