import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from './contexts/Context';
import Home from './pages/Home';
import SignUp from './pages/auth pages/signUp';
import SignIn from './pages/auth pages/signIn';
import Shop from './pages/shop/Shop';
import Item from './pages/item/Item';
import BrowseByCategory from './pages/category/BrowseByCategory';
import Navbar from './components/layout/navbar';
import CartPage from "./pages/Shopping Cart/CartPage";

// border border-black
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop showHeroAndFilter={true} />} />
            <Route path='/item/:id' element={<Item  />} />
            <Route path="/myaccount" element={<Profile />} />
            <Route path="/cart/:userId" element={<CartPage />} />
          </Route>

          <Route>
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/signIn" element={<SignIn />} />
          </Route>

          <Route>
            <Route path='/browse' element={<BrowseByCategory/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
