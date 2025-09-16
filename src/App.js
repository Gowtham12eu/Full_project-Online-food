import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { FruitDetails } from './Components/FruitDetails';
import { Vegetable } from './Components/Vegetable';
import { Meat } from './Components/Meat';
import { Cart } from './Components/Cart';
import { Heart } from './Components/Heart';
import { Navbar } from './Components/Navbar';
import { DataContext } from './Components/DataContext';
import { HeartContext } from './Components/HeartContext';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Buying } from './Components/Buying';
import { ShopContext } from './Components/ShopContext';
import { RegistrationForm } from './Components/RegistrationForm';
import { VegetableBuy } from './Components/VegetableBuy';
import { MeatBuy } from './Components/MeatBuy';
import { VegReg } from './Components/VegReg';
import { Meatreg } from './Components/Meatreg';
import { Promain } from './Components/Promain';
import { ErrorBoundary } from './Components/ErrorBoundary';

function App() {
  const [cartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItem));
  }, [cartItem]);

  const [heartItem, setHeartItem] = useState(() => {
    const saved = localStorage.getItem('heart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('heart', JSON.stringify(heartItem));
  }, [heartItem]);

  const [shopItem, setShopItem] = useState([]);

  return (
    <DataContext.Provider value={{ cartItem, setCartItem }}>
      <HeartContext.Provider value={{ heartItem, setHeartItem }}>
        <ShopContext.Provider value={{ shopItem, setShopItem }}>
          <Router>
            <ToastContainer position="top-center" theme="dark" transition={Slide} autoClose={3000} />
            <Navbar />
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fruit" element={<FruitDetails />} />
                <Route path="/vegetable" element={<Vegetable />} />
                <Route path="/meat" element={<Meat />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/heart" element={<Heart />} />
                <Route path="/buy" element={<Buying />} />
                <Route path="/Registration" element={<RegistrationForm />} />
                <Route path="/VegetableBuy" element={<VegetableBuy />} />
                <Route path="/meatbuy" element={<MeatBuy />} />
                <Route path="/veg-reg" element={<VegReg />} />
                <Route path="/meat-reg" element={<Meatreg />} />
                <Route path="/promain" element={<Promain />} />
              </Routes>
            </ErrorBoundary>
          </Router>
        </ShopContext.Provider>
      </HeartContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
