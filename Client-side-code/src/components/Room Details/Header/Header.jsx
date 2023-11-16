import Heading from "../../Shared/Heading";


const Header = ({roomData}) => {
    return (
        <div>
       <Heading title={roomData.title} subtitle={roomData.location} />
      <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
        <img
          className='object-cover w-full'
          src={roomData.image}
          alt='header image'
        />
      </div>
            
        </div>
    );
};

export default Header;