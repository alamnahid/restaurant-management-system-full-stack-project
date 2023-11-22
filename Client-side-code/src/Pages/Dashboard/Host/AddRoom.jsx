import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";
import { useNavigate } from "react-router-dom";
import { addRoom } from "../../../api/room";
import { toast } from "react-hot-toast";


const AddRoom = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const { user } = useAuth()
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const form = e.target
        const location = form.location.value
        const category = form.category.value
        const title = form.title.value
        const to = dates.endDate
        const from = dates.startDate
        const price = form.price.value
        const guests = form.total_guest.value
        const bathrooms = form.bathrooms.value
        const description = form.description.value
        const bedrooms = form.bedrooms.value
        const image = form.image.files[0]
        
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          }
          const image_url = await imageUpload(image)
      
          const roomData = {
            location,
            category,
            title,
            to,
            from,
            price,
            guests,
            bathrooms,
            bedrooms,
            host,
            description,
            image: image_url?.data?.display_url,
          }


          try{
            setLoading(true)
            const data = await addRoom(roomData)
            console.log(data)
            setUploadButtonText('Uploaded!')
            toast.success('Room Added')
          
            navigate('/dashboard/my-listings')

          }catch(err){
            console.log(err)
            toast.error(err.message)
          } finally{
            setLoading(false)
          }
         

          console.table(roomData)
    }

    const handleDates = ranges => {
        console.log(ranges)
        setDates(ranges.selection)
    }
    const handleImageChange = image => {
        setUploadButtonText(image.name)
      }


    return (
        <div>
            <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} handleImageChange={handleImageChange} loading={loading} uploadButtonText={uploadButtonText}/>

        </div>
    );
};

export default AddRoom;