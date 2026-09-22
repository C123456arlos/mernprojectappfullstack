import { LogOut, Menu, Search } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser'
import { useContentStore } from '../store/content'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const {user, logout} =useAuthStore()
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    const { setContentType } = useContentStore()
    return (
        <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
        {/* // <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 mb-12 -mt-12'> */}
            <div className='flex items-center gap-10 z-50'>
                <Link to='/'>
                    <img src={'/n.png'} alt='logotest' className='w-32 sm:w-20'></img>
                </Link>
                <div className='hidden sm:flex gap-2 items-center'>
                    <Link to='/' className='hover:underline' onClick={()=>setContentType('movie')}>
                        movies
                    </Link>
                    <Link to='/' className='hover:underline'  onClick={()=>setContentType('tv')}>
                        tv shows
                    </Link>
                    <Link to='/history' className='hover:underline'>
                        search history
                    </Link>
                </div>
            </div>
            <div className='flex gap-2 items-center z-50'>
                <Link to={'/search'}>
                    <Search className='size-6 cursor-pointer'></Search>
                </Link>
                <img src={user.image} alt='avatar' className='h-8 rounded cursor-pointer'></img>
                <LogOut className='size-6 cursor-pointer' onClick={logout}></LogOut>
                <div className='sm:hidden'>
                    <Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu}></Menu>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
                    <Link to={'/'} className='block hover:underline p-2' onClick={toggleMobileMenu}>movies</Link>
                    <Link to={'/'} className='block hover:underline p-2' onClick={toggleMobileMenu}>tv</Link>
                    <Link to={'/history'} className='block hover:underline p-2' onClick={toggleMobileMenu}>search history</Link>
                </div>
)}
    </header>
  )
}

export default Navbar