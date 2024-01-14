import './App.css';
import Food from './Components/Food';
import HeadlineCards from './Components/HeadlineCards';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Category from './Components/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FoodDisplay from './Components/FoodDisplay';

function App() {
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Hero/>
      <HeadlineCards />

      <Routes>
        <Route path='/foodDisplay/:id' element={<FoodDisplay />} />
      </Routes>
      <Food/>
      <Category />
    </BrowserRouter>
    
  );
}

export default App;


