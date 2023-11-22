import axiosSecure from "."


export const saveUser = async user=>{
    const currentUser ={
        email: user.email,
        role: 'guest',
        status: 'verified',
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data;
}

// get token from the server
export const getToken = async email =>{
    const {data} = await axiosSecure.post('/jwt', email)
    console.log('token recieved from the server', data)
    return data
}


//clear token from browser
export const clearCookiie = async() =>{
    const {data} = await axiosSecure.get('/logOut')
    
    return data
}

// Get user role
export const getRole = async email => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data.role
  }