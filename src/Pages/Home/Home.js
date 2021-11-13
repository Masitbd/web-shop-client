import { Box } from "@mui/material";
import React from "react";
import FollowUs from "../FollowUs/FollowUs";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <Box>
      <div>This is home page</div>
      <Reviews></Reviews>
      <FollowUs></FollowUs>
    </Box>
  );
};

export default Home;
