import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
