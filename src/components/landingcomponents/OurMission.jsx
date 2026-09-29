import { Star } from 'lucide-react'
import React from 'react'

const OurMission = () => {
  return (
    <section className='bg-gray-500 text-white px-4 md:px-20 px-80 py-24'>
        {/* heading */}
        <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>

        {/* heading paragraph words */}


        <p className="text-xl italic text-center mb-20">Our mission is to provide travelers with the best possible experience by offering unique and memorable adventures, <br/>that allow them to explore the world with confidence and ease.</p>

         {/* content parent */}
        <div className="  grid grid-cols-3 gap-5 text-center">
            {/* content child */}
            <div className="border-r border-white">
                <p className="`text-2xl md:text-3xl lg:text-4xl` font-black">300+</p>
                <p className="text-lg mt-2 italic">Client Served</p>

            </div>
        <div className="border-r border-white">
       <p className=" text-2xl md:text-3xl lg:text-4xl font-black flex items-center justify-center">4.8<Star/></p>
       <p className="text-lg mt-2 italic">Overall Rating</p>
      </div>
        
    
       <div>
         <p className="text-2xl md:text-3xl lg:text-4xl font-black">20+</p>
        <p className="text-lg mt-2 italic">Countries Linked</p>
     </div>

</div>
    </section>
  )
}

export default OurMission