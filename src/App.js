
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Shop from './Shop';
import ShopCategory from './ShopCategory';
import Product from './Product';
import Cart from './Cart';
import LoginSignup from './LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kids_banner from './Components/Assests/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner}  category="women"/>}/>
        <Route path='/kids' element={<ShopCategory  banner={kids_banner} category="kids"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=" :productId" element={<Product/>}/>
        </Route>
        <Route path="cart" element={<Cart/>}/>
        <Route path="login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
