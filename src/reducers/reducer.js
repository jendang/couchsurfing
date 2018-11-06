const initialState= [
    {
    id: 1,
    username: "Kyle",
    lastname: "Gracia",
    age: 27,
    gender: "male",
    password: "supercomplexpassword",
    email: "kylepgracia@gmail.com",
    status: true
    },
    {
    id: 2,
    username: "Sabina",
    lastname: "Dhaugoda",
    age: 18,
    gender: "female",
    password: "ggpush",
    email: "sabinadhaugoda@gmail.com",
    status: true //surfer
    },
    {
    id: 3,
    username: "Jenny",
    lastname:"Dang",
    age: 98,
    gender: "female",
    password: "1234567890",
    email: "jenny.dang117@gmail.com",
    status: true //surfer
    },
    {
    id: 4,
    username: "Roel",
    lastname:"Mast",
    age: 28,
    gender: "male",
    password: "1234567890",
    email: "Roel.Mast90@gmail.com",
    status: true //surfer
    },
    {
    id: 5,
    username: "MiMi",
    lastname: "Host",
    age: 28,
    gender: "female",
    password: "1234567890",
    email: "mimi@gmail.com",
    status: false //host
    },
    {
    id: 6,
    username: "Arien",
    lastname: "Kock",
    age: 28,
    gender: "male",
    password: "1234567890",
    email: "arien@gmail.com",
    status: false //host
    }
]

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_HOSTS':
          return [
            ...state,
            action.payload
          ]
     
      
    default:
      return state
    }
  }
  
export default reducer