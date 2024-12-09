import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../contexts/Context'
import axios from 'axios';
import { PlantItemCard } from '../shop/components/card/ShopCard';
import { CiWarning } from 'react-icons/ci';
import { useInView } from 'react-intersection-observer'

const ProductList = () => {
    const { selectedCategory } = useCustomContext();
    const [items, setItems] = useState([]);

    const [offset, setOffset] = useState(0); 
    const [hasMore, setHasMore] = useState(true); 
    const [loading, setLoading] = useState(false); 
    const { ref, inView } = useInView();
    const limit = 10; 

    console.log("Selected category",selectedCategory?.id);

    useEffect(() => {
        console.log("Get product use effect called");
        if (selectedCategory) {     
            setItems([]);
            setOffset(0);
            setHasMore(true);
            getProductItem(true);
        }
    },[selectedCategory]);

    const getProductItem = async (reset = false) => {
        try {
            setLoading(true);
            const id = selectedCategory?.id;

            console.log("Id is called", id);
            const response = await axios.get('http://localhost:3002/api/v1/products/categories/browse', {
                params: {
                    id,
                    limit,
                    offset: reset ? 0 : offset,
                },
            });
            console.log("Data",response);
            const data = response.data;

            setItems((prevItems) => (reset ? data : [...prevItems, ...data])); // Append new items
            setOffset((prevOffset) => prevOffset + limit); // Increment offset
            setHasMore(data.length === limit); // If fewer than `limit` items are returned, stop fetching
        } catch (error) {
            console.log("Product useeffect error",error);
        } finally {
            setLoading(false);
        }
    } 

    if (!selectedCategory) {
        return (
            <div className="w-full py-32 flex flex-col lg:items-center lg:justify-center">
                <div className="scale-150">
                    <CiWarning/>
                </div>
                <p className="text-4xl font-semibold text-[#1E1E1E] text-opacity-50">No products to show.</p>
            </div>
        );
    }

    

    return (
        <div>
            <div className='grid grid-cols-4 mt-4 px-10 py-4 gap-10'>
                {items.map((item) => (
                    <PlantItemCard
                        key={item.id}
                        id={item.id}
                        name={item.productName}
                        description={item.productDescription}
                        imageUrl={item.pictureLocation}
                        price={item.unitPrice}
                    />
                ))}
            </div>
            {loading && <p className="text-center font-poppins text-opacity-50 mt-4">Loading...</p>}
            {!hasMore && items.length > 0 && <p className="text-center font-poppins text-opacity-50 mt-4">No more products to show.</p>}
            {hasMore && <div ref={ref} style={{ height: '1px' }} />} {/* Trigger for infinite scroll */}
        </div>
    )
}

export default ProductList