import React from 'react'
import {Link} from 'react-router-dom'
import {LayoutTemplate} from 'lucide-react'
import {ProfileInfoCard} from '../components/Cards'

const Navbar = () => {
  return (
    <div className='bg-gray-950/80 backdrop-blur-xl border-b border-red-900/40 py-3 px-4 md:px-8 sticky top-0 z-50'>
        <div className='max-w-6xl mx-auto flex items-center justify-between gap-5'>
            <Link to='/' className='flex flex-row items-center gap-3'>
            <div className='flex items-center gap-3'>
                <div className=' w-10 h-10 bg-gradient-to-r from-red-600 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30'>
                    <LayoutTemplate className='w-5 h-5 text-white'/>
                </div>
                <span className='text-xl sm:text-2xl font-black bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent '>EasyResume </span>
            </div>
            </Link>
            <ProfileInfoCard/>
        </div>
    </div>
  )
}

export default Navbar
