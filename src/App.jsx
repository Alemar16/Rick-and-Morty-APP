
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Favorites from './components/favorites/Favorites';
import Synopsis from './synopsis/Synopsis';
import Henry_m2 from './components/henry_m2/Henry_m2';
import Tecnologies from './components/tecnologies/Tecnologies';
import About from './components/about/About';

function App() {


  return (
    <div>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/synopsis" element={<Synopsis />} />
        <Route path="/henry_m2" element={<Henry_m2 />} />
        <Route path="/tecnologies" element={<Tecnologies />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App
