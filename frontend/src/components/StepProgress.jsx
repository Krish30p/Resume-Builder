import React from 'react'
import {shimmerStyle} from '../assets/dummystyle'

const StepProgress = ({progress}) => {
  return (
    <>
    <style>{shimmerStyle}</style>

    <div className='relative w-full h-4 bg-white/5  backdrop:blur-2xl overflow-hidden rounded-full border border-white/10 '>
    <div className='absolute inset-0 bg-gradient-to-r from-violet-500/20  to-fuchsia-500/20 animate-pulse '/>


        {/* main progress bar  4:25:00 */}
    </div>
    
    </>
  )
}

export default StepProgress
