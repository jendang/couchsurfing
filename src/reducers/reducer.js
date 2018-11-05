const initialState= [
    {
    id: 1,
    username: "Kyle Gracia",
    age: 27,
    gender: "male",
    password: "supercomplexpassword",
    email: "kylepgracia@gmail.com",
    status: true
    },
    {
    id: 2,
    username: "Sabina Dhaugoda",
    age: 18,
    gender: "female",
    password: "ggpush",
    email: "sabinadhaugoda@gmail.com",
    status: true
    },
    {
    id: 3,
    username: "Jenny Dang",
    age: 98,
    gender: "female",
    password: "1234567890",
    email: "jenny.dang117@gmail.com",
    status: true
    },
    {
    id: 4,
    username: "Roel Mast",
    age: 28,
    gender: "male",
    password: "1234567890",
    email: "Roel.Mast90@gmail.com",
    status: true
    }
]

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    default:
      return state
    }
  }
  
export default reducer