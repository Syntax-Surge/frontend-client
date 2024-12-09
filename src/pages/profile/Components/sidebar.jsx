import React, { useState, useRef, useEffect } from 'react'
import { sidebardata } from './sidebardata'
import axios from 'axios';



function Sidebar({ setActiveTab, activeTab }) {

  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [userId, setUserId] = useState(2);
  const fileInputRef = useRef(null);
  const [refreshDetails, setRefreshDetails] = useState(true);
  const [imageUrlDB, setImageUrlDB] = useState();
  const [error, setError] = useState("");
  const [user, setUser] = useState();


  useEffect(() => {
    const userData = async () => {
        //   setLoading(true); // Start loading
        try {
            const response = await axios.get(`http://localhost:3002/api/v1/users/profile/user/getUserById?id=${userId}`,{ withCredentials: true }); // Replace with your API endpoint
            setUser(response.data); // Save response data to state
            console.log(response);

        } catch (err) {
            setError(err.message); // Handle errors
        }
    };

    userData();
}, [refreshDetails]);








  const HorizontalLine = (val) => {
    if (activeTab === val.link) {
      return (
        <hr className=' mr-3 border-black'></hr>
      );
    }
  };

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      console.log(formData);
      
  
      // Debug: Log FormData contents
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
  
      try {
        const uploadResponse = await axios.post(`http://localhost:3002/api/v1/users/profile/user/uploadProfileImage`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        const imageUrl = uploadResponse.data.url;
        console.log(imageUrl);
        
  
        await axios.post(`http://localhost:3002/api/v1/users/profile/user/updateUserProfile?id=${userId}`, { imageUrl });
        setImageUrl(imageUrl); // Update the state 
        setRefreshDetails((prev) => !prev);
      } catch (error) {
        console.error('Error uploading or updating:', error.response?.data || error.message);
        if (fileInputRef.current) fileInputRef.current.value = ""; // Reset file input
      }
    }
  };
  


  useEffect(() => {
    const userData = async () => {
      //   setLoading(true); // Start loading
      try {
        const response = await axios.get(`http://localhost:3002/api/v1/users/profile/user/getUserByID?id=${userId}`,{ withCredentials: true }); // Replace with your API endpoint
        setImageUrlDB(response.data.profileImage);


        // console.log(response.data.orderItems);

        // setOrders(response.data.orderItems); // Save response data to state
        // console.log(orders);

        // console.log(orders);

      } catch (err) {
        setError(err.message); // Handle errors
      }
    };

    userData();
  }, [refreshDetails]);

  const handleFileInputClick = () => {
    // Programmatically trigger the file input click
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };




  return (
    <div>
      <div className=' bg-[#1B786F] ml-[400px] text-center rounded-xl pl-3 pr-6 pt-10 pb-10'>
        <div className='pt-5 pb-5'>
          <div className="flex flex-col items-center">
            <img
              src={imageUrlDB ? imageUrlDB : "https://via.placeholder.com/100"}
              alt="Profile"
              className="rounded-full w-36 h-36 mb-2"
              onClick={handleFileInputClick}
            />
            <input
              ref={fileInputRef}
              type="file"
              id="file-upload"
              className=" hidden"
              onChange={handleFileInput}
            />

            <h2 className="mt-2 font-semibold text-3xl text-gray-300">{user?.firstName}</h2>
          </div>
        </div>
        {/* <hr className=' ml-3 mr-3 border-black'></hr> */}
        <div className='pl-3'>
          <ul className='text-left pb-3 text-white text-2xl'>
            {sidebardata.map((val, key) => {
              const isActive = activeTab === val.link ? 'font-bold text-[#1B786F] bg-gray-300 rounded-lg' : '';
              return (
                <div>
                  <li className={`mt-2 mb-2 pt-2 pl-5 pb-2 hover:text-[#1B786F] hover:cursor-pointer hover:bg-gray-300 rounded-xl  ${isActive}`} key={key} onClick={() => { setActiveTab(val.link) }}>
                    {val.title}
                  </li>
                  <div>
                    {/* {HorizontalLine(val)} */}
                  </div>
                </div>

              );
            })}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar;