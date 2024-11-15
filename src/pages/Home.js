import React from "react";
import BuyButton from "../components/Buttons/BuyButton";
import ShopNowButton from "../components/Buttons/ShopNowButton";
import SeeMoreButton from "../components/Buttons/SeeMoreButton";
import SubscribeButton from "../components/Buttons/SubscribeButton";
import CheckoutButton from "../components/Buttons/CheckoutButton";

const Home = () => {
  return (
    <div>
      <BuyButton />
      <ShopNowButton />
      <SeeMoreButton />
      <SubscribeButton />
      <CheckoutButton />
    </div>
  );
};

export default Home;
