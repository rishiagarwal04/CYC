import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Footer from './components/footer';
import Chat from './pages/chat';
function App() {
  return (
    <BrowserRouter>
      <div className=''>
      <Navbar />
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/career_unicorn" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat" element={<Chat />} />
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
