import React from 'react'
import Navbar from '../components/navbar'
import News from '../components/news'

const landing = () => {
  return (
    <><div>
    <div className='flex flex-row align-items bg-pink-500 max-h-full space-x-3 px-4 py-4'>
      <div className='bg-red-400 h-[1010px] w-1/4 '>
        <News/>
      </div>
      <div className='bg-red-400 w-3/4 h-[600px] space-y-2 mb-[40px]'>
        
          <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[500px]'>
            roadmap
          </div>
          <div className='bg-blue-400 h-[500px]'>
            market trends
          </div>
          </div>
          </div>
          <div className='flex flex-col align-items bg-pink-500 max-w-full  px-4 py-4 space-y-2'>
          <div className='bg-blue-400 h-[500px] w-full'>
            quora ka bhai
          </div>
          
          <div className='bg-blue-400 h-[500px] w-full'>
            short videos in set of 3 +1 as more , clicking on an of it leading to new page
          </div><div className='bg-blue-400 h-[500px] '>
            testimonials in animation , horizontally , pause on hover
          </div>
      </div>
    </div>
  </>
  )
}

export default landing