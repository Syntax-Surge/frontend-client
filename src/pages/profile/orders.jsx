import React, { useState, useEffect } from 'react'
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";
import axios from 'axios';












const Orders = () => {

  const TABLE_HEAD = ["Number ID", "Number of items", "Status", "Price"];
  const [open, setOpen] = React.useState(false);
  const [openReview, setOpenReview] = React.useState(false);
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState();
  const [selectId, setSelectId] = useState();
  const [refreshDetails, setRefreshDetails] = useState(false);
  const [error, setError] = useState();
  const [orders, setOrders] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [response, setResponse] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  const [shippingMethod, setShippingMethod] = useState();
  const [reviewProductId, setReviewProductId] = useState();
  const [reviewProductName, setReviewProductName] = useState();
  const [reviewProductLocation, setReviewProductLocation] = useState();
  const [reviewUnitPrice, setReviewUnitPrice] = useState();
  const [userReview, SetUserReview] = useState();
  const [rating, setRating] = useState();
  const [editMode, setEditMode] = useState();
  const [ReviewsByUser, setReviewsByUser] = useState();

  useEffect(() => {
    const userData = async () => {
      //   setLoading(true); // Start loading
      try {
        const response = await axios.get(`http://localhost:3002/api/v1/users/profile/user/getOrders?id=${userId}`,{ withCredentials: true }); // Replace with your API endpoint 
        console.log(response);
        


        // console.log(response.data.orderItems);

        setOrders(response.data.orderItems); // Save response data to state
        console.log(orders);

        // console.log(orders);

      } catch (err) {
        setError(err.message); // Handle errors
      }
    };

    userData();
  }, [refreshDetails]);








  const handleOpen = async (orderId, index, payment, shippingMethod) => {
    console.log(orderId);
    console.log(index);
    let itemData;
    if (index) {
      itemData = orders[index].items;
    } else if (index === 0) {
      itemData = orders[index].items;
    } else {
      itemData = 0;
      console.log("no index");
    }

    console.log(itemData);
    setSelectedData(itemData);
    setSelectId(orderId);
    setTotalAmount(payment);
    setOpen(!open);
    setShippingMethod(shippingMethod);

  };

  const CloseReview = () => {
    setOpenReview(!openReview);
    setEditMode(false);
  }

  const handleOpenReview = async (productName, unitPrice, productLocation, reviewProductId) => {
    console.log(productName);
    console.log(unitPrice);
    console.log(productLocation);
    setReviewProductName(productName);
    setReviewUnitPrice(unitPrice);
    setReviewProductLocation(productLocation);
    setReviewProductId(reviewProductId);

    try {
      console.log(userId);
      
      const ReviewByUser = await axios.get(`http://localhost:3002/api/v1/products/reviews/getReviewsForUser?userId=${userId}&productId=${reviewProductId}`,{ withCredentials: true });
      setReviewsByUser(ReviewByUser.data);
      console.log(ReviewByUser.data);
    } catch (error) {
      console.log(error);
      
    }


    
    // setOpen(!open);
    setOpenReview(!openReview);
  };

  const handleReviewSubmit = async () => {

    try {
      let data = {
        productId: reviewProductId,
        userId: userId,
        rating: rating,
        description: userReview,
      }
      const res = await axios.post(`http://localhost:3002/api/v1/products/reviews`, data);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
      return
    }

    setOpenReview(!openReview);
  };

  const handleReviewUpdate = async () => {

    try {
      let data = {
        productId: reviewProductId,
        userId: userId,
        rating: rating,
        description: userReview,
      }
      const res = await axios.put(`http://localhost:3002/api/v1/products/reviews`, data);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
      return
    }

    setOpenReview(!openReview);
  };

  // const groupByOrderId = (data) => {
  //   return data.reduce((acc, curr) => {
  //     // Ensure we're grouping based on orderId
  //     if (!acc[curr.orderId]) {
  //       acc[curr.orderId] = []; // Initialize an array for each orderId
  //     }
  //     acc[curr.orderId].push(curr); // Push the current item into the corresponding group
  //     return acc;
  //   }, {});
  // };

  // const groupedData = groupByOrderId(orders);

  return (
    <div>
      <div>
        <div className=' text-2xl font-bold w-2/4 pb-5 font-sans'>
          Order History
          {/* <Button onClick={()=>alert(groupedData)}>Test</Button> */}
        </div>
        <Card className="h-full w-11/12  px-6 mr-10">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-gray-300 pb-4 pt-10">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* {orders?.map(({ id, date, status, price }, index) => { */}
              {/* const classes = isLast ? "py-4" : "py-4 border-b border-gray-300"; */}
              {/* {Object.keys(orders).map((orderId, index) => { */}
              {orders?.map((orderId, index) => {
                // Calculate the number of attributes in the order object

                // const numberOfItems = Object.keys(orderId?.items).length;
                // const numberOfItems = orderId?.items ? Object.keys(orderId.items).length : 0;

                // Get the grouped data for this order
                // const items = groupedData[orderId];

                return (
                  <tr
                    key={index}
                    className="hover:bg-gray-50"
                    onClick={() =>
                      handleOpen(orderId.items[0]?.orderId, index, orderId?.payment, orderId?.shippingMethod)
                    }
                  >
                    <td className="py-4 border-b border-gray-300">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {orderId.items[0]?.orderId}
                      </Typography>
                    </td>
                    <td className="py-4 border-b border-gray-300">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        {/* {numberOfItems}  */}
                      </Typography>
                    </td>
                    <td className="py-4 border-b border-gray-300">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        {/* Status */}
                        {orderId.status}
                      </Typography>
                    </td>
                    <td className="py-4 border-b border-gray-300">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        {orderId.payment}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className=' bg-blue-gray-400'>
          <div className='flex w-full bg-yellow-400 justify-between'>
            <div className=' bg-red-700 felx flex-col w-5/12'>
              <div>
                Products
              </div>
              <p>{shippingMethod}</p>
            </div>

            <div className=' bg-deep-purple-400 flex flex-col w-7/12'>
              <div>Price</div>
              <div>{totalAmount}</div>
            </div>
            <div className='bg-red-200 flex flex-col w-4/12'>
              <div className='flex justify-end'>Order Nnumber</div>
              <div className='flex justify-end'>#{selectId}</div>

            </div>
          </div>

        </DialogHeader>
        <DialogBody>
          {selectedData ?
            <div className='flex flex-col ml-4 mr-4'>
              {selectedData?.map((item, index) => (
                <div key={index} className=''>

                  <div className='flex w-full justify-between mt-5'>
                    <div>
                      <img
                        src={item?.pictureLocation}
                        alt="Profile"
                        className="rounded w-24 h-24 mb-2"
                      />
                    </div>
                    <div className='flex flex-col'>
                      <p className='mb-3'>{item?.productName}</p>
                      <p>Price: {item?.unitPrice}</p>
                    </div>
                    <div>
                      <p>Quantity : {item?.quantity}</p>
                    </div>
                    <div >
                      <Button onClick={() => handleOpenReview(item.productName, item.unitPrice, item.pictureLocation, item.productId)}>Review</Button>
                    </div>
                    {/* divroduct ID: {item?.productId}, Quantity: {item?.quantity} */}
                  </div>

                </div>
              ))}
            </div>
            : <p>Unable to get data.</p>}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Dialog open={openReview} handler={handleOpenReview}>
        <DialogHeader>Product Review</DialogHeader>
        <DialogBody>
          <div className='  flex justify-between w-full'>
            <img
              src={reviewProductLocation}
              alt="Profile"
              className="rounded w-40 h-40 mb-2 ml-5"
            />
            <div className='   mr-40 mt-2'>
              <p className=''>Product Name: {reviewProductName}</p>
              <p className='mt-2'>Product Price: {reviewUnitPrice}</p>
              <input
                type="number"
                max="5"
                min='0'
                className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-600 hover:border-gray-600 shadow-sm focus:shadow mt-2"
                onChange={(e) => setRating(e.target.value)}
                disabled={ReviewsByUser && !editMode}   
                placeholder={ReviewsByUser?.rating}   
              />
            </div>
            <div className=' bg-blue-gray-600 flex justify-end mr-7'>


            {ReviewsByUser && !editMode ? 
            <svg className='flex text-right w-full text-base justify-between' onClick={() => setEditMode(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
           : 
           ""}




              {/* <p>Edit</p> */}
              {/* <svg className='flex text-right w-full text-base justify-between' onClick={() => setEditMode(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg> */}
            </div>
          </div>
          <div>
            <div className="w-96 mt-5">
              <Textarea placeholder={ReviewsByUser?.description} disabled={ReviewsByUser && !editMode} onChange={(e) => SetUserReview(e.target.value)} />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={CloseReview}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          {!ReviewsByUser ? 
           <Button variant="gradient" color="green" onClick={handleReviewSubmit}>
            <span>Confirm</span>
          </Button>
           : 
           ""}
           {editMode ? 
           <Button variant="gradient" color="green" onClick={handleReviewUpdate}>
            <span>Update</span>
          </Button>
           : 
           ""}
         
        </DialogFooter>
      </Dialog>
    </div>

  )
}

export default Orders