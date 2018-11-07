const hosts= [
    
    {
    id: 5,
    username: "MiMi",
    lastname: "Host",
    age: 28,
    gender: "female",
    password: "1234567890",
    email: "mimi@gmail.com",
    isSurfer: false, //host
    matchedId: []
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
    matchedId: []
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
    matchedId: []
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
    matchedId: []
    }
]

const initialState = hosts[Math.floor(Math.random()* Math.floor(hosts.length))]


 export default (state = initialState, action = {}) => {
     
    switch (action.type) {
        

        default:       
            return state
    }
  }
  
  //export default randomHosts