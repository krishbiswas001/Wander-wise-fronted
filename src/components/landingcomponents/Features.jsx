
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
    <div className="px-4 md:px-8 lg:px-20 py-24">
        {/* headings */}
        <div>
        <h2 onClick={()=>{navigate("/features")}} className="text-4xl font-bold text-center  cursor-pointer">Features</h2>
        </div>
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
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