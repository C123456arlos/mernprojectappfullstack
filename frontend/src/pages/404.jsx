import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
      <div className='min-h-screen bg-cover flex flex-col justify-center items-center text-white'
          style={{ backgroundImage: `url('/error.png')` }}>
          <header className='absolute top-0 left-0 p-4 bg-black w-full'>
              <Link to={'/'}>
                  <img src='/n.png' alt='logo' className='h-8'></img>
              </Link>
          </header>
          <main className='text-center error-page--content z-10'>
              <h1 className='text-7xl font-semibold mb-4'>lost your way</h1>
              <p className='mb-6 text-xl'>
                  sorry we cant find that page you&apos;ll find lost to explore on the home page
              </p>
              <Link to={'/'} className='bg-white text-black py-2 px-4 rounded'>
                  netflix home
              </Link>
          </main>
          </div>
  )
}

export default NotFoundPage