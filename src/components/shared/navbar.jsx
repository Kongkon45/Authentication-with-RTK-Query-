import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50'>
        <nav className='bg-blue-500 flex justify-center items-center h-12 gap-10 '>
            <Link className='text-white text-2xl font-bold' href='/'>Home</Link>
            <Link className='text-white text-2xl font-bold' href='/sign-up'>Sing UP</Link>
            {/* <Link className='text-white text-2xl font-bold' href='/signin'>Signin</Link> */}
            <Link className='text-white text-2xl font-bold' href='/logout'>LogOut</Link>
        </nav>
    </div>
  )
}

export default Navbar