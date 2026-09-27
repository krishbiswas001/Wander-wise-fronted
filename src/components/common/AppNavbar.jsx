import React from 'react'
import CustomButton from './CustomButton'
import useAuth from '../../hooks/useAuth'

const AppNavbar = () => {

    const { onLogout } = useAuth();

  return (
    <header className="flex items-center justify-between border border-green-500 py-4 px-20">
    {/* left part */}
    <div>
        <h1 className='text-3xl font-semibold text-green-700'>Wanderwise</h1>
    </div>
{/* right part */}
 <div className="flex items-center justify gap-16">
    <nav className="space-x-19 text-lg font-medium [&>a]:hover:text-green-700">
        < a href="/dashboard">Dashboard</a>
         < a href="/trips">trips</a>
           < a href="/itineraries">itineraries</a>
          < a href="/baggage">baggage</a>
    </nav>

    <div onClick={()=>{onLogout()}}>
        
    <CustomButton text="Log out"/>
    </div>
 </div>
 </header>
  )
}

export default AppNavbar