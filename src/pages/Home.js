import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import CheckoutPage from "./Shopping Cart/CheckoutPage";

const Home = () => {
  return (
    <div className="flex justify-center items-center space-x-8">
      <Button>Hello</Button>

      <br />
      <br />
      <Link to={"/auth/signup"}>
        {" "}
        <Button> Sign up</Button>
      </Link>
      <Link to={"/auth/signIn"}>
        {" "}
        <Button>Sign In</Button>
      </Link>
      <CheckoutPage />
    </div>
  );
};

export default Home;
