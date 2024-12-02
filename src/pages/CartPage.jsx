import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Input,
  Typography,
  IconButton,
  Checkbox,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ApplyCouponButton from "../components/Buttons/ApplyCouponButton";
import CheckoutButton from "../components/Buttons/CheckoutButton";
import axios from "axios";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [productId, setProductId] = useState(null);
  const userId = 4; //
  const url = "http://localhost:8080/api";
  //const ProductId = null;

  const handleCheckout = () => {};

  // Fetch cart items from the backend
  const fetchCartItems = async () => {
    try {
      const response = await axios.get(url + `/cart/${userId}`);
      setCartItems(response.data);
      console.log(response.data);
      const ProductId = response.data[0].productId;
      setProductId(ProductId);
    } catch (error) {
      console.error("Error fetching cart items:", error.message);
    }
  };

  // Add or update cart item quantity

  const handleQuantityChange = async (id, amount) => {
    const item = cartItems.find((item) => item.productId === id);
    if (!item) return;

    try {
      await axios.post(url + `/cart/add`, {
        userId,
        productId: id,
        quantity: amount,
      });
      fetchCartItems(); // Refresh cart
    } catch (error) {
      console.error("Error updating item quantity:", error.message);
    }
  };

  const handleRemoveFromSelected = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.filter((itemId) => itemId !== id)
    );
  };

  // Remove an item from the cart
  const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(url + `/cart/remove/${id}`, {
        data: { userId, productId: id },
      });
      fetchCartItems(); // Refresh cart
    } catch (error) {
      console.error("Error removing item from cart:", error.message);
    }
  };

  // Handle item selection for checkout
  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  useEffect(() => {
    console.log("testing...123");
    fetchCartItems(); // Fetch cart items on page load
  }, []);
  console.log("productId", productId);

  const selectedCartItems = cartItems.filter((item) =>
    selectedItems.includes(item.id)
  );
  const otherCartItems = cartItems.filter(
    (item) => !selectedItems.includes(item.id)
  );

  const subTotal = selectedCartItems.reduce(
    (acc, item) => acc + item.product.unitPrice * item.quantity,
    0
  );
  const discount = selectedCartItems.length > 0 ? 10 : 0; // Example discount
  const total = subTotal - discount;

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
              Selected Items
            </Typography>
            {selectedCartItems.length > 0 ? (
              <div className="overflow-x-auto mb-6">
                <table className="table-auto w-full text-left">
                  <thead>
                    <tr>
                      <th className="p-2">Select</th>
                      <th className="p-2">Products</th>
                      <th className="p-2">Price</th>
                      <th className="px-10">Quantity</th>
                      <th className="p-2">Subtotal</th>
                      <th className="p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="p-2">
                          <Checkbox
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleSelectItem(item.id)}
                          />
                        </td>
                        <td className="p-2 flex items-center space-x-2">
                          <img
                            src={item.product.pictureLocation}
                            alt={item.product.productName}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <Typography>{item.product.productName}</Typography>
                        </td>
                        <td className="p-2">Rs.{item.product.unitPrice}</td>
                        <td className="mb-4 p-2 flex items-center justify-center border border-gray-300 shadow-md">
                          <Button
                            size="sm"
                            className="bg-white text-gray-800"
                            style={{ fontSize: "24px" }}
                            onClick={() =>
                              handleQuantityChange(item.productId, -1)
                            }
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
                            onClick={() =>
                              handleQuantityChange(item.productId, 1)
                            }
                          >
                            +
                          </Button>
                        </td>
                        <td className="px-7">
                          Rs.{item.product.unitPrice * item.quantity}
                        </td>
                        <td className="p-2">
                          <IconButton
                            onClick={() => handleRemoveFromSelected(item.id)}
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
            ) : (
              <Typography className="text-center text-gray-500">
                No items selected.
              </Typography>
            )}

            <Typography variant="h5" className="mb-4 font-semibold">
              Other Items
            </Typography>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="p-2">Select</th>
                    <th className="p-2">Products</th>
                    <th className="p-2">Price</th>
                    <th className="px-10">Quantity</th>
                    <th className="p-2">Subtotal</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {otherCartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-2">
                        <Checkbox
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleSelectItem(item.id)}
                        />
                      </td>
                      <td className="p-2 flex items-center space-x-2">
                        <img
                          src={item.product.pictureLocation}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <Typography>{item.product.productName}</Typography>
                      </td>
                      <td className="p-2">Rs.{item.product.unitPrice}</td>
                      <td className="mb-4 p-2 flex items-center justify-center border border-gray-300 shadow-md">
                        <Button
                          size="sm"
                          className="bg-white text-gray-800"
                          style={{ fontSize: "24px" }}
                          onClick={() =>
                            handleQuantityChange(item.productId, -1)
                          }
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
                          onClick={() =>
                            handleQuantityChange(item.productId, 1)
                          }
                        >
                          +
                        </Button>
                      </td>
                      <td className="px-7">
                        Rs.{item.product.unitPrice * item.quantity}
                      </td>
                      <td className="p-2">
                        <IconButton
                          onClick={() => handleRemoveFromCart(item.productId)}
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
          {/* Cart Total */}
          <Card className="p-6 shadow-lg">
            <Typography variant="h5" className="mb-4 font-semibold">
              Selected Items Total
            </Typography>
            <div className="flex justify-between">
              <Typography>Sub-total:</Typography>
              <Typography>Rs.{subTotal.toFixed(2)}</Typography>
            </div>
            <div className="flex justify-between my-2">
              <Typography>Discount:</Typography>
              <Typography>Rs.{discount.toFixed(2)}</Typography>
            </div>
            <hr className="mt-3 mb-3 border-gray-400" />
            <div className="flex justify-between font-bold">
              <Typography>Total:</Typography>
              <Typography>Rs.{total.toFixed(2)}</Typography>
            </div>
            <div className="mt-8">
              <CheckoutButton
                onClick={handleCheckout}
                disabled={selectedItems.length === 0}
              />
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

// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Card,
//   Input,
//   Typography,
//   IconButton,
//   Checkbox,
// } from "@material-tailwind/react";
// import { XMarkIcon } from "@heroicons/react/24/solid";
// import ApplyCouponButton from "../components/Buttons/ApplyCouponButton";
// import CheckoutButton from "../components/Buttons/CheckoutButton";
// import axios from "axios";

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);

//   const userId = 4; // Replace with dynamic userId based on the logged-in user

//   useEffect(() => {
//     // Fetch cart items from the backend
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/cart/${userId}`
//         );
//         setCartItems(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error(
//           "Error fetching cart items:",
//           error.response?.data || error.message
//         );
//       }
//     };

//     fetchCartItems();
//   }, [userId]);

//   const handleQuantityChange = async (id, amount) => {
//     const item = cartItems.find((item) => item.id === id);
//     if (item) {
//       const newQuantity = Math.max(1, item.quantity + amount);

//       try {
//         await axios.post(`/api/cart/add`, {
//           userId,
//           productId: item.productId,
//           quantity: amount,
//         });
//         setCartItems((prevItems) =>
//           prevItems.map((item) =>
//             item.id === id ? { ...item, quantity: newQuantity } : item
//           )
//         );
//       } catch (error) {
//         console.error(
//           "Error updating item quantity:",
//           error.response?.data || error.message
//         );
//       }
//     }
//   };

//   const handleRemoveFromCart = async (id) => {
//     const item = cartItems.find((item) => item.id === id);

//     if (item) {
//       try {
//         await axios.delete(`/api/cart/remove`, {
//           data: { userId, productId: item.productId },
//         });
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//       } catch (error) {
//         console.error(
//           "Error removing item from cart:",
//           error.response?.data || error.message
//         );
//       }
//     }
//   };

//   const handleSelectItem = (id) => {
//     setSelectedItems((prevSelected) =>
//       prevSelected.includes(id)
//         ? prevSelected.filter((itemId) => itemId !== id)
//         : [...prevSelected, id]
//     );
//   };

//   const selectedCartItems = cartItems.filter((item) =>
//     selectedItems.includes(item.id)
//   );
//   const otherCartItems = cartItems.filter(
//     (item) => !selectedItems.includes(item.id)
//   );

//   const subTotal = selectedCartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const discount = selectedCartItems.length > 0 ? 10 : 0; // Example discount
//   const total = subTotal - discount;

//   return (
//     <div className="min-h-screen bg-green-50 py-10">
//       <div className="container mx-auto">
//         <Typography
//           variant="h3"
//           className="text-center mb-6 font-bold bg-white h-20 py-5 rounded-lg shadow-md"
//           style={{ marginTop: "-20px" }}
//         >
//           Cart
//         </Typography>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Shopping Card */}
//           <Card className="p-6 col-span-2 shadow-lg">
//             <Typography variant="h5" className="mb-4 font-semibold">
//               Selected Items
//             </Typography>
//             {selectedCartItems.length > 0 ? (
//               <div className="overflow-x-auto mb-6">
//                 <table className="table-auto w-full text-left">
//                   <thead>
//                     <tr>
//                       <th className="p-2">Select</th>
//                       <th className="p-2">Products</th>
//                       <th className="p-2">Price</th>
//                       <th className="px-10">Quantity</th>
//                       <th className="p-2">Subtotal</th>
//                       <th className="p-2">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {selectedCartItems.map((item) => (
//                       <tr key={item.id} className="border-b">
//                         <td className="p-2">
//                           <Checkbox
//                             checked={selectedItems.includes(item.id)}
//                             onChange={() => handleSelectItem(item.id)}
//                           />
//                         </td>
//                         <td className="p-2 flex items-center space-x-2">
//                           <img
//                             src={item.product.image}
//                             alt={item.product.name}
//                             className="w-12 h-12 object-cover rounded"
//                           />
//                           <Typography>{item.product.name}</Typography>
//                         </td>
//                         <td className="p-2">Rs.{item.product.price}</td>
//                         <td className="mb-4 p-2 flex items-center justify-center border border-gray-300 shadow-md">
//                           <Button
//                             size="sm"
//                             className="bg-white text-gray-800"
//                             style={{ fontSize: "24px" }}
//                             onClick={() => handleQuantityChange(item.id, -1)}
//                           >
//                             -
//                           </Button>
//                           <Typography className="px-5 ">
//                             {item.quantity}
//                           </Typography>
//                           <Button
//                             size="sm"
//                             style={{ fontSize: "20px" }}
//                             className="bg-white text-gray-800"
//                             onClick={() => handleQuantityChange(item.id, 1)}
//                           >
//                             +
//                           </Button>
//                         </td>
//                         <td className="px-7">
//                           Rs.{item.product.price * item.quantity}
//                         </td>
//                         <td className="p-2">
//                           <IconButton
//                             onClick={() => handleRemoveFromCart(item.id)}
//                             className="text-red-900 bg-gray-100 rounded-2xl border border-gray-500"
//                             size="sm"
//                           >
//                             <XMarkIcon className="h-4 w-4" />
//                           </IconButton>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             ) : (
//               <Typography className="text-center text-gray-500">
//                 No items selected.
//               </Typography>
//             )}

//             {/* Other items */}
//           </Card>

//           {/* Cart Total */}
//           <Card className="p-6 shadow-lg">
//             <Typography variant="h5" className="mb-4 font-semibold">
//               Selected Items Total
//             </Typography>
//             <div className="flex justify-between">
//               <Typography>Sub-total:</Typography>
//               <Typography>Rs.{subTotal.toFixed(2)}</Typography>
//             </div>
//             <div className="flex justify-between my-2">
//               <Typography>Discount:</Typography>
//               <Typography>Rs.{discount.toFixed(2)}</Typography>
//             </div>
//             <hr className="mt-3 mb-3 border-gray-400" />
//             <div className="flex justify-between font-bold">
//               <Typography>Total:</Typography>
//               <Typography>Rs.{total.toFixed(2)}</Typography>
//             </div>
//             <div className="mt-8">
//               <CheckoutButton disabled={selectedItems.length === 0} />
//             </div>

//             {/* Coupon Code */}
//             <div className="mt-10">
//               <Typography variant="h5" className="mb-4 font-semibold">
//                 Apply Coupon Code
//               </Typography>
//               <div
//                 className="items-center space-x-2 mt-5"
//                 style={{ width: "376px" }}
//               >
//                 <Input type="text" placeholder="Enter Coupon Code" />
//               </div>
//               <div className="mt-4">
//                 <ApplyCouponButton />
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;