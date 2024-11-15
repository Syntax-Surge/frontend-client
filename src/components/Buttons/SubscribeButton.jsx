import React from "react";
import { Button } from "@material-tailwind/react";

const SubscribeButton = () => {
  return (
    <div>
      <Button
        className="rounded-full normal-case text-[14px]"
        style={{
          width: "120px",
          height: "40px",
          padding: "5px 0",
          lineHeight: "1.5",
        }}
      >
        Subscribe
      </Button>
    </div>
  );
};

export default SubscribeButton;
