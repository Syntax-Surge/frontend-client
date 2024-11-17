import React from "react";
import { Button } from "@material-tailwind/react";

const BuyButton = () => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "#4A9C80",
          width: "150px",
          height: "30px",
          padding: "5px 0",
          lineHeight: "1.5",
        }}
        className="rounded-full"
      >
        BUY
      </Button>
    </div>
  );
};

export default BuyButton;
