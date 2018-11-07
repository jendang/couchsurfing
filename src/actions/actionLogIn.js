export  const LOG_IN = 'LOG_IN'


export function logIn (user) {
    
        return {
            type: LOG_IN,
            payload:{
                username: user.username,
                password: user.password,
             
            }

        }
    

}
