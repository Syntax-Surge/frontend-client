import { Card, CardBody, Typography } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { useCustomContext } from '../../contexts/Context';
import ProductList from './ProductList';
import { Link, useNavigate } from 'react-router-dom';


const BrowseCarousal = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { selectedCategory, setSelectedCategory, categories, setCategories } = useCustomContext();

    useEffect(() => {
        // console.log("Frontend use effect called");
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const response = await axios.get('http://localhost:3002/api/v1/products/categories/subCategories');
            console.log(response);
            const result = response.data;
            setData(result);
            setCategories(data);
        } catch (error) {
            console.log(error);
        }
    }

    const hancleClick = (category) => {
        const currnetPath = window.location.pathname;
        setSelectedCategory(category);
        if (currnetPath != '/browse') {
            navigate('/browse');
        }
    }

    const handleImageError = (event) => {
        event.target.src = require("../../images/category.png"); // Default image URL
    };

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    

    return (
        <div className='relative flex items-center py-0'>
            <MdNavigateBefore className='w-[50px] h-[50px] opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} />
                <div id='slider' className='w-full h-full items-center flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {data.map((item) => (
                        
                        <div className="items-center justify-center flex p-4">
                            <Card 
                                className={`$w-[160px] $h-[186px] items-center justify-center shadow-none transform transition duration-500 hover:scale-110 ${
                                    selectedCategory?.id === item.id
                                        ? 'bg-transparent scale-110 border-4 border-teal-500'
                                        : 'bg-transparent'
                                }`} 
                                onClick={() => hancleClick(item)}>
                                    <CardBody className="text-center py-0 px-5 flex-row bg-transparent border-transparent ">
                                        <div className="h-[120px] w-[120px] mb-3 drop-shadow-xl">
                                            <img 
                                                src={item.image || require("../../images/category.png")} 
                                                alt="profile-picture" 
                                                className="rounded-full h-[120px] w-[120px] shadow-xl"
                                                onError={handleImageError} 
                                            />
                                        </div>
                                        <Typography variant="h6" color="blue-gray" className="mb-0.5">
                                            {item.name}
                                        </Typography>
                                        {/* <Typography variant="h6" color="blue-gray" className="mb-0.5">
                                            {item.image}
                                        </Typography> */}
                                    </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
                
            <MdNavigateNext className='w-[50px] h-[50px] opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} />
        </div>
    )
    
}

export default BrowseCarousal