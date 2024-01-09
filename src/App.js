import './App.css';
import Food from './Components/Food';
import HeadlineCards from './Components/HeadlineCards';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Category from './Components/Category';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HeadlineCards />
      <Food/>
      <Category />
    </>
  );
}

export default App;
