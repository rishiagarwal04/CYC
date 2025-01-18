import React from 'react'
import News from '../components/news.js'
import Quora_ka_bhai from '../components/Quora_ka_bhai.jsx'
import YouTubeShorts from '../components/YouTubeShorts.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
// import { useNavigate } from 'react-router-dom'

const Landing = () => {
// const navigate=useNavigate();
   let id=localStorage.getItem("userId")

if(!id){
window.location.href='/signup'
}
  
  return (
    <>
      <Navbar />
      <div className='flex flex-row align-items bg-pink-500 h-[610px] space-x-3 px-4 py-4'>
        <div className='bg-red-400 w-1/3  '>
          <News />
        </div>
        <div className='bg-red-400 w-2/3 overflow-y-scroll  h-[600px] space-y-2 mb-[40px]'>

          <div className='bg-blue-400 h-[500px]'>
            roadmap
          </div>
          <div className='bg-blue-400 h-[500px]'>
            market trends
          </div>
          <div className="bg-blue-400 h-[600px]">
            <div className=" h-[95%] overflow-y-scroll p-4">
              Ask / Find Questions
              <Quora_ka_bhai />
            </div>

          </div>
          <div className="bg-blue-400 h-[600px]">
            <div className=" h-[95%] overflow-y-scroll p-4">
              <YouTubeShorts />
            </div>
          </div>
          <div className='bg-blue-400 h-[500px]'>
            testimonials in animation , horizontally , pause on hover

            <div className='flex'>

              <Testimonials />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Landing