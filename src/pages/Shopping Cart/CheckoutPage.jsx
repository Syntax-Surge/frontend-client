import { useCustomContext } from "../../contexts/Context.js";
import { Card, Input, Typography } from "@material-tailwind/react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentElementComponent from '../../components/paymentGateway/PaymentElement';
import PlaceOrderButton from "../../components/Buttons/PlaceOrderButton";
import PurchaseOrderButton from "../../components/Buttons/PurchaseOrderButton.jsx";

const stripePromise = loadStripe('pk_test_51QLLasJ0oMtKGRpAMtPenfN7BmuRRhxy0IrWx9p4bwZOzSdlHmBsmVaZztHSjRTha9bz9yo6a1jQiDZsuSXal6hz00rUuInQtc');


const CheckoutPage = () => {
  const [selectedItems, setSelectedItems] = useState([{"productId":2,"productName":"kaktus","quantity":3,"pictureLocation":"","subTotal":5200,"price":200},{"productId":2,"productName":"kaktus","quantity":3,"pictureLocation":"","subTotal":5200,"price":200}]);

  useEffect(() => {
    console.log("Selected items in checkout:", selectedItems);
  }, [selectedItems]);

  const [errors, setErrors] = useState({});
  const [clientSecret, setClientSecret] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    "firstName": "",
    "lastName":"",
    "addressLine1": "",
    "addressLine2":"",
    "city":"",
    "postalCode":"",
    "phone":"",
    "note":"",
    "shippingMethod":1
  });
  const [total, setTotal] = useState({"itemTotal":selectedItems.reduce((acc, s) => acc + s.subTotal, 0),"shipping":400.00});

  const {itemTotal,shipping}=total

  const handleShippingChange = (value) => {
    setTotal((prevTotal) => ({
      ...prevTotal,
      shipping: value,
    }));
  };

  const {addressLine1,addressLine2,city,postalCode,firstName,lastName,phone,note,shippingMethod}=shippingDetails


  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // Example: 10-digit phone number
    const postalCodeRegex = /^[0-9]{5}$/; // Example: 5-digit postal code
    if (!shippingDetails.addressLine1.trim()) newErrors.addressLine1 = "Address Line 1 is required.";
    if (!shippingDetails.city.trim()) newErrors.city = "City is required.";
    if (!shippingDetails.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required.";
    } else if (!postalCodeRegex.test(shippingDetails.postalCode)) {
      newErrors.postalCode = "Invalid postal code.";
    }
    if (!shippingDetails.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(shippingDetails.phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    return newErrors;
  };

  const onPlaceOrder = async () => {
    console.log("shippingDetails");
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", shippingDetails);
    

    axios
      .post('http://localhost:3006/api/payment/createIntent', 
        {
          "customer": {
            "id": 1,
            "name": "John Doe"
          },
          "shipping": {
            "addressLine1": "123 Elm Street",
            "addressLine2": "Apt 4B",
            "city": "Springfield",
            "state": "pending",
            "postalCode": "62704",
            "country": "USA"
          },
          "total":(shipping + itemTotal).toFixed(2),
          "items": selectedItems
        })
      .then((response) => {
        const data = response.data; // Access the response data
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
          setOrderPlaced(true)
        } else {
          console.error('Failed to get client secret');
        }
      })
      .catch((error) => {
        console.error('Error fetching client secret:', error);
      });
    } else {
      console.log("Validation errors", formErrors);
    }
      
  }

  const getShippingAddress = async () => {
    const data = await axios.get('localhost/user shipping address', {
    })
    const {addressLine1,addressLine2,city,postalCode}=data

    setShippingDetails({
      "addressLine1":addressLine1 || "",
      "addressLine2":addressLine2 || "",
      "city":city || "",
      "postalCode":postalCode || ""
    })
  }

