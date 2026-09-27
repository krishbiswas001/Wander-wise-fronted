
import { GlobeCheckIcon } from 'lucide-react'
import { ShieldCheck } from 'lucide-react'
import { Wallet } from 'lucide-react'
import { MapPinned } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const featuresData = [
    {
        title: "24/7 Availability",
        content: "Our website is available 24/7, ensuring that you can access our services anytime, anywhere.",
        icon: GlobeCheckIcon,
    
    },
    {
        title: "Safe & Secure Booking",
        content: "Your bookings and payments are protected with secure, encrypted checkout at every step.",
        icon: ShieldCheck,
        
    },
    {
        title: "Curated Destinations",
        content: "Handpicked tours and travel packages across top destinations, tailored to match your interests.",
        icon: MapPinned
        
    },
    {
        title: "Best Price Guarantee",
        content: "Enjoy transparent pricing with no hidden fees, plus flexible payment options for every budget.",
        icon: Wallet
        
    }
]

const Features = () => {
    const navigate = useNavigate();
  return (
    <div className="px-20 py-20">
        {/* headings */}
        <div>
        <h2 onClick={()=>{navigate("/features")}} className="text-4xl font-bold text-center  cursor-pointer">Features</h2>
        </div>
        {/* content */}
        <div className="grid grid-cols-4 gap-4 mt-10">
      {
        featuresData.map((feature, index) => {
            return (
                <div  className='border border-gray-300 rounded p-4'>
                <feature.icon size={40} className="text-blue-500 mb-4"/>
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

export default Features