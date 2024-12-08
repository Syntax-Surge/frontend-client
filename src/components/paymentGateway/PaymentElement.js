import React, { useState, useEffect } from 'react';
import { PaymentElement, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import PurchaseOrderButton from '../Buttons/PurchaseOrderButton';

function PaymentElementComponent() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const product = {
    name: 'Sample Product',
    price: 2000, // Amount in cents
  };

  // useEffect(() => {
  //   // Fetch the Payment Intent client secret from the backend
  //   console.log("gpoooo");
    
  //   fetch('http://localhost:5000/create-payment-intent', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ product }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret))
  //     .catch((error) => console.error('Error fetching client secret:', error));
  // }, [product]);


  const onPurchaseOrder = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    // Confirm the payment
    const { error,paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // return_url: 'http://localhost:3000/payment-success', // Replace with your success page
      },
      redirect: 'if_required'
    });

    setLoading(false);

    if (error) {
      if (error.type === 'invalid_request_error' && error.payment_intent) {
        // Check if the payment has already succeeded
        const intentStatus = error.payment_intent.status;
        if (intentStatus === 'succeeded') {
          alert('You have already completed this payment!');
        } else {
          alert(`Payment failed: ${error.message}`);
        }
      } else {
        console.error('Payment failed:', error.message);
        alert(`Payment failed: ${error.message}`);
      }
    } else if (paymentIntent) {
      console.log(paymentIntent);
      
      if (paymentIntent.status === 'succeeded') {
        const data=await axios
        .post('http://localhost:3006/api/payment/confirmPayment', 
          {
            paymentIntent,
            "orderId":2
          })
          console.log(data);
          
        alert('Payment succeeded!');
      } else {
        alert(`Payment status: ${paymentIntent.status}`);
      }
    }
  };

  return (
    <div>
      <form className='my-4'>
        <PaymentElement />
       
        {/* <button className='mt-8 bg-green-300 w-full py-2 rounded-md' type="submit " disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Purchase'}
        </button> */}
      </form>
      <PurchaseOrderButton
                onPurchaseOrder={onPurchaseOrder}
                title={loading ? 'PROCESSING...' : 'PURCHSE ORDER'}
                className="my-2"
      />
    </div>
  )
}

export default PaymentElementComponent