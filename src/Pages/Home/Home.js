import { Box } from "@mui/material";
import React from "react";
import FollowUs from "../FollowUs/FollowUs";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Box>
        <div>This is home page</div>
        <Products></Products>
        <Reviews></Reviews>
        <FollowUs></FollowUs>
      </Box>
    </div>
  );
};

export default Home;
