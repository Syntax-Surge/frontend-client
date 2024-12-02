import React from "react";
import { Button } from "@material-tailwind/react";

const ApplyCouponButton = () => {
  return (
    <div>
      <Button
        variant="text"
        className="flex items-center justify-center gap-4  normal-case text-[14px] h-12 w-64 text-white"
        style={{
          backgroundColor: "#239999",
          height: "28px",
          borderRadius: "3px",
          width: "376px",
        }}
      >
        APPLY COUPON
      </Button>
    </div>
  );
};

export default ApplyCouponButton;
