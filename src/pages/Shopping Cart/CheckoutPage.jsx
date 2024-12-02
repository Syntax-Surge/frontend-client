import React, { useEffect } from "react";
import { useCustomContext } from "../../contexts/Context.js";

const CheckoutPage = () => {
  // Access selectedItems from Context
  const { selectedItems, setSelectedItems } = useCustomContext();

  useEffect(() => {
    console.log("Selected items in checkout:", selectedItems);
  }, [selectedItems]);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h3 className="text-center mb-6 text-xl font-bold">Checkout Page</h3>
        {/* Display selected items */}
        <div>
          {selectedItems?.length > 0 ? (
            <ul>
              {selectedItems?.map((item, index) => (
                <li key={index}>
                  <span>
                    {item.name} - {item.quantity}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No items selected.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
