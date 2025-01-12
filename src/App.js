import './App.css';
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Footer from './components/footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuestionDetail from './components/QuoraComponents/QandA';
import Signup from './components/SignUp';
import Signin from './components/SignIn';
import PersonalizeForm from './components/PersonalizeForm';
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
      path: '/personalizeform',
      element: <PersonalizeForm />, 
      errorElement: <div>Page not found!</div>,  
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

