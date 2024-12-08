import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './contexts/Context';
import Checkout from './pages/Checkout';
import Home from './pages/home/Home';
import SignUp from './pages/auth pages/signUp';
import SignIn from './pages/auth pages/signIn';
import ChangePassword from './pages/auth pages/chnagePassword';
import ForgotPassword from './pages/auth pages/forgotPassword';
import Shop from './pages/shop/Shop';
import Item from './pages/item/Item';
import BrowseByCategory from './pages/category/BrowseByCategory';
import Navbar from './components/layout/navbar';
import CartPage from "./pages/Shopping Cart/CartPage";
import CheckoutPage from "./pages/Shopping Cart/CheckoutPage";

// border border-black
import Profile from './pages/profile/Profile';
import Footer from './components/layout/footer';
import MainLayout from './layout/main_layout';
import AuthLayout from './layout/outlet';


function App() {
  return (
    <Provider>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
 
          <Route element={<MainLayout/>}>
 
         
            <Route path="/" element={<Home/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/checkoutPage" element={<CheckoutPage/>} />
 
            <Route path='/' element={<Home />} />

            <Route path='/shop' element={<Shop showHeroAndFilter={true} />} />

            <Route path='/item/:id' element={<Item />} />
            <Route path='/myaccount' element={<Profile />} />
            <Route path='/cart/:userId' element={<CartPage />} />
          </Route>

          <Route element={<AuthLayout/>}>
            <Route path="/auth/signup" element={<SignUp/>} />
            <Route path="/auth/signIn" element={<SignIn/>} />
            <Route path="/auth/user/reset/:id" element={<ChangePassword/>} />
            <Route path="/auth/user/forgot-password" element={<ForgotPassword/>} />

            <Route path='/browse' element={<BrowseByCategory/>} />
          </Route>
          
        
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </Provider>
  );
}

export default App;
