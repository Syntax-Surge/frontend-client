import React, {useState} from "react";
import Sidebar from "./Components/sidebar";
import Account from "./account";
import Navbar from "../../components/layout/navbar";
import Address from "./address";
import Orders from "./orders";
import { useCustomContext } from "../../contexts/Context";
const Profile = () => {

    const { OrderSideBar } = useCustomContext();
    const [activeTab,setActiveTab] = useState(OrderSideBar)
    // const [activeTab,setActiveTab] = useState("account")

    const renderContent = () => {
        if (activeTab==="account") {
            return (
                <div>
                    <Account />
                </div>
            );
        } else if (activeTab==="address") {
            return (
                <div>
                    <Address />
                </div>
            );
        } else if (activeTab==="orders") {
            return (
                <div>
                    <Orders />
                </div>
            );
        }
        //  else if (activeTab==="tracking") {
        //     return (
        //         <div>
        //             Tracking
        //         </div>
        //     );
        // }
    }


    return (
        <div className="font-sans mb-10">
            {/* <div><Navbar /></div> */}
            <div className="flex  font-bold text-4xl  h-20 text-center justify-center items-end font-sans">My Account</div>
            <div className=" flex w-full">
                <div className="text-right w-5/12 pr-5  mt-20">
                    <Sidebar setActiveTab={setActiveTab} activeTab={activeTab}/>
                </div>
                <div className=" w-7/12 pl-5 text-lef ml-20 mt-20">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Profile;
