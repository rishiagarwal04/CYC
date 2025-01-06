import './App.css';
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Footer from './components/footer';

function App() {
  return (
   <>
      <div className='mx-3 my-3'>
        <Navbar/> 
        <Landing/>
        <Footer/>
      </div>  </>
  );
}

export default App;
