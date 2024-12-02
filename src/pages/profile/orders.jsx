import React from 'react'
import { Card, Typography } from "@material-tailwind/react";

const Orders = () => {

    const TABLE_HEAD = ["Number ID", "Date", "Status", "Price"];
 
const TABLE_ROWS = [
  {
    id: "#001",
    date: "October 17, 2023",
    status: "Delivered",
    price: "$345.00",
  },
  {
    id: "#002",
    date: "October 17, 2023",
    status: "Delivered",
    price: "$345.00",
  },
  {
    id: "#003",
    date: "October 17, 2023",
    status: "Delivered",
    price: "$345.00",
  },
  {
    id: "#004",
    date: "QOctober 17, 2023",
    status: "Delivered",
    price: "$345.00",
  },
];


  return (
    <div>
        <div>
        <div className=' text-2xl font-bold w-2/4 pb-5 font-sans'>
                        Order History
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
          {TABLE_ROWS.map(({ id, date, status, price }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";
 
            return (
              <tr key={id} className="hover:bg-gray-50">
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {id}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {status}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {price}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
        </div>
    </div>
  )
}

export default Orders