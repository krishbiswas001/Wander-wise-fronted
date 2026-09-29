import CustomButton from "./CustomButton";


const Navbar = () => {
  return (
 <header className="flex items-center justify-between border border-green-500 py-4 px-4 md:px-8">
    {/* left part */}
    <div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-green-700'>Wanderwise</h1>
    </div>
{/* right part */}
 <div className="flex items-center justify gap-16">
    <nav className="space-x-19 text-lg font-medium [&>a]:hover:text-green-700 hidden md:block">
        < a href="/">Home</a>
         < a href="/About">About</a>
          < a href="/Contact">contact</a>
    </nav>
    <CustomButton text="Login" link="/login"/>
 </div>
 </header>
  )

}
export default Navbar;