const formChange=(e)=>{
  const { name, value } = e.target;

  setShippingDetails((prevShippingDetails) => ({
    ...prevShippingDetails,
    [name]: value,
  }));
}

  useEffect(() => {
    // getShippingAddress()
   
  }, [])
  // useEffect(() => {
  //   console.log("fetch");

  //   if(clientSecret == ''){
  //     console.log("secrat");
  //     fetch('http://localhost:5000/create-payment-intent', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ product: { name: 'Sample Product', price: 2000 } }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.clientSecret) {
  //           setClientSecret(data.clientSecret);
  //         } else {
  //           console.error('Failed to get client secret');
  //         }
  //       })
  //       .catch((error) => console.error('Error fetching client secret:', error));
  //   }
  //   // Fetch the PaymentIntent client secret from your backend

  // }, []);

  const stripeOptions = {
    clientSecret, // Pass the client secret to Elements
  };

  return (
    <div className="min-h-screen bg-green-50 py-10">
      <div className="container mx-auto">
        <Typography
          variant="h3"
          className="text-center mb-6 font-bold bg-white h-20 py-5 rounded-lg shadow-md"
          style={{ marginTop: "-20px" }}
        >
          Checkout
        </Typography>
        <div className="flex justify-center p-2 bg-white my-4 rounded-lg">
          selected Items
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Shopping Card */}
          <Card className="p-6 col-span-2 shadow-lg">
            <Typography variant="h5" className="mb-4 font-semibold">
             Shipping Details
            </Typography>
            <form className="my-2">
              <div className="grid gap-4">
                {/* <select className="w-full border-gray-300 rounded-md p-2">
                  <option value="Turkey">Turkey</option>
                </select> */}
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name={"firstName"}
                    value={firstName}
                    onChange={(e)=>formChange(e)}
                    placeholder="First name"
                    color="teal" 
                    label="FirstName"
                    className=" rounded-md p-2"
                  />
                  <Input
                    type="text"
                    name={"lastName"}
                    value={lastName}
                    onChange={(e)=>formChange(e)}
                    placeholder="Last name"
                    color="teal" 
                    label="LastName"
                    className=" rounded-md p-2"
                  />
                </div>
                <Input
                  type="text"   
                  name={"addressLine1"}
                  value={addressLine1}
                  onChange={(e)=>formChange(e)}
                  placeholder="Address Line 1"
                  color="teal" 
                  label="Address Line 1"
                  className=" rounded-md p-2"
                />
                {errors.addressLine1 && <p className="error text-red-400 text-sm">{errors.addressLine1}</p>}
                <Input
                  type="text"   
                  name={"addressLine2"}
                  value={addressLine2}
                  onChange={(e)=>formChange(e)}
                  placeholder="Address Line 2"
                  color="teal" 
                    label="Address Line 2"
                    className=" rounded-md p-2"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name={"city"}
                    value={city}
                    onChange={(e)=>formChange(e)}
                    placeholder="City"
                    color="teal" 
                    label="City"
                    className=" rounded-md p-2"
                  />
                 
                  <Input
                    type="text"
                    name={"postalCode"}
                    value={postalCode}
                    onChange={(e)=>formChange(e)}
                    placeholder="Postal code"
                    color="teal" 
                    label="Postal Code"
                    className=" rounded-md p-2"
                  />

                </div>
                {errors.postalCode && <p className="error text-red-400 text-sm">{errors.postalCode}</p>}
                {errors.city && <p className="error text-red-400 text-sm">{errors.city}</p>}
                <Input
                  type="text"
                  name={"phone"}
                  value={phone}
                  onChange={(e)=>formChange(e)}
                  placeholder="Phone"
                  color="teal" 
                    label="Mobile Phone"
                    className=" rounded-md p-2"
                />
                {errors.phone && <p className="error text-red-400 text-sm">{errors.phone}</p>}
                <Input
                  type="text"
                  name={"note"}
                  value={note}
                  onChange={(e)=>formChange(e)}
                  placeholder="Note"
                  color="teal" 
                    label="Note"
                    className=" rounded-md p-2"
                />
              </div>
            </form>
            <div className="flex flex-col   my-4 ">
              <label className="flex font-semibold bg-gray-200 rounded-t-md items-center justify-between pb-2  pt-4 px-4 ">
                <div >
                  <input type="radio" name="shipping" className="mr-2" 
                  value={0}
                  checked={shipping === 0} // Bind selected value
                  onChange={(e) => handleShippingChange(parseFloat(e.target.value))}/>
                  30 Days
                </div>
                <span>Free</span>
              </label>
              <label className="flex  font-semibold items-center bg-gray-200 justify-between pt-2 pb-4 px-4 rounded-t-none rounded-b-lg">
                <div>
                  <input type="radio" name="shipping" className="mr-2" 
                  value={400}
                  checked={shipping === 400} // Bind selected value
                  onChange={(e) => handleShippingChange(parseFloat(e.target.value))}/>
                  Fast shipping | 2 Days
                </div>
                <span>400.00</span>
              </label>
            </div>
            <PlaceOrderButton
                onPlaceOrder={onPlaceOrder}
                state={orderPlaced ? true :false}
                className="py-2"
              />
            {/* <button onClick={onPurchase} disabled={orderPlaced} className={`mt-8  ${orderPlaced ? "bg-gray-200" : "bg-green-400"}  font-semibold w-full py-2 rounded-md' type="submit`}>
            {orderPlaced ? "Placed Order" : "Place Order"}
            </button> */}
          </Card>
          {/* Cart Total */}
          <Card className="p-6 col-span-2 shadow-lg">
            <Typography variant="h5" className="mb-4 font-semibold">
              Card Details
            </Typography>
            <div className="flex justify-between">
              <Typography>Sub-total:</Typography>
              <Typography>Rs.{itemTotal.toFixed(2)}</Typography>
            </div>
            <div className="flex justify-between my-2">
              <Typography>Shipping:</Typography>
              <Typography>Rs.{shipping.toFixed(2)}</Typography>
            </div>
            <hr className="mt-3 mb-3 border-gray-400" />
            <div className="flex justify-between font-bold">
              <Typography>Total:</Typography>
              <Typography>Rs. {(shipping + itemTotal).toFixed(2) }</Typography>
            </div>
            <div className="mt-8">
            
            </div>
            <div>
            {clientSecret && (
              <Elements stripe={stripePromise} options={stripeOptions}>
                <PaymentElementComponent />
              </Elements>
            )}
            </div>

            {/* Coupon Code */}
            
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
