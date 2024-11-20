import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Import the remove icon
import ApplyCouponButton from "../components/Buttons/ApplyCouponButton";
import CheckoutButton from "../components/Buttons/CheckoutButton";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 70,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      id: 2,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 70,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 70,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 70,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 24;
  const total = subTotal - discount;

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-green-50 py-10">
      <div className="container mx-auto">
        <Typography
          variant="h3"
          className="text-center mb-6 font-bold bg-white h-20 py-5 rounded-lg shadow-md"
          style={{ marginTop: "-20px" }}
        >
          Cart
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Shopping Card */}

          <Card className="p-6 col-span-2 shadow-lg">
            <Typography variant="h5" className="mb-4 font-semibold">
              Added Items
            </Typography>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="p-2">Products</th>
                    <th className="p-2">Price</th>
                    <th className="px-10">Quantity</th>
                    <th className="p-2">Subtotal</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-2 flex items-center space-x-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <Typography>{item.name}</Typography>
                      </td>
                      <td className="p-2">${item.price}</td>
                      <td className="mb-4 p-2 flex items-center justify-center border border-gray-300 shadow-md">
                        <Button
                          size="sm"
                          className="bg-white text-gray-800"
                          style={{ fontSize: "24px" }}
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </Button>
                        <Typography className="px-5 ">
                          {item.quantity}
                        </Typography>
                        <Button
                          size="sm"
                          style={{ fontSize: "20px" }}
                          className="bg-white text-gray-800"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </Button>
                      </td>
                      <td className="px-7">${item.price * item.quantity}</td>
                      <td className="p-2">
                        <IconButton
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-900 bg-gray-100 rounded-2xl border border-gray-500"
                          size="sm"
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Card Total */}

          <Card className="p-6 shadow-lg">
            <Typography variant="h5" className="mb-4 font-semibold">
              Cart Total
            </Typography>
            <div className="flex justify-between">
              <Typography>Sub-total:</Typography>
              <Typography>${subTotal}</Typography>
            </div>
            <div className="flex justify-between my-2">
              <Typography>Discount:</Typography>
              <Typography>${discount}</Typography>
            </div>
            <hr className="mt-3 mb-3 border-gray-400" />
            <div className="flex justify-between font-bold">
              <Typography>Total:</Typography>
              <Typography>${total.toFixed(2)}</Typography>
            </div>
            <div className="mt-8">
              <CheckoutButton />
            </div>

            {/* Coupon Code */}

            <div className="mt-10">
              <Typography variant="h5" className="mb-4 font-semibold">
                Apply Coupon Code
              </Typography>
              <div
                className="items-center space-x-2 mt-5"
                style={{ width: "376px" }}
              >
                <Input type="text" placeholder="Enter Coupon Code" />
              </div>
              <div className="mt-4">
                <ApplyCouponButton />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
