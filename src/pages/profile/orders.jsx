import React, { useState, useEffect } from 'react'
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from 'axios';












const Orders = () => {

  const TABLE_HEAD = ["Number ID", "Date", "Status", "Price"];
  const [open, setOpen] = React.useState(false);
  const [userId, setUserId] = useState(2);
  const [user, setUser] = useState();
  const [selectId, setSelectId] = useState();
  const [refreshDetails, setRefreshDetails] = useState(false);
  const [error, setError] = useState();
  const [orders, setOrders] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const userData = async () => {
      //   setLoading(true); // Start loading
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/users/getOrders?id=${userId}`); // Replace with your API endpoint 
        
        
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








  const handleOpen = (orderId,index) => {
    console.log(orderId);
    console.log(index); 
    
    
    // const filteredData = orders.filter((item) => item.orderId === orderId);
    // const filteredData = orders.filter((item) => Number(item[index].items) === Number(orderId));
    const itemData = orders[index].items;
console.log(itemData); 
    // console.log("orders");
    // console.log(orders);
    // console.log(filteredData);

    setSelectedData(itemData);
    setSelectId(orderId);
    setOpen(!open)

  };

  const groupByOrderId = (data) => {
    return data.reduce((acc, curr) => {
      // Ensure we're grouping based on orderId
      if (!acc[curr.orderId]) {
        acc[curr.orderId] = []; // Initialize an array for each orderId
      }
      acc[curr.orderId].push(curr); // Push the current item into the corresponding group
      return acc;
    }, {});
  };

  const groupedData = groupByOrderId(orders);

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
                {orders.map((orderId, index) => {
                const items = groupedData[orderId];
                return (
                  <tr key={index} className="hover:bg-gray-50" onClick={() => handleOpen(orderId.items[0]?.orderId,index)} >
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
                        {/* {date} */}
                      </Typography>
                    </td>
                    <td className="py-4 border-b border-gray-300">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        {/* {status} */}
                      </Typography>
                    </td>
                    <td className="py-4 border-b border-gray-300">
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        {/* {price} */}
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
            <div className=' bg-red-700 felx flex-col w-1/2'>
              <div>
                Order Date
              </div>
              <div>
                Date
              </div>
            </div>
            <div className=' bg-deep-purple-400 flex flex-col w-full'>
              <div>Price</div>
              <div>priceeee</div>
            </div>
            <div className='bg-red-200 flex '>
              orderid
            </div>
          </div>
        </DialogHeader>
        <DialogBody>
          {selectId}
          {selectedData.map((item, index) => (
            <div key={index} className=''>
              <div className='flex w-full justify-between'>
              <div>
                image
              </div>
              <div>
                <p>Product Name</p>
                <p>Price</p>
              </div>
              <div>
                <p>Quantity : {item.quantity}</p>
              </div>
              <div>
                <Button>Review</Button>
              </div>
              {/* divroduct ID: {item.productId}, Quantity: {item.quantity} */}
            </div>

              </div>
          ))}

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
    </div>

  )
}

export default Orders