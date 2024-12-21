import { Button, Card, Checkbox, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordNotMatch , setPasswordNotMatch] = useState(false)

  const [passwordError , setPasswordError] = useState(false)
  const { id } = useParams()

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if(newPassword === "" || newPassword.length < 8){
      setPasswordError(true)
    }
    else{
      setPasswordError(false)
    }
    const userData = {
    "newPassword": newPassword,
    "userId" : id
  }
  console.log(' id   :',  id)
    axios.post("http://localhost:3002/api/v1/users/password/reset-password" ,userData).then( (res) => {
      console.log('res.status', res.status)
      if(res.status === 200){
        toast.success('Password changed successfully!', {
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
      console.log('res : ', res.data)
    }).catch( (error) => {
      console.log('error', error)
      toast.error('Password change was not successful !', {
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
    alert("Password changed successfully!");
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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* <h1>user id - {id}</h1> */}
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
    <div className="flex items-start justify-center">
    <img
            src={require("../../images/Planty's Logo.png")}
            alt=""
            className="mb-10"
          />
    </div>
        <h2 className="text-2xl font-semibold text-center text-green-600">
          Change Password
        </h2>
        <form onSubmit={handlePasswordChange} className="mt-6">
         
          
        <Card color="transparent" shadow={false}>
    
      <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="gray-600" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="New Password"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={ (e) => setNewPassword(e.target.value)}
          />

          <Typography variant="h6" color="gray-600" className="-mb-3">
            Confirm Password
          </Typography>
            <div>

          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            
            onChange={ (e) => {
              setConfirmPassword(e.target.value);
              if (e.target.value !== newPassword) {
                setPasswordNotMatch(true)
              }
              else{
                setPasswordNotMatch(false)
              }
            }}
            error= {passwordNotMatch ? "border-red-500 !border-t-red-500" : ""}
          />
                    <p className="text-red-700">{passwordNotMatch ? "Passwords not match" : ""}</p>
            </div>

        </div>
      
     
      <br/>
      </form>
    </Card>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ChangePassword;
