import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentElementComponent from '../components/paymentGateway/PaymentElement';

// Load your Stripe publishable key
const stripePromise = loadStripe('pk_test_51QLLasJ0oMtKGRpAMtPenfN7BmuRRhxy0IrWx9p4bwZOzSdlHmBsmVaZztHSjRTha9bz9yo6a1jQiDZsuSXal6hz00rUuInQtc');

function Checkout() {
  const [clientSecret, setClientSecret] = useState('');

  const onPurchase=async()=>{
    axios
    .post('http://localhost:5000/create-payment-intent', {
      product: { name: 'Sample Product', price: 2000 },
    })
    .then((response) => {
      const data = response.data; // Access the response data
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        console.error('Failed to get client secret');
      }
    })
    .catch((error) => {
      console.error('Error fetching client secret:', error);
    });
  }

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
    <div>
      <h1>Checkout</h1>
      <button onClick={onPurchase}>purchase</button>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={stripeOptions}>
          <PaymentElementComponent />
        </Elements>
      ) : (
        <p>Loading payment options...</p>
      )}
    </div>
  );
}

export default Checkout;
