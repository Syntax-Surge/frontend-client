import React, { useState, useEffect } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";
import axios from 'axios';

const Address = () => {
    const [editMode, setEditMode] = useState("false");
    const [user, setUser] = useState("");
    const [address, setAddress] = useState("");
    const [refreshDetails, setRefreshDetails] = useState(false);
    const [userId, setUserId] = useState(20);
    const [error, setError] = useState("");
    const [line1, setLine1] = useState("");
    const [line2, SetLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [country, setCountry] = useState("");
    const [errorLane1, setErrorLane1] = useState(false);
    const [errorLane2, setErrorLane2] = useState(false);
    const [errorCity, setErrorCity] = useState(false);
    const [errorState, setErrorState] = useState(false);
    const [errorPostalCode, setErrorPostalCode] = useState(false);
    const [errorCountry, setErrorCountry] = useState(false);


    const submitShipping = async () => {

        if (!line1) {
            setErrorLane1(true);
        } else {
            setErrorLane1(false);
        }
        if (!city) {
            setErrorCity(true);
        }else {
            setErrorCity(false);
        }
        if (!state) {
            setErrorState(true);
        }else {
            setErrorState(false);
        }
        if (!postalCode) {
            setErrorPostalCode(true);
        }else {
            setErrorPostalCode(false);
        }
        if (!country) {
            setErrorCountry(true);
        }else {
            setErrorCountry(false);
        }
        if (errorCity || errorCountry || errorLane1 || errorPostalCode || errorState) {
            return;
        }




        try {
            let dataShipping = {
                line1: line1,
                line2: line2,
                city: city,
                state: state,
                postalCode: postalCode,
                country: country
            }
            console.log(dataShipping);
            if (address) {
                const res = await axios.put(`http://localhost:3002/api/v1/users/profile/user/updateshipping?id=${userId}`, dataShipping, { withCredentials: true });
                // console.log(res.data);
                setRefreshDetails((prevState) => !prevState);
                setLine1("");
                SetLine2("");
                setCity("");
                setState("");
                setPostalCode("");
                setCountry("");
                setEditMode("false");
                console.log("address present");

            } else {
                const res = await axios.post(`http://localhost:3002/api/v1/users/profile/user/createAddress?id=${userId}`, dataShipping, { withCredentials: true });
                console.log(res.data);
                setRefreshDetails((prevState) => !prevState);
                setLine1("");
                SetLine2("");
                setCity("");
                setState("");
                setPostalCode("");
                setCountry("");
                setEditMode("false");
                console.log("address not present");
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    function cancel() {
        setLine1("");
        SetLine2("");
        setCity("");
        setState("");
        setPostalCode("");
        setCountry("");
        setEditMode("false");

    }

    useEffect(() => {
        const userData = async () => {
            //   setLoading(true); // Start loading
            try {
                const response = await axios.get(`http://localhost:3002/api/v1/users/profile/user/getUserById?id=${userId}`, { withCredentials: true }); // Replace with your API endpoint
                setUser(response.data); // Save response data to state
                console.log(response);

            } catch (err) {
                setError(err.message); // Handle errors
            }
        };


        userData();
    }, [refreshDetails]);

    useEffect(() => {
        const addressData = async () => {
            //   setLoading(true); // Start loading
            try {
                const address = await axios.get(`http://localhost:3002/api/v1/users/profile/user/getAddressById?id=${userId}`, { withCredentials: true }); // Replace with your API endpoint
                setAddress(address.data); // Save response data to state
                console.log(address);

            } catch (err) {
                setError(err.message); // Handle errors
            }
        };


        addressData();
    }, [refreshDetails]);

    const renderContent = () => {
        if (editMode === "false") {

            return (
                <div>
                    <div className=' text-2xl font-semibold w-3/4 font-sans pb-5'>
                        Address
                    </div>
                    <div className='flex'>
                        <Card className=" w-96">
                            <CardBody>
                                <div className='flex  h-8'>
                                    <Typography variant="h6" color="blue-gray" className="mb-2 w-96">
                                        Shipping Address
                                    </Typography>
                                    <svg className='flex text-right w-full text-base justify-between' onClick={() => setEditMode("shipping")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </div>
                                <Typography>
                                    {user?.firstName} {user?.lastName}
                                </Typography>
                                <Typography>
                                    {user?.contactNo}
                                </Typography>
                                <Typography>
                                    {address?.shippingAddressLine1} {address?.shippingAddressLine1 ? "," : "Enter shipping address"} {address?.shippingAddressLine2} {address?.shippingAddressLine2 ? "," : ""} {address?.shippingCity}
                                </Typography>
                                <Typography>
                                    {address?.shippingState} {address?.shippingState ? "," : ""} {address?.shippingPostalCode} {address?.shippingPostalCode ? "," : ""} {address?.shippingCountry}
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )
        } else if (editMode === "shipping") {
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
                                className="mt-2 flex  gap-1 font-normal items-center"
                            >First Name</Typography>
                            <div className='pt-2 pb-8 ml-16 w-7/12 '><Input label={user?.firstName} placeholder={user?.firstName} disabled/></div>
                        </div>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >Last Name</Typography>
                            <div className='pt-2 pb-8  ml-16 w-7/12'><Input label={user?.lastName} placeholder={user?.lastName} disabled/></div>
                        </div>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >Contact Number</Typography>
                            <div className='pt-2 pb-8  ml-16 w-7/12'><Input label="Contact Number"/></div>
                        </div>
                        {/* <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >No.</Typography>
                            <div className='pt-2 pb-2  ml-16 w-7/12'><Input label={user?.no} /></div>
                        </div> */}
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >Lane</Typography>
                            <div className='pt-2 pb-2  ml-16 w-7/12'>
                            <Input label={address?.shippingAddressLine1} onChange={(e) => setLine1(e.target.value)} error={errorLane1}/>
                            {errorLane1 ? <p className=' text-red-600 pt-1'>Fill Lane 01</p> : "" }

                            </div>
                        </div>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >Lane 02</Typography>
                            <div className='pt-2 pb-8  ml-16 w-7/12'>
                            <Input label={address?.shippingAddressLine2} onChange={(e) => SetLine2(e.target.value)} />
                            </div>
                        </div>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >City</Typography>
                            <div className='pt-2 pb-2  ml-16 w-7/12'>
                            <Input label={address?.shippingCity} onChange={(e) => setCity(e.target.value)} error={errorCity}/>
                            {errorCity ? <p className=' text-red-600 pt-1'>Fill city</p> : "" }
                            </div>
                        </div>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >State</Typography>
                            <div className='pt-2 pb-2  ml-16 w-7/12'>
                            <Input label={address?.shippingState} onChange={(e) => setState(e.target.value)} error={errorState}/>
                            {errorState ? <p className=' text-red-600 pt-1'>Fill state</p> : "" }
                            </div>
                        </div>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >Postal Code</Typography>
                            <div className='pt-2 pb-2  ml-16 w-7/12'>
                            <Input label={address?.shippingPostalCode} onChange={(e) => setPostalCode(e.target.value)} error={errorPostalCode}/>
                            {errorPostalCode ? <p className=' text-red-600 pt-1'>Fill postal code</p> : "" }
                            </div>
                        </div>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >Country</Typography>
                            <div className='pt-2 pb-2  ml-16 w-7/12'>
                            <Input label={address?.shippingCountry} onChange={(e) => setCountry(e.target.value)} error={errorCountry}/>
                            {errorCountry ? <p className=' text-red-600 pt-1'>Fill country</p> : "" }
                            </div>
                        </div>
                        <div className=' flex mt-5'>
                            <Button onClick={() => submitShipping()}>Save Changes</Button><Button className='ml-5' onClick={() => cancel()}>Cancel</Button>
                        </div>
                    </div>
                </div>
            )

        }
        // else if (editMode === "billing") {
        //     return (
        //         <div>
        //             <div className='w-7/12'>
        //                 <div className=' text-3xl font-bold w-2/4 font-sans'>
        //                     Billing Details
        //                 </div>
        //                 <div className=' flex justify-between'>
        //                     <Typography
        //                         variant="h6"
        //                         color="gray"
        //                         className="mt-2 flex items-center gap-1 font-normal"
        //                     >First Name</Typography>
        //                     <div className='pt-2 pb-4 ml-16 w-7/12 '><Input label={user?.firstName} /></div>
        //                 </div>
        //                 <div className=' flex justify-between'>
        //                     <Typography
        //                         variant="h6"
        //                         color="gray"
        //                         className="mt-2 flex items-center gap-1 font-normal"
        //                     >Last Name</Typography>
        //                     <div className='pt-2 pb-4  ml-16 w-7/12'><Input label={user?.lastName} /></div>
        //                 </div>
        //                 <div className=' flex justify-between'>
        //                     <Typography
        //                         variant="h6"
        //                         color="gray"
        //                         className="mt-2 flex items-center gap-1 font-normal"
        //                     >Contact Number</Typography>
        //                     <div className='pt-2 pb-4  ml-16 w-7/12'><Input label="Contact Number" /></div>
        //                 </div>
        //                 <div className=' flex justify-between'>
        //                     <Typography
        //                         variant="h6"
        //                         color="gray"
        //                         className="mt-2 flex items-center gap-1 font-normal"
        //                     >No.</Typography>
        //                     <div className='pt-2 pb-2  ml-16 w-7/12'><Input label={user?.no} /></div>
        //                 </div>
        //                 <div className=' flex justify-between'>
        //                     <Typography
        //                         variant="h6"
        //                         color="gray"
        //                         className="mt-2 flex items-center gap-1 font-normal"
        //                     >Lane</Typography>
        //                     <div className='pt-2 pb-2  ml-16 w-7/12'><Input label={user?.billingAddressLine1} onChange={(e) => setLine1(e.target.value)}/></div>
        //                 </div>
        //                 <div className=' flex justify-between'>
        //                     <Typography
        //                         variant="h6"
        //                         color="gray"
        //                         className="mt-2 flex items-center gap-1 font-normal"
        //                     >Lane 02</Typography>
        //                     <div className='pt-2 pb-2  ml-16 w-7/12'><Input label={user?.billingAddressLine2} onChange={(e) => SetLine2(e.target.value)}/></div>
        //                 </div>
        //                 <div className=' flex justify-between'>
        //                     <Typography
        //                         variant="h6"
        //                         color="gray"
        //                         className="mt-2 flex items-center gap-1 font-normal"
        //                     >City</Typography>
        //                     <div className='pt-2 pb-2  ml-16 w-7/12'><Input label={user?.billingCity} onChange={(e) => setCity(e.target.value)}/></div>
        //                 </div>
        //                 <div className=' flex justify-between'>
        //                     <Typography
        //                         variant="h6"
        //                         color="gray"
        //                         className="mt-2 flex items-center gap-1 font-normal"
        //                     >State</Typography>
        //                     <div className='pt-2 pb-2  ml-16 w-7/12'><Input label={user?.billingState} onChange={(e) => setState(e.target.value)}/></div>
        //                 </div>
        //                 <div className=' flex justify-between'>
        //                     <Typography
        //                         variant="h6"
        //                         color="gray"
        //                         className="mt-2 flex items-center gap-1 font-normal"
        //                     >Postal Code</Typography>
        //                     <div className='pt-2 pb-2  ml-16 w-7/12'><Input label={user?.billingPostalCode} onChange={(e) => setPostalCode(e.target.value)}/></div>
        //                 </div>
        //                 <div className=' flex justify-between'>
        //                     <Typography
        //                         variant="h6"
        //                         color="gray"
        //                         className="mt-2 flex items-center gap-1 font-normal"
        //                     >Country</Typography>
        //                     <div className='pt-2 pb-2  ml-16 w-7/12'><Input label={user?.billingCountry} onChange={(e) => setCountry(e.target.value)}/></div>
        //                 </div>
        //                 <div className=' flex mt-5'>
        //                     <Button onClick={() => submitBilling()}>Save Changes</Button><Button className='ml-5' onClick={() => cancel()}>Cancel</Button>
        //                 </div>
        //             </div>
        //         </div>
        //     )

        // }
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