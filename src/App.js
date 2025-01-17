import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Landing from './pages/landing';
import Chat from './pages/chat';
import One_two from './pages/one_two';
import Chatai from './pages/chatai';
import ShareApp from './pages/share';
import Copil from './pages/copil';
import RoadmapEng from './stream/engineering/roadmapEng';
import StartPage from './stream/engineering/starteng';
import Milestone1Page from './stream/engineering/milestone1eng';  
import Milestone2Page from './stream/engineering/milestone2eng';
import Milestone3Page from './stream/engineering/milestone3eng';
import EndPage from './stream/engineering/endeng';

function App() {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />
      
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<RoadmapEng />} />
        <Route path="/1-2-1" element={<One_two />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/share" element={<ShareApp />} />
        <Route path="/copil" element={<Copil />} />
        {/* Nested Roadmap routes */}
        <Route path="/roadmap/starteng" element={<StartPage />} />
        <Route path="/roadmap/milestone1" element={<Milestone1Page />} />
        <Route path="/roadmap/milestone2" element={<Milestone2Page />} />
        <Route path="/roadmap/milestone3" element={<Milestone3Page />} />
        <Route path="/roadmap/endeng" element={<EndPage />} />
        {/* Fallback route */}
        <Route path="*" element={<Landing />} />
      </Routes>
      
      {/* Footer can be added globally */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
