import React, { useState, useEffect } from 'react';
import { PaymentElement, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import PurchaseOrderButton from '../Buttons/PurchaseOrderButton';
import { useCustomContext } from '../../contexts/Context';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function PaymentElementComponent() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const { setOrderSideBar } = useCustomContext();
  const navigate = useNavigate();

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
    try{
      event.preventDefault();

      if (!stripe || !elements) return;
  
      setLoading(true);

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
          .post('http://localhost:3002/api/v1/orders/payment/confirmPayment', 
            {
              paymentIntent,
              "orderId":2
            })
            console.log(data);
            setOrderSideBar('orders')  
            toast.success("payment successful", {
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
                navigate('/myAccount');
              }, 5000); 
        } else {
          toast.error(`Payment status: ${paymentIntent.status}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            }); 
          // alert(`Payment status: ${paymentIntent.status}`);
        }
      }
  
    }catch(e){
      toast.error(`Payment failed`, {
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
   
    // Confirm the payment


   
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