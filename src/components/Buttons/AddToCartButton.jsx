import React from "react";
import { Button } from "@material-tailwind/react";

const AddToCartButton = () => {
  return (
    <div>
      <Button
        variant="text"
        className="flex items-center justify-center gap-4  normal-case text-[16px] h-12 w-64 text-white"
        style={{
          backgroundColor: "#141718",
          height: "40px",
          borderRadius: "8px",
          width: "130px",
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
