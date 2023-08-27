
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App
