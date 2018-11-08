import {GET_SURFERS} from '../actions/actionGetSurfers'

const initialState = [
    {
        id: 1,
        username: "Kyle",
        lastname: "Gracia",
        age: 27,
        gender: "male",
        password: "supercomplexpassword",
        email: "kylepgracia@gmail.com",
        isSurfer: true,
        matchedId: [],
        messages: [],
        image: '/images/Kyle.jpg'
        },
        {
        id: 2,
        username: "Sabina",
        lastname: "Dhaugoda",
        age: 18,
        gender: "female",
        password: "ggpush",
        email: "sabinadhaugoda@gmail.com",
        isSurfer: true, //surfer
        matchedId: [],
        messages: []
        },
        {
        id: 3,
        username: "Jenny",
        lastname:"Dang",
        age: 98,
        gender: "female",
        password: "1234567890",
        email: "jenny.dang117@gmail.com",
        isSurfer: true, //surfer
        matchedId: [],
        messages: []
        },
        {
        id: 4,
        username: "Roel",
        lastname:"Mast",
        age: 28,
        gender: "male",
        password: "1234567890",
        email: "Roel.Mast90@gmail.com",
        isSurfer: true, //surfer
        matchedId: [],
        messages: []
        }
]


export default (state = initialState, action = {}) => {
    
    switch (action.type) {
        case GET_SURFERS:
        const surfers = initialState[Math.floor(Math.random()* Math.floor(initialState.length))]
            return surfers
        default:       
            return state
    }
  }


