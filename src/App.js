import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "./contexts/Context";
import Home from "./pages/Home";
import SignUp from "./pages/auth pages/signUp";
import SignIn from "./pages/auth pages/signIn";
import Shop from "./pages/shop/Shop";
import Item from "./pages/item/Item";
import CustomerReviews from "./pages/reviews/Reviews";
import CustomerReview from "./pages/reviews/CustomerReview";

// border border-black

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop showHeroAndFilter={true} />} />
            <Route path="/item/:id" element={<Item />} />
          </Route>

          <Route>
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/signIn" element={<SignIn />} />
          </Route>

          <Route>
            <Route path="/reviews" element={<CustomerReview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
