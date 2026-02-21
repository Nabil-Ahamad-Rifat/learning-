import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className=' shadow sticky z-50 top-0'>
        <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
            <div className='flex flex-wrap justify-between items-center mx-auto  max-w-screen-xl'>
                <Link  to="/"  className='flex items-center'>
                <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" alt="logo"  className='mr-3 h-12'/></Link>
                <div className='flex items-center lg:order-2'>
                    <Link to="#" className='text-gray-800 hover:bg-gray-50  focus:ring-5 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 focus:outline-none capitalize'>
                    login
                    </Link>
                    <Link to="#" className='text-white bg-orange-800 focus:ring-4  focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 mr-2 focus:outline-none  capitalize'>Get started</Link>

                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header