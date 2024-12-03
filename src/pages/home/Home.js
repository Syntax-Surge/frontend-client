import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import CheckoutPage from "../Shopping Cart/CheckoutPage";
import Hero from "./Hero";
import BrowseCarousal from "../category/BrowseCarousal";
import FAQ from "./FAQ";

const Home = () => {

  return (
    <div>
      <Link to={'/auth/signIn'}> <Button >Sign In</Button></Link>
      {/* <div className="flex place-content-center items-center border-b-4 border-green-100">
        <Button>Hello</Button> 
        <Link to={'/myaccount'}>    <Button > Account</Button></Link>
        <Link to={'/auth/signup'}>    <Button > Sign up</Button></Link>
        <Link to={'/browse'}> <Button>Browse Page</Button></Link>
        <Link to={'/browse'}> <Button>Browse Page</Button></Link>
        <Link to={'/cart/:userId'}> <Button>Cart Page</Button></Link>
        <Link to={"/auth/signup"}>
          <Button> Sign up</Button>
        </Link>
        <Link to={"/auth/signIn"}>
          <Button>Sign In</Button>
        </Link>
        {/* <CheckoutPage /> */}
      {/* </div> */} 
      <div className="place-content-center h-full">
        <Hero/>
      </div>
      <div className="flex place-content-center justify-center items-center pt-0 pb-10">
        <h1 className="text-3xl align-center justify-center">C A T E G O R I E S</h1>
      </div>
      <div className="bg-[#C1DCDC] drop-shadow-md shadow-lg py-6 mt-15 mb-10">
        <Link to='/browse'>
          <BrowseCarousal />
        </Link>
      </div>

      <div className="flex place-content-center justify-center items-center pt-0 pb-0">
        <h1 className="text-3xl align-center justify-center">F A Qs</h1>
      </div>
      <div className="py-6  mb-10">
          <FAQ />
      </div>
      
    </div>
      
  );
};

export default Home;
