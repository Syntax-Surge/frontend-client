import React, { useEffect } from 'react'
import { useCustomContext } from '../../contexts/Context';





const CheckoutPage = () => {
  const { puchaseItems } = useCustomContext();

  
  useEffect(() => {
    console.log("Items passed to this component:", puchaseItems);
  }, [puchaseItems]);

  return (
    <div>

    </div>
  )
}

export default CheckoutPage