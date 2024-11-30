import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";

const Address = () => {
    const [editMode, setEditMode] = useState(false);

    const renderContent = () => {
        if (editMode===false){

        return (
            <div>
                <div className=' text-2xl font-semibold w-3/4 font-sans pb-5'>
                    Address
                </div>
                <div className='flex'>
                    <Card className=" w-96 mr-10">
                        <CardBody>
                            <div className='flex  h-8'>
                                <Typography variant="h6" color="blue-gray" className="mb-2 w-96">
                                    Billing Address
                                </Typography>
                                <svg className='flex text-right w-full text-base justify-between' onClick={() => setEditMode(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </div>

                            <Typography>
                                Sofia Havertz
                            </Typography>
                            <Typography>
                                (+1) 234 567 890
                            </Typography>
                            <Typography>
                                345 Long Island, NewYork, United States
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className=" w-96">
                        <CardBody>
                            <div className='flex  h-8'>
                                <Typography variant="h6" color="blue-gray" className="mb-2 w-96">
                                    Shipping Address
                                </Typography>
                                <svg className='flex text-right w-full text-base justify-between' onClick={() => setEditMode(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </div>
                            <Typography>
                                Sofia Havertz
                            </Typography>
                            <Typography>
                                (+1) 234 567 890
                            </Typography>
                            <Typography>
                                345 Long Island, NewYork, United States
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }else if (editMode===true) {
        return (
            <div>
                <div className='w-7/12'>
                    <div className=' text-3xl font-bold w-2/4 font-sans'>
                        Shipping Details
                    </div>
                    <div className=' flex justify-between'>
                        <Typography
                            variant="h6"
                            color="gray"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >First Name</Typography>
                        <div className='pt-2 pb-4 ml-16 w-7/12 '><Input label="First Name" /></div>
                    </div>
                    <div className=' flex justify-between'>
                        <Typography
                            variant="h6"
                            color="gray"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >Last Name</Typography>
                        <div className='pt-2 pb-4  ml-16 w-7/12'><Input label="Last Name" /></div>
                    </div>
                    <div className=' flex justify-between'>
                        <Typography
                            variant="h6"
                            color="gray"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >Contact Number</Typography>
                        <div className='pt-2 pb-4  ml-16 w-7/12'><Input label="Display Name" /></div>
                    </div>
                    <div className=' flex justify-between'>
                        <Typography
                            variant="h6"
                            color="gray"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >No.</Typography>
                        <div className='pt-2 pb-2  ml-16 w-7/12'><Input label="Email" /></div>
                    </div>
                    <div className=' flex justify-between'>
                        <Typography
                            variant="h6"
                            color="gray"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >Lane</Typography>
                        <div className='pt-2 pb-2  ml-16 w-7/12'><Input label="Email" /></div>
                    </div>
                    <div className=' flex justify-between'>
                        <Typography
                            variant="h6"
                            color="gray"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >Lane 02</Typography>
                        <div className='pt-2 pb-2  ml-16 w-7/12'><Input label="Email" /></div>
                    </div>
                    <div className=' flex justify-between'>
                        <Typography
                            variant="h6"
                            color="gray"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >City</Typography>
                        <div className='pt-2 pb-2  ml-16 w-7/12'><Input label="Email" /></div>
                    </div>
                    <div className=' flex mt-5'>
                        <Button onClick={() => setEditMode(false)}>Save Changes</Button><Button className='ml-5' onClick={() => setEditMode(false)}>Cancel</Button>
                    </div>
                </div>
            </div>
        )
        
    }
    }




    return (
        <div>
            <div>
                {renderContent()}
            </div>
        </div>
    )
}

export default Address