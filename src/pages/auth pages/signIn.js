import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
// import Frame61 from '../../../public/images/Frame61.png'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { CookiesProvider, useCookies } from 'react-cookie';
// import cookie from 'react-cookie'

const SignIn = () => {
  const [firstName , setFirstName] = useState('')
  const [lastName , setLastName] = useState('')
  const [email , setEmail] = useState('')
  const [contactNo , setContactNo] = useState('')
  const [password , setPassword] = useState('')
  const [passwordNotMatch , setPasswordNotMatch] = useState(false)
  const [firstNameError , setFirstNameError] = useState(false)
  const [lastNameError , setLastNameError] = useState(false)
  const [emailError , setEmailError] = useState(false)
  const [contactNoError , setContactNoError] = useState(false)
  const [passwordError , setPasswordError] = useState(false)
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const navigate = useNavigate();
  // const [cookies, setCookie, removeCookie] = useCookies(['connect.sid']);
  
  
  const userData = {
    "username": email,
    "password": password,
  }
  
  const validateEmail = (email) => {
    console.log(
      "email validation :" +
      String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    );
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const  signInWithGoogle = () => {
    window.location.href = "http://localhost:4000/login/federated/google";
  }
  const  signInWithFacebook = () => {
    window.location.href = "http://localhost:4000/login/federated/facebook";
  }
  const  signIn = async() => {
    
    if(email === "" ||  !validateEmail(email) ){
      setEmailError(true)
    }
    else{
      setEmailError(false)
    }
    if(password === "" || password.length < 8){
      setPasswordError(true)
    }
    else{
      setPasswordError(false)
    }
    setIsLoadingSignIn(true)
    try {
      await  axios.post("http://localhost:3002/api/v1/users/login" , userData ,  { withCredentials: true }).then( (res) => {
        console.log('res ', res)
        console.log('Response Headers:', res.headers);
        console.log("document.cookie :"  , document.cookie);
        if(res.status === 200){
          setIsLoadingSignIn(false)
          toast.success('Successfully Signed In', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           });
            setTimeout(() => {
               navigate("/");
             }, 2000); // Slightly longer than `autoClose` duration to ensure the toast is fully visible
            
            // navigate('/')
          }
          // console.log('res : ', res.data)
        }).catch( (error) => {
          setIsLoadingSignIn(false)
          console.log('error', error.response.data.msg)
          toast.error(`${error.response.data.msg} !`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
         progress: undefined,
         theme: "light",
        }); 
      })
    } catch (error) {
      console.log('Error :', Error);
      toast.error(`Error occured !`, {
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
  }
  
  // console.log('coooooooooooookie :', cookies)

  // const sessionId = cookies['connect.sid'];

  // console.log('Session ID:', sessionId);

  
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
  const logout = async () => {
    try {
      const response = await axios.post("http://localhost:4000/logout", {}, { withCredentials: true });
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

  return (
    <> 
     <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" 
/>
      <div className="flex my-10 justify-center ">
        <div className=" w-1/2 flex  justify-center items-center  h-full mx-10">
        <div className="w-full">

          <img
            src={require("../../images/Planty's Logo.png")}
            alt=""
            className="mb-10"
          />
          <img
            src={require("../../images/Frame61.png")}
            alt=""
            className="w-full"
          />
        </div>
        </div>

        <div className="w-1/2 flex  justify-center items-center  h-full">
          <Card
            color="transparent"
            shadow={false}
            className="ml-10 w-3/4   gap-3"
          >
            <Typography
              variant="h4"
              color="black"
              className="font-normal text-3xl text-[#239b56] font-roboto flex justify-center items-center"
            >
              Welcome !
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-semibold text-[#3FAEAE] font-roboto flex justify-center items-center"
            >
              SignIn to explore the awesome plants
            </Typography>
            <form className=" mt-4 mb-2 w-full max-w-screen-xl sm:w-full">
              <div className=" flex flex-col gap-4">
                
                <Typography variant="h6" color="blue-gray" className="-mb-2">
                  Your Email
                </Typography>
                <div>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={ (e) => {
                    setEmail(e.target.value);
                    if (email !== "" && validateEmail(email) ){
                      setEmailError(false)
                    }
                }}
                  error= {emailError ? "border-red-500" : ""}
                />
                 <p className="text-red-700">{emailError ? "Enter a valid e-mail" : ""}</p>
                </div>
                
                <div className="gap-4  my-5   w-full  ">
                 
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Password
                    </Typography>
                    <Input
                      type="password"
                      size="lg"
                      placeholder="********"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      onChange={ (e) => setPassword(e.target.value)}
                      error= {passwordError ? "border-red-500" : ""}
                    />
                  
                   
                </div>
              </div>
              {/* <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a href="google.com" className="font-medium transition-colors hover:text-gray-900">&nbsp;Terms and Conditions</a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              /> */}
              <Link to={'/auth/user/forgot-password'}><Typography
                variant="h4"
                color="black"
                className="font-normal text-xl text-[#239b56] font-roboto flex justify-center items-center mt-4 hover:underline"
                // onMouseEnter={}
              >
                Forgot Password ?{" "}
              </Typography></Link>
              <Button className="mt-6 bg-[#3FAEAE] flex justify-center" fullWidth loading={isLoadingSignIn}
              onClick={ (e) => {console.log('userData', userData);signIn()}}>
                sign In
              </Button>

              <Typography
                variant="h4"
                color="black"
                className="font-normal text-xl text-[#239b56] font-roboto flex justify-center items-center mt-4"
              >
                Don't have an account ?{" "}
              </Typography>
              <Link to={'/auth/signup'}> <Button
                className="mt-6 bg-inherit  text-[#239b56] border-[#239b56]  border-solid border-2"
                fullWidth
              
              >
                Sign Up
              </Button></Link>
              <div className="relative flex py-5 items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-gray-400">
                  Or Sign In with
                </span>
                <div class="flex-grow border-t border-gray-400"></div>
              </div>

              <div className="gap-4 flex   w-full  justify-evenly ">
                {/* facebook */}
                <Button
                  type="button"
                  className="inline-block rounded-full p-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  style={{ backgroundColor: "#1877f2" }}
                  onClick={ () => signInWithFacebook()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="-2 0 24 20"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Button>
                {/* google */}
                <Button className="flex items-center justify-center px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500  border-gray-800"
                onClick={ () => signInWithGoogle()}
                >
                  <div className="flex items-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="w-6 h-6"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      ></path>
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      ></path>
                      <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                  </div>
                  {/* <span className="text-sm font-medium text-gray-900">Sign in with Google</span> */}
                </Button>
              </div>
              <Button onClick={ () => logout()}>Sign out</Button> 
        
              {/* <Button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
    </svg>
    Sign in with Google
    </Button> */}
              {/* <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a href="#" className="font-medium text-gray-900">
                  Sign In
                </a>
              </Typography> */}
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignIn;
