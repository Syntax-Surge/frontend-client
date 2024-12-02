import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PlantItemCard } from '../shop/components/card/ShopCard';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const LatestProducts = () => {
    const [ newProduct, setNewProduct ] = useState([]);

    useEffect(()=>{
        getLatestProducts();
    },[]);

    const getLatestProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/products/');
            const items = response.data.rows
            const firstThreeProducts = items.slice(0,3);
            setNewProduct(firstThreeProducts);
        } catch (error) {
            console.log("Get Latest products error",error)
        }
    }

    return (
        <div>
            <div className='grid grid-cols-4 mt-4 px-10 py-4 h-96 gap-10'>
                <div className='flex items-center justify-center bg-white'>
                    <div className='flex flex-col'>
                        <div className='text-4xl mb-6 text-[#000000] font-poppins font-bold'>
                            <h1>Latest <br /> Products</h1>
                        </div>
                        <div className='text-base font-poppins text-[#1E1E1E]'>
                            <p>Easiest way to healthy life by buying our latest plants </p>
                        </div>
                        <div className='py-6'>
                            <Link to={'/item'}><Button className='rounded-full bg-[#C1DCDC] text-blue-gray-900 hover:drop-shadow-xl hover:scale-110 hover:duration-200'>See All</Button></Link>
                        </div>
                    </div>

                </div>
                {newProduct.map((item)=>(
                    <div className='h-full cursor-pointer hover:scale-105 hover:duration-700 hover:drop-shadow-xl'>
                        <PlantItemCard
                            key={item.id}
                            id={item.id}
                            name={item.productName}
                            description={item.productDescription}
                            imageUrl={item.pictureLocation}
                            price={item.unitPrice}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default LatestProducts