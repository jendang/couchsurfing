import {GET_HOSTS} from '../actions/actionGetHosts'

const initialState= [
    
    {
    id: 5,
    username: "MiMi",
    lastname: "Host",
    age: 28,
    gender: "female",
    password: "1234567890",
    email: "mimi@gmail.com",
    isSurfer: false, //host
    matchedId: [1],
    messages: ["You have been matched with this host"],
    image: ['mimi.png']
    },
    {
    id: 6,
    username: "Lisa",
    lastname: "Host",
    age: 28,
    gender: "female",
    password: "1234567890",
    email: "mimi@gmail.com",
    isSurfer: false, //host
    matchedId: [],
    image: ['lisa.png']
    },

    {
    id: 7,
    username: "Arien",
    lastname: "Kock",
    age: 28,
    gender: "male",
    password: "1234567890",
    email: "arien@gmail.com",
    isSurfer: false, //host
    matchedId: [],
    image: ['arien.png']
    },
    {
    id: 8,
    username: "Milan",
    lastname: "BovenKamp",
    age: 28,
    gender: "male",
    password: "1234567890",
    email: "arien@gmail.com",
    isSurfer: false, //host
    matchedId: [],
    image: ['milan.png']
    }
]

//const initialState = hosts[Math.floor(Math.random()* Math.floor(hosts.length))]


export default (state = initialState, action = {}) => {
    
    switch (action.type) {
        case GET_HOSTS:
        const hosts = initialState[Math.floor(Math.random()* Math.floor(initialState.length))]
            return hosts
        default:       
            return state
    }
  }
  //export default randomHosts