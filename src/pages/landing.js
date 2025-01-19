import React from 'react';
import News from '../components/news';
import Quora_ka_bhai from '../components/Quora_ka_bhai.jsx';
import YouTubeShorts from '../components/YouTubeShorts.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import MarketTrends from '../stream/engineering/marketTrendsEng';
import RoadmapEng from '../stream/engineering/roadmapEng';
import EngineeringData from '../Data/Engineer/MarketTrends.jsx';

const Landing = () => {
  let id=localStorage.getItem("userId")

  if(!id){
  window.location.href='/signup'
  }
  return (
    <div>
      <Navbar />
      {/* Add padding-top equal to navbar height */}
      <div className="pt-20">
        {/* Section below Navbar */}
        <div
          style={styles.fontcursiv}
          className="h-20 flex justify-center items-center bg-[#684883] z-100 text-white font-semibold"
        >
          <h2>Your future depends on what you do today</h2>
        </div>

        <div>
          <div className="flex flex-row align-items  space-x-3 px-4 py-4">
            {/* News Section */}
            <div className=" w-1/4">
              <News />
            </div>

            {/* Main Content Section */}
            <div className="w-3/4 h-[600px] space-y-4">
              {/* Roadmap Section */}
              <div className="h-[500px] bg-[#f4ecfa] rounded-xl">
                <RoadmapEng />
              </div>

              {/* Market Trends Section */}
              {/* <div className="bg-[#f4ecfa] h-[500px]"> */}
                <EngineeringData />
              {/* </div> */}
            </div>
          </div>
          <div>
            {/* Q&A Section */}
            <div className="bg-[#f4ecfa] h-[600px] m-4">
              <div className="h-[95%] flex flex-col justify-center items-center overflow-hidden">
                <Quora_ka_bhai />
              </div>
            </div>

            {/* Short Videos Section */}
            <div>
              <div className="h-[95%] p-4">
                <YouTubeShorts />
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-[#f4ecfa] h-[200px]">
              <div className="flex justify-center items-center">
                <Testimonials />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

const styles = {
  fontcursiv: {
    fontFamily: 'cursive',
  },
};

export default Landing;
