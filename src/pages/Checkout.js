import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentElementComponent from '../components/paymentGateway/PaymentElement';

// Load your Stripe publishable key
const stripePromise = loadStripe('pk_test_51QLLasJ0oMtKGRpAMtPenfN7BmuRRhxy0IrWx9p4bwZOzSdlHmBsmVaZztHSjRTha9bz9yo6a1jQiDZsuSXal6hz00rUuInQtc');

function Checkout() {
  const [clientSecret, setClientSecret] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedItems, setSelectedItems] = useState([{"productId":2,"productName":"kaktus","quantity":3,"pictureLocation":"","subTotal":5200,"price":200},{"productId":2,"productName":"kaktus","quantity":3,"pictureLocation":"","subTotal":5200,"price":200}]);
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

  const {addressLine1,addressLine2,city,postalCode,firstName,lastName,phone,note,shippingMethod}=shippingDetails

  const onPurchase = async () => {
    console.log(shippingDetails);
    
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
          "total":5400.00,
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
    <div  className="min-h-screen bg-green-50 py-10">
      <div className=" flex flex-col">
        {/* Card Totals */}
        <div className='flex flex-row p-6'>
          <div className="w-full  border border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold mb-4">Card Totals</h3>
            <div className="flex justify-between items-center mb-2">
              <span>Sub-total:</span>
              <span className="font-medium">$382</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Discount:</span>
              <span className="font-medium text-red-500">-$24</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>$357.99 USD</span>
            </div>
          </div>
          <div className="w-full  border border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-semibold mb-4">Card Totals</h3>
            <div className="flex justify-between items-center mb-2">
              <span>Sub-total:</span>
              <span className="font-medium">$382</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Discount:</span>
              <span className="font-medium text-red-500">-$24</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>$357.99 USD</span>
            </div>
          </div>
        </div>

        {/* checkout section */}
        {/* Delivery */}
        <div className='flex flex-col md:flex-row  p-8 gap-8'>
          <div className="w-full border border-gray-200  p-4">
            <h3 className="text-xl font-bold mb-4 ">Delivery</h3>
            <form>
              <div className="grid gap-4">
                {/* <select className="w-full border-gray-300 rounded-md p-2">
                  <option value="Turkey">Turkey</option>
                </select> */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name={"firstName"}
                    value={firstName}
                    onChange={(e)=>formChange(e)}
                    placeholder="First name"
                    className="border-2 border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="text"
                    name={"lastName"}
                    value={lastName}
                    onChange={(e)=>formChange(e)}
                    placeholder="Last name"
                    className="border-2 border-gray-300 rounded-md p-2"
                  />
                </div>
                <input
                  type="text"   
                  name={"addressLine1"}
                  value={addressLine1}
                  onChange={(e)=>formChange(e)}
                  placeholder="Address Line 1"
                  className="border-2 border-gray-300 rounded-md p-2"
                />
                <input
                  type="text"   
                  name={"addressLine2"}
                  value={addressLine2}
                  onChange={(e)=>formChange(e)}
                  placeholder="Address Line 2"
                  className="border-2 border-gray-300 rounded-md p-2"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name={"city"}
                    value={city}
                    onChange={(e)=>formChange(e)}
                    placeholder="City"
                    className="border-2 border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="text"
                    name={"postalCode"}
                    value={postalCode}
                    onChange={(e)=>formChange(e)}
                    placeholder="Postal code"
                    className=" border-2 border-gray-300 rounded-md p-2"
                  />

                </div>
                <input
                  type="text"
                  name={"phone"}
                  value={phone}
                  onChange={(e)=>formChange(e)}
                  placeholder="Phone"
                  className="border-2 border-gray-300 rounded-md p-2"
                />
                <input
                  type="text"
                  name={"note"}
                  value={note}
                  onChange={(e)=>formChange(e)}
                  placeholder="Note"
                  className="border-2 border-gray-300 rounded-md p-2"
                />
              </div>
            </form>
            <hr className="my-4" />
            <h4 className="text-md font-bold mb-2">Shipping method</h4>
            <div className="flex flex-col   my-4 ">
              <label className="flex font-semibold bg-gray-200 rounded-t-md items-center justify-between pb-2  pt-4 px-4 ">
                <div >
                  <input type="radio" name="shipping" className="mr-2" />
                  30 Days
                </div>
                <span>Free</span>
              </label>
              <label className="flex  font-semibold items-center bg-gray-200 justify-between pt-2 pb-4 px-4 rounded-t-none rounded-b-lg">
                <div>
                  <input type="radio" name="shipping" className="mr-2" />
                  Fast shipping | 2 Days
                </div>
                <span>$24.99</span>
              </label>
            </div>
            <button onClick={onPurchase} disabled={orderPlaced} className={`mt-8  ${orderPlaced ? "bg-gray-200" : "bg-green-400"}  font-semibold w-full py-2 rounded-md' type="submit`}>
            {orderPlaced ? "Placed Order" : "Place Order"}
            </button>
          </div>
          {/* Secure Checkout */}
          <div className="w-full border border-gray-200  p-4">
            <h3 className="text-xl font-bold mb-4">Secure Checkout</h3>
            <div className='flex flex-col gap-8'>
            <div>
            <div className="w-full  border-b-2 border-gray-200 pb-4">
            <div className="flex justify-between items-center mb-2">
              <span>Item total:</span>
              <span className="font-medium">Rs. {itemTotal}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Shipping:</span>
              <span className="font-medium text-red-500">Rs. {shipping}</span>
            </div>
            <hr className="my-2" />
            <div className="flex my-4 justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>Rs. {(shipping + itemTotal) }</span>
            </div>
          </div>
          </div>
          <div>
            {clientSecret && (
              <Elements stripe={stripePromise} options={stripeOptions}>
                <PaymentElementComponent />
              </Elements>
            )}
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Checkout;
