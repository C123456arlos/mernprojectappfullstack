import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
const AuthScreen = () => {
    const [email, setEmail] = useState('')
    const navigate= useNavigate()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        navigate('/signup?email='+email)
    }
    return (
        <div className='relative'>
            <div className='hero-bg h-[100vh] bg-red-300'>

          <header className='max-w-6xl mx-auto flex items-center justify-between p-4  pb-10'>
              <img src='/n.png' alt='logo' className='w-32 md:w-32'></img>
              <Link to={'/login'} className='text-white bg-red-600 py-1 px-2 rounded'>
                  sign in
              </Link>
                </header>
        
          <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
              <h1 className='text-4xl md:text-6xl font-bold mb-4'>unlimited movies tv shows and more</h1>
              <p className='text-lg mb-4'>watch anywhere cancel anytime</p>
              <p className='mb-4'>ready to watch enter your email to create or restart your membership</p>
              <form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
                    <input type='email' className='p-2 rounded flex-1 bg-black/80 border broder-gray-700'
                        placeholder='test@email.com' value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                    <button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>get started
                        <ChevronRight className='size-8 md:size-10'></ChevronRight>
                    </button>
              </form>
        </div>
            <div className='h-2 w-full bg-[#232323]' aria-hidden='true'></div>
            <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>enjoy your tv</h2>
                        <p className='text-lg md:text-4xl'>
                            watch on smart tvs playstation xbox chromecast apple tv bluray players and more
                        </p>
                    </div>
                        <div className='flex-1 relative'>
                            <img src={'tv.png'} alt='tv' className='mt-16 bg-gray-700 w-[700px] relative z-10'></img>
                            <video className='absolute top-1/2 left-1/2 -translate-x-1/2 p-3 -translate-y-1/2 h-1/2 z-10'
                        playsInline autoPlay={true} muted loop>
                            <source src='/hero-vid.mp4' type='video/mp4'></source>
                            </video>
                        <img src={'remote.png'} className=' absolute w-32 h-32 top-3/4 left-3/4 -translate-x-1/2 p-3 -translate-y-1/2 z-10'></img>
                        </div>
                    </div>
            </div>
                </div>
            <div className='h-2 w-full bg-[#232323]' aria-hidden='true'></div>
            <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
                    <div className='flex-1'>
                        <div className='relative'>
                            <img src='/mountain.png' alt='mountain' className='mt-4'></img>
                            <div className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2'>
                                <img src='reel.png' alt='image' className='h-full'></img>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex flex-col gap-0'>
                                        <span className='text-md lg:text-lg font-bold'>stranger things</span>
                                        <span className='text-sm text-blue-500'>downloading</span>
                                    </div>
                                    <img src='download.gif' alt='' className='h-12'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 md:text-left text-center'>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-balance'>
                            download your shows to watch offline
                        </h2>
                        <p className='text-lg md:text-xl'>
                            save your favorites easily and always have something to watch
                        </p>
                    </div>
                </div>
        </div>
            <div className='h-2 w-full bg-[#232323]' aria-hidden='true'></div>
             <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>watch everywhere</h2>
                        <p className='text-lg md:text-4xl'>
                            stream unlimited movies and tv shows on your phone tablet laptop and tv
                        </p>
                    </div>
                        <div className='flex-1 relative overflow-hidden'>
                            <img src={'device.png'} alt='device' className='mt-16 bg-gray-700 w-[700px] relative z-10'></img>
                            <video className='absolute top-[280px] left-[280px] -translate-x-1/2 p-3 -translate-y-1/2 h-3/5 z-10 w-96'
                        playsInline autoPlay={true} muted loop>
                            <source src='/hero-vid.mp4' type='video/mp4'></source>
                            </video>
                        <img src={'device.png'} className=' absolute w-64 h-64 top-[320px] left-[400px] -translate-x-1/2 p-3 -translate-y-1/2 z-10'></img>
                        </div>
                    </div>
            </div>
            <div className='h-2 w-full bg-[#232323]' aria-hidden='true'></div>
            <div className='py-10 bg-black text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2'>
                    <div className='flex-1 relative'>
                        <img src={'hero.png'} alt='enjoy' className='mt-4'></img>
                    </div>
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>create profiles for kids</h2>
                        <p className='text-lg md:text-xl'>
                            send kids on adventures with their favorite characters in a space made just for them free with membership
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AuthScreen
