import React from "react";
import { Button } from "@material-tailwind/react";

const Buttons = ({name, onClick, loading,color}) => {
  return (
    <div>
      <Button
        // variant="filled"
        className={`flex items-center justify-center normal-case font-normal text-black ${color} hover:bg-[#696969] transition duration-300 ease font-roboto
          md:text-base md:w-28`}
        style={{
          height: "31px",
          borderRadius: "4px",
        }}
        loading={loading}
        onClick={onClick}
      >
        {name}
      </Button>
    </div>
  );
};

export default Buttons;