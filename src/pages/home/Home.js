import { Button } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutPage from "../Shopping Cart/CheckoutPage";
import Hero from "./Hero";
import BrowseCarousal from "../category/BrowseCarousal";
import FAQ from "./FAQ";
import LatestProducts from "./LatestProducts";
import { motion } from 'framer-motion';
import { toast } from "react-toastify";
import axios from "axios";
import { useCookies } from "react-cookie";

const Home = () => {
  const navigate = useNavigate();
  // const [cookies] = useCookies(["user"]);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);


  // useEffect(() => {
  //   if (cookies.user) {
  //     // const userData = JSON.parse(cookies.user);
  //     // console.log("User ID:", userData.userId);
  //     // console.log("Username:", userData.username);
  //   } else {
  //     console.log("No user data found in cookies. home page");
  //   }
  // }, [cookies]);

  const logout = async () => {
    try {
      const response = await axios.post("http://localhost:3002/api/v1/users/logout", {}, { withCredentials: true });
      console.log('Response Headers:', response.headers);
      console.log('Response :', response);
      if (response.status === 200) {
        toast.success('Successfully Signed Out', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         });
         // Logout successful
         // Clear local authentication state
         // localStorage.removeItem('userId'); // Or any other relevant state
         // Redirect to login page
         // window.location.href = '/login'; 
         removeCookie('user',{path:'/'});
         removeCookie('connect.sid',{path:'/'});
         setTimeout(() => {
          navigate("/auth/signIn");
          }, 2000); 
      } else {
        // Handle non-200 responses (e.g., 400, 500)
        throw new Error(`Logout failed with status: ${response.status}`); 
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error(`Error Occured..Try again!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  if (cookies.user) {

    console.log('coooooooooooookie home:', cookies.user.userId)
  } else {
    console.log("No user data found in cookies. signin page ");
  }
  
  const test = async () => {
    try {
      const response = await axios.post("http://localhost:4000/admin/inside", {}, { withCredentials: true });
      console.log('Response Headers:', response.headers);
      console.log('Response :', response);
      if (response.status === 200) {
        // Logout successful
        // Clear local authentication state
        // localStorage.removeItem('userId'); // Or any other relevant state
        // Redirect to login page
        // window.location.href = '/login'; 
      } else {
        // Handle non-200 responses (e.g., 400, 500)
        throw new Error(`access failed with status: ${response.status}`); 
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error(`Error Occured..Try again!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
 
  return (
    <div>
      <Link to={'/auth/signIn'}> <Button >Sign In</Button></Link>
      <Button onClick={ () => logout()}>Sign out</Button> 
      <Button onClick={ () => test()}>Test admin route</Button> 
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
