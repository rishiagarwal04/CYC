import React from 'react'
import Navbar from '../components/navbar'
import News from '../components/news'

const landing = () => {
  return (
    <>
    <div className='flex flex-row align-items bg-pink-500 h-[610px] space-x-3 px-4 py-4'>
      <div className='bg-red-400 w-1/3  '>
        <News/>
      </div>
      <div className='bg-red-400 w-2/3 overflow-y-scroll  h-[600px] space-y-2 mb-[40px]'>
        
          <div className='bg-blue-400 h-[500px]'>
            roadmap
          </div>
          <div className='bg-blue-400 h-[500px]'>
            market trends
          </div>
          <div className='bg-blue-400 h-[500px]'>
            quora ka bhai
          </div>
          <div className='bg-blue-400 h-[500px]'>
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