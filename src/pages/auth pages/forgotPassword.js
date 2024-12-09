import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
// import Frame61 from '../../../public/images/Frame61.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userData = {
    email: email,
  };

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

  const sendMail = async () => {
    if (email === "" || !validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setIsLoading(true);
    await axios
      .post("http://localhost:3002/api/v1/users/password/forgot-password", userData)
      .then((res) => {
        console.log("res.status", res.status);
        if (res.status === 200) {
            setIsLoading(false)
          toast.success("Reset link Successfully sent", {
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
        console.log("res : ", res.data);
      })
      .catch((error) => {
        setIsLoading(false)
        console.log("error", error);
        toast.error("Sign In not successful !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
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
              <div className="mt-30"></div>
            <Typography
              variant="h4"
              color="black"
              className="font-normal text-3xl text-[#239b56] font-roboto flex justify-center items-center"
            >
              Enter email to reset Password !
            </Typography>
            {/* <Typography
              color="gray"
              className="mt-1 font-semibold text-[#3FAEAE] font-roboto flex justify-center items-center"
            >
              SignIn to explore the awesome plants
            </Typography> */}
            <form className=" mt-8 mb-2 w-full max-w-screen-xl sm:w-full">
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (email !== "" && validateEmail(email)) {
                        setEmailError(false);
                      }
                    }}
                    error={emailError ? "border-red-500" : ""}
                  />
                  <p className="text-red-700">
                    {emailError ? "Enter a valid e-mail" : ""}
                  </p>
                </div>
              </div>
              <Button
                className="mt-6 bg-[#3FAEAE] w-full lex justify-center"
                // fullWidth
                onClick={(e) => {
                  console.log("userData", userData);
                  sendMail();
                }}
                loading={isLoading}
              >
                Submit
              </Button>
              {/* <Button loading={true} className="mt-4 w-full flex justify-center">Loading</Button> */}

              <div className="relative flex py-5 items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-gray-400">Or Sign In</span>
                <div class="flex-grow border-t border-gray-400"></div>
              </div>
              <Link to={"/auth/signIn"}>
                {" "}
                <Button
                  className="mt-6 bg-inherit  text-[#239b56] border-[#239b56]  border-solid border-2"
                  fullWidth
                >
                  Go Back
                </Button>
              </Link>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
