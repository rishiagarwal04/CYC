import './App.css';
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Footer from './components/footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuestionDetail from './components/QuoraComponents/QandA';

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
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

