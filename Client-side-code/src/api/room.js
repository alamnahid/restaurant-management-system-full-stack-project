import axiosSecure from '.'
export const getAllRooms = async ()=>{
    const {data} = await axiosSecure('/rooms')
    return data
}

// fetch single rooom data from db

export const getRoom = async (id)=>{
    const {data} = await axiosSecure(`/rooms/${id}`)
    return data
}

// Save a room data in db
export const addRoom = async roomData => {
    const { data } = await axiosSecure.post(`/rooms`, roomData)
    return data
  }