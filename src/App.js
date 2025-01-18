import './App.css';

import Landing from './pages/landing';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuestionDetail from './components/QuoraComponents/QandA';
import Signup from './components/SignUp';
import Signin from './components/SignIn';

import E910 from './Data/Engineer/ninthAnd10/Main';
import E1112 from './Data/Engineer/eleven12/Main';
import CollegeTable from './Data/Engineer/College';
import EngineeringData from './Data/Engineer/MarketTrends';
import CareerOptions from './Data/Engineer/Specializations';
// import C910 from './Data/Cooking/C910';
// import C1112 from './Data/Cooking/eleven12';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/questions/:id',
      element: <QuestionDetail />, 
      errorElement: <div>Page not found!</div>,  
    },
    {
      path: '/signup',
      element: <Signup />, 
      errorElement: <div>Page not found!</div>,  
    },
    {
      path: '/signin',
      element: <Signin />, 
      errorElement: <div>Page not found!</div>,  
    },
    {
      path: '/explore/engineer/nine10',
      element: <E910 />, 
      errorElement: <div>Page not found!</div>,  
    },
    {
      path: '/explore/engineer/eleven12',
      element: <E1112 />, 
      errorElement: <div>Page not found!</div>,  
    },
    {
      path: '/explore/engineer/college',
      element: <CollegeTable />, 
      errorElement: <div>Page not found!</div>,  
    },
    {
      path: '/explore/engineer/markettrends',
      element: <EngineeringData />, 
      errorElement: <div>Page not found!</div>,  
    },
    {
      path: '/explore/engineer/specialization',
      element: <CareerOptions />, 
      errorElement: <div>Page not found!</div>,  
    },
    // {
    //   path: '/explore/cooking/nine10',
    //   element: <C910 />, 
    //   errorElement: <div>Page not found!</div>,  
    // },
    // {
    //   path: '/explore/cooking/eleven12',
    //   element: <C1112 />, 
    //   errorElement: <div>Page not found!</div>,  
    // },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

