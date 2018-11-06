export  const GET_HOSTS = 'GET_HOSTS'


export function getHosts (user) {
    
        return {
            type: GET_HOSTS,
            payload:{
                id: user.id,
                username: user.username,
                lastname: user.lastname,
                age: user.age,
                gender: user.gender
             
            }

        }
    

}
