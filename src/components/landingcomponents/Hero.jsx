
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
    <div className='relative'>
        {/* image */}
        <div className="w-full h-[90vh] overflow-hidden flex items-center">
            <img src="/Heroimage.jpg" alt="Wanderwise Hero section"
             className="w-full "/>
        </div>
        {/* overlay */}
        <div className="w-full h-[90vh] bg-black absolute top-0 opacity-45"> 

        </div>
           {/* content */}
        <div className='absolute top-0 w-full h-[90vh] flex items-center justify-center '>
          <div className='w-full md:2/3 lg:w-1/2 mx auto text-center'>
        <h1 className='text-3xl lg:text-5xl font-bold text-white'>Plan your trip with wander wise</h1>
        <p className="text-white mt-4 text-xl leading-5 lg:leading-8"> Wanderwise is a travel planning app that helps you plan your trips with ease. Invite your friends, create itineraries, and share your travel plans with others. Start planning your next adventure today!</p>
        
       <CustomButton text="Get Started"/>
       <CustomButton text="Learn More"/>
        </div>
    </div>
    </div>
  )
}

export default Hero