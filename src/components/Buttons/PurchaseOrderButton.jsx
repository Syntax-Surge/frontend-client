import React from "react";
import { Button } from "@material-tailwind/react";

const PurchaseOrderButton = ({onPurchaseOrder,title}) => {
  return (
    <div>
      <Button
        variant="text"
        className="flex items-center justify-center gap-4  normal-case text-[16px] h-12 w-full text-white"
        style={{
          backgroundColor: "#239999",
          height: "40px",
          borderRadius: "3px",
        }}
        onClick={onPurchaseOrder}
      >
        {title}
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

export default PurchaseOrderButton;
