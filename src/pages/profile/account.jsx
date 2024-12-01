import React, { useState, useEffect } from 'react'
import { Input, Typography, Button } from "@material-tailwind/react";
import { CiEdit } from "react-icons/ci";
import axios from 'axios';


const Account = () => {
    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useState("");
    const [error, setError] = useState("");
    const [userId, setUserId] = useState(20);
    const [updateFirstName, setUpdateFirstName] = useState("");
    const [updateLastName, setUpdateLastName] = useState("");
    const [updateDisplayName, setUpdateDisplayName] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [updateNewPassword, setUpdateNewPassword] = useState("");
    const [updateNewRepeatPassword, setUpdateNewRepeatPassword] = useState("");
    const [refreshDetails, setRefreshDetails] = useState(true);

    const submit = async() => {
        try {
            let data = {
                updateFirstName: updateFirstName,
                updateLastName: updateLastName,
                updateDisplayName: updateDisplayName,
                updateEmail:updateEmail,
                updateNewPassword: updateNewPassword
            }
            console.log(data);
            
            const res = await axios.post(`http://localhost:4000/api/v1/users/updateUser?id=${userId}`,data);
            console.log(res.data);
            setRefreshDetails((prevState) => !prevState);
            setEditMode(false);

        } catch (err) {
            console.log(err.message);
            
        }
    }

    function cancel() {
                setUpdateFirstName("");
                setUpdateLastName("");
                setUpdateDisplayName("");
                setUpdateEmail("");
                setUpdateNewPassword("");
                setUpdateNewRepeatPassword("");
                setEditMode(false);
                
    }


    useEffect(() => {
        const userData = async () => {
            //   setLoading(true); // Start loading
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/users/getUserById?id=${userId}`); // Replace with your API endpoint
                setUser(response.data); // Save response data to state
                console.log(response);

            } catch (err) {
                setError(err.message); // Handle errors
            }
        };

        userData();
    }, [refreshDetails]);

    const renderContent = () => {


        if (editMode === true) {
            return (
                <div>
                    <div className=' leading-loose  w-7/12'>
                        <div className=' text-2xl font-bold w-2/4 font-sans'>
                            Account Details
                        </div>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >First Name</Typography>
                            <div className='pt-2 pb-4 ml-16 w-7/12 '><Input label={user?.firstName ? user.firstName : "First Name"} onChange={(e) => setUpdateFirstName(e.target.value)} /></div>
                        </div>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >Last Name</Typography>
                            <div className='pt-2 pb-4  ml-16 w-7/12'><Input label={user?.lastName ? user.lastName : "Last Name"} onChange={(e) => setUpdateLastName(e.target.value)} /></div>
                        </div>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >Display Name</Typography>
                            <div className='pt-2 pb-1  ml-16 w-7/12'><Input label={user?.lastName ? user.lastName : "Display Name"} onChange={(e) => setUpdateDisplayName(e.target.value)} /></div>
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="mt-1 flex items-center gap-1 pb-4 font-normal italic"
                        >This will be how your name will be displayed in the account section and in reviews</Typography>
                        <div className=' flex justify-between'>
                            <Typography
                                variant="h6"
                                color="gray"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >Email</Typography>
                            <div className='pt-2 pb-2  ml-16 w-7/12'><Input label={user?.email ? user.email : "Email"} onChange={(e) => setUpdateEmail(e.target.value)} /></div>
                        </div>



                        <div className='pt-10'>
                            <div className=' text-2xl font-bold w-2/4 font-sans'>
                                Password
                            </div>
                            <div className=' flex justify-between'>
                                <Typography
                                    variant="h6"
                                    color="gray"
                                    className="mt-2 flex items-center gap-1 font-normal"
                                >Old Password</Typography>
                                <div className='pt-2 pb-4  ml-16 w-7/12'><Input type="password" label="Old Password" /></div>
                            </div>
                            <div className=' flex justify-between'>
                                <Typography
                                    variant="h6"
                                    color="gray"
                                    className="mt-2 flex items-center gap-1 font-normal"
                                >New Password</Typography>
                                <div className='pt-2 pb-4  ml-16 w-7/12'><Input type="password" label="New Password" onChange={(e) => setUpdateNewPassword(e.target.value)} /></div>

                            </div>

                            <div className=' flex justify-between'>
                                <Typography
                                    variant="h6"
                                    color="gray"
                                    className="mt-2 flex items-center gap-1 font-normal"
                                >Repeat New Password</Typography>
                                <div className='pt-2 pb-4  ml-16 w-7/12'><Input type="password" label="Repeat New Password" onChange={(e) => setUpdateNewRepeatPassword(e.target.value)} /></div>
                            </div>
                            {
                                updateNewPassword!==updateNewRepeatPassword && (
                                    <Typography
                                variant="small"
                                color="red"
                                className=" flex items-center gap-1 pb-4 font-normal italic"
                            >Passwords do not match</Typography>
                                )
                            }
                            
                            <div className=' flex mt-5'>
                                <Button onClick={() => submit()}>Save Changes</Button><Button className='ml-5' onClick={() => cancel()}>Cancel</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (editMode === false) {
            return (
                <div>
                    <div className='flex pb-5'>
                        <div className=' text-2xl font-bold w-3/4 font-sans'>
                            Account Details
                        </div>
                        <div className='flex text-right w-full text-base  justify-between'>
                            <svg onClick={() => setEditMode(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </div>
                    </div>
                    <div className=' flex '>
                        <div className='font-bold leading-loose text-[#6C7275] text-2xl'>
                            <div>First Name</div>
                            <div>Last Name</div>
                            <div>Display Name</div>
                            <div>Email</div>
                            <div>Password</div>
                        </div>
                        <div className='ml-16 leading-loose text-[#6C7275] text-2xl'>
                            <div>{user?.firstName}</div>
                            <div>{user?.lastName ? user.lastName : "-"}</div>
                            <div>{user?.firstName}</div>
                            <div>{user?.email}</div>
                            <div>{user?.lastName}</div>
                        </div>
                    </div>
                </div>
            )
        }

    }





    return (
        <div className=''>
            <div className=' mr-20 font-sans'>
                {renderContent()}
            </div>
        </div>
    )
}

export default Account