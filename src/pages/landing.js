import React from 'react'
import Navbar from '../components/navbar'
import News from '../components/news'
import MarketTrends from '../stream/engineering/marketTrendsEng'
import RoadmapEng from '../stream/engineering/roadmapEng' 



const landing = () => {
  return (
    <><div>
            <div style={styles.fontcursiv}  className=' h-20 flex justify-center justify-items-center-center items-center	bg-[#684883] text-white font-semibold fon ' ><h2>Your future depends on what you do today</h2></div>

    <div className='flex flex-row align-items max-h-full space-x-3 px-4 py-4'>
      <div className=' h-[1010px] w-1/4 '>
        <News/>
      </div>
      <div className=' w-3/4 h-[600px] space-y-2 mb-[40px]'>
        
          <div className='
           h-[500px] bg-[#f4ecfa] rounded-xl '>
            <RoadmapEng/>
          </div>
          <div className='bg-[#f4ecfa] h-[500px]'>
            market trends
          </div>
          </div>
          </div>
          <div className='flex flex-col align-items max-w-full  px-4 py-4 space-y-2'>
          <div className='bg-[#f4ecfa] h-[500px] w-full'>
            quora ka bhai
          </div>
          
          <div className='bg-[#f4ecfa] h-[500px] w-full'>
            short videos in set of 3 +1 as more , clicking on an of it leading to new page
          </div><div className='bg-[#f4ecfa] h-[500px] '>
            testimonials in animation , horizontally , pause on hover
          </div>
      </div>
    </div>
  </>
  )
}
const styles = {
  fontcursiv: { fontFamily: " cursive",
                
   },
};
export default landing