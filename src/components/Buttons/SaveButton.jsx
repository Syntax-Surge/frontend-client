import React from "react";
import { Button } from "@material-tailwind/react";

const SaveButton = () => {
  return (
    <div>
      <Button
        variant="text"
        className="flex items-center justify-center gap-4  normal-case text-[16px] h-12 w-64 text-white"
        style={{
          backgroundColor: "#141718",
          height: "40px",
          borderRadius: "8px",
          width: "150px",
        }}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default SaveButton;
