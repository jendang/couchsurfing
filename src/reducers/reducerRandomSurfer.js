const surfers = [
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
        messages: []
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



const initialState = surfers[Math.floor(Math.random()* Math.floor(surfers.length))]


 export default (state = initialState, action = {}) => {
     
    switch (action.type) {
        

        default:       
            return state
    }
  }