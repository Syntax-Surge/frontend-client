import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import CheckoutPage from "../Shopping Cart/CheckoutPage";
import Hero from "./Hero";
import BrowseCarousal from "../category/BrowseCarousal";
import FAQ from "./FAQ";
import LatestProducts from "./LatestProducts";
import { motion } from 'framer-motion';

const Home = () => {

  return (
    <div>
      {/* <div className="flex place-content-center items-center border-b-4 border-green-100">
        <Button>Hello</Button> 
        <Link to={'/myaccount'}>    <Button > Account</Button></Link>
        <Link to={'/auth/signup'}>    <Button > Sign up</Button></Link>
        <Link to={'/auth/signIn'}> <Button >Sign In</Button></Link>
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
      <div className="place-content-center overflow-x-hidden shadow-sm">
        <Hero/>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity:0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="pb-6 mb-10">
          <LatestProducts />
      </motion.div>
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity:0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="flex place-content-center justify-center items-center pt-0 pb-10">
        <h1 className="text-3xl align-center justify-center">C A T E G O R I E S</h1>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity:0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="bg-[#C1DCDC] drop-shadow-md shadow-lg py-6 mt-15 mb-10">
        <Link to='/browse'>
          <BrowseCarousal />
        </Link>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity:0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="flex place-content-center justify-center items-center pt-0 pb-0">
        <h1 className="text-3xl align-center justify-center">F A Qs</h1>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity:0, y: 100 }}
        transition={{ duration: 0.5 }} 
        className="py-6  mb-10">
          <FAQ />
      </motion.div>
      
    </div>
      
  );
};

export default Home;
