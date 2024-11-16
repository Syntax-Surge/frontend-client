import React, { useState, useEffect } from 'react';
import { PaymentElement, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

function PaymentElementComponent() {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('pi_3QLgzsJ0oMtKGRpA0pVLyOYC_secret_0IZSnAlNHuBK213looev8m7ZB');
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


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    // Confirm the payment
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/payment-success', // Replace with your success page
      },
    });

    setLoading(false);

    if (error) {
      console.error('Payment failed:', error.message);
      alert(`Payment failed: ${error.message}`);
    } else {
      alert('Payment succeeded!');
    }
  };

  return (
    <div>PaymentElement
          <h1>Stripe Payment</h1>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay'}
        </button>
      </form>
    </div>
  )
}

export default PaymentElementComponent