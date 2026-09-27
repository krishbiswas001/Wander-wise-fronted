
import { GlobeCheckIcon } from 'lucide-react'
import { ShieldCheck } from 'lucide-react'
import { Wallet } from 'lucide-react'
import { MapPinned } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const tripsData = [
    {
        title: "Scenic Lake Escapes",
        content: "Discover breathtaking alpine lakes surrounded by towering mountains, where crystal-clear turquoise waters invite you to relax and unwind.",
       image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       
    
    },
    {
        title: "Charming Old Town Streets",
        content: "Wander through vibrant, flower-lined alleyways in historic villages, where every corner reveals colorful architecture and authentic local charm.",
       image:"https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        title: "Boutique Stays & Balconies",
        content: "Stay in beautifully restored buildings featuring sun-drenched balconies, lush greenery, and the timeless character of Mediterranean design.",
       image:"https://images.unsplash.com/photo-1598625536102-9bbc45926e46?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        title: "Coastal Village Getaways",
        content: "Explore picturesque villages perched along dramatic coastlines, offering stunning sea views and unforgettable seaside adventures.",
      image:"https://plus.unsplash.com/premium_photo-1695735926008-87c9ba2c36af?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const FamousTrips = () => {
    const navigate = useNavigate();
  return (
    <div className="px-20 py-20">
        {/* headings */}
        <div>
        <h2  className="text-4xl font-bold text-center ">Famous Trips</h2>
        </div>
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {
        tripsData.map((feature, index) => {
            return (
                <div  className='border border-gray-300 rounded p-4 bg-orange-50 md:bg-amber-50 lg:bg-yellow-50 '>
               <div className="w-full h-40 overflow-hidden">
                <img className="w-full" src={feature.image} alt={feature.title} />
               </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p>{feature.content}</p>
                
                </div>
            )
        })
      }
        </div>
    </div>
  )
}

export default FamousTrips