const initialState= [
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
    },
    {
    id: 5,
    username: "MiMi",
    lastname: "Host",
    age: 28,
    gender: "female",
    password: "1234567890",
    email: "mimi@gmail.com",
    isSurfer: false, //host
    matchedId: [],
    messages: []
    },
    {
    id: 6,
    username: "Arien",
    lastname: "Kock",
    age: 28,
    gender: "male",
    password: "1234567890",
    email: "arien@gmail.com",
    isSurfer: false, //host
    matchedId: [],
    messages: []
    }
]


let currentUser = initialState[0]
let currentMatch = initialState[1]

const submitYes = (currentUser, currentMatch) => {
    return currentUser.matchedId.push(currentMatch.id)
}

// console.log(submitYes(initialState[0], initialState[1]))
// console.log(initialState[0])



function createMessage () {
    if ((currentUser.matchedId = [currentMatch.id]) && (currentMatch.matchedId = [currentUser.id])) {
            return currentUser.messages.push("You have matched with " + currentMatch.username);
        }
    }
createMessage();

console.log(initialState[0])
console.log(currentUser)

    

