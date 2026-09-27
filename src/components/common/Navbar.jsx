import CustomButton from "./CustomButton";


const Navbar = () => {
  return (
 <header className="flex items-center justify-between border border-green-500 py-4 px-20">
    {/* left part */}
    <div>
        <h1 className='text-3xl font-semibold text-green-700'>Wanderwise</h1>
    </div>
{/* right part */}
 <div className="flex items-center justify gap-16">
    <nav className="space-x-19 text-lg font-medium [&>a]:hover:text-green-700">
        < a href="Home">Home</a>
         < a href="About">About</a>
          < a href="Contact">contact</a>
    </nav>
    <CustomButton text="Login" link="/login"/>
 </div>
 </header>
  )

}
export default Navbar;