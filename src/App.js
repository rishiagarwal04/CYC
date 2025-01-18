// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Footer from './components/footer';
// <<<<<<< HEAD
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import QuestionDetail from './components/QuoraComponents/QandA';
// import Signup from './components/SignUp';
// import Signin from './components/SignIn';
// import PersonalizeForm from './components/PersonalizeForm';
// import CareerPathFlowchart from './components/CareerPathFlowchart.jsx';
// function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Landing />,
//     },
//     {
//       path: '/questions/:id',
//       element: <QuestionDetail />, 
//       errorElement: <div>Page not found!</div>,  
//     },
//     {
//       path: '/signup',
//       element: <Signup />, 
//       errorElement: <div>Page not found!</div>,  
//     },
//     {
//       path: '/signin',
//       element: <Signin />, 
//       errorElement: <div>Page not found!</div>,  
//     },
//     {
//       path: '/personalizeform',
//       element: <PersonalizeForm />, 
//       errorElement: <div>Page not found!</div>,  
//     },
//     {
//       path: '/explore',
//       element: <CareerPathFlowchart />, 
//       errorElement: <div>Page not found!</div>,  
//     },
//   ]);

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
// =======
// import Landing from './pages/landing';
// import Chat from './pages/chat';
// import One_two from './pages/one_two';
// import Chatai from './pages/chatai';
// import ShareApp from './pages/share';
// import Copil from './pages/copil';
// import RoadmapEng from './stream/engineering/roadmapEng';
// import StartPage from './stream/engineering/starteng';
// import Milestone1Page from './stream/engineering/milestone1eng';  
// import Milestone2Page from './stream/engineering/milestone2eng';
// import Milestone3Page from './stream/engineering/milestone3eng';
// import EndPage from './stream/engineering/endeng';

// function App() {
//   return (
//     <Router>
//       {/* Navbar appears on all pages */}
//       <Navbar />
      
//       <Routes>
//         {/* Define routes for each page */}
//         <Route path="/" element={<Landing />} />
//         <Route path="/explore" element={<RoadmapEng />} />
//         <Route path="/1-2-1" element={<One_two />} />
//         <Route path="/chat" element={<Chat />} />
//         <Route path="/share" element={<ShareApp />} />
//         <Route path="/copil" element={<Copil />} />
//         {/* Nested Roadmap routes */}
//         <Route path="/roadmap/starteng" element={<StartPage />} />
//         <Route path="/roadmap/milestone1" element={<Milestone1Page />} />
//         <Route path="/roadmap/milestone2" element={<Milestone2Page />} />
//         <Route path="/roadmap/milestone3" element={<Milestone3Page />} />
//         <Route path="/roadmap/endeng" element={<EndPage />} />
//         {/* Fallback route */}
//         <Route path="*" element={<Landing />} />
//       </Routes>
      
//       {/* Footer can be added globally */}
//       {/* <Footer /> */}
//     </Router>
// >>>>>>> main
//   );
// }

// export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
// import Footer from './components/footer';
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
import QuestionDetail from './components/QuoraComponents/QandA';
import Signup from './components/SignUp';
import Signin from './components/SignIn';
import PersonalizeForm from './components/PersonalizeForm';
import CareerPathFlowchart from './components/CareerPathFlowchart.jsx';

function App() {
  return (
    <Router>
      {/* Navbar appears on all pages<div className=' w-full  absolute  '>
      <Navbar /></div>*/}
      <div className=''> 

      <Routes>
        {/* Define routes for main and additional pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/personalizeform" element={<PersonalizeForm />} />
        <Route path="/explore" element={<CareerPathFlowchart />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/1-2-1" element={<One_two />} />
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
      </div>

      {/* Footer can be added globally */}
      {/* Uncomment if needed: <Footer /> */}
    </Router>
  );
}

export default App;
