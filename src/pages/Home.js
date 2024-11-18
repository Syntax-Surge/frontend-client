import React from "react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import CartPage from "./CartPage";
const Home = () => {
  return (
    <div>
      {/* <SaveButton /> */}
      <div>
        <Navbar />
        <CartPage />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
