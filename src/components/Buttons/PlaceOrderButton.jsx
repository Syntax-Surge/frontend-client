import React from "react";
import { Button } from "@material-tailwind/react";

const PlaceOrderButton = ({ onPlaceOrder, state }) => {
  const stateColor = "rgba(112, 128, 144, 0.7)";
  const onCansel=()=>{
    window.history.back()
  } // Gray-green mix color for disabled

  return (
    <div>
      <Button
        variant="text"
        className={`flex items-center justify-center gap-4 normal-case text-[16px] h-12 w-full cursor-pointer"
        } text-white`}
        style={{
          backgroundColor: state ? stateColor : "#239999",
          height: "40px",
          borderRadius: "3px",
        }}
        onClick={!state ? onPlaceOrder : onCansel}
       
      >
        {!state ? "PLACE ORDER" : "CANCEL ORDER"}
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </div>
  );
};

export default PlaceOrderButton;
