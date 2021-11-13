import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

const FollowUs = () => {
  return (
    <Box
      style={{
        backgroundColor: "#f5d6d6",
        color: "red",
        marginTop: "10px",
        marginBottom: "40px",
      }}
      sx={{ flexGrow: 1 }}
    >
      <Typography variant="h2">Follow us on inatagram</Typography>
      <Grid container spacing={0}>
        <Grid item md={3} xs={12}>
          <Link href="https://www.instagram.com/p/CEjizqCpBIE/">
            <img
              src="https://image.freepik.com/free-photo/happy-child-orange-sweater-plays-with-feather-floor_8353-185.jpg"
              alt="First slide"
              height="300px"
              weight="100%"
            />
          </Link>
        </Grid>
        <Grid item md={3} xs={12}>
          <Link href="https://www.instagram.com/p/CEjizqCpBIE/">
            <img
              src="https://image.freepik.com/free-photo/small-child-boy-8-months-old-bathes-bath-with-foam-soap-bubbles_267293-433.jpg"
              alt="First slide"
              height="300px"
              weight="100%"
            />
          </Link>
        </Grid>
        <Grid item md={3} xs={12}>
          <Link href="https://www.instagram.com/p/CEjizqCpBIE/">
            <img
              src="https://image.freepik.com/free-photo/happy-child-orange-sweater-plays-with-feather-floor_8353-182.jpg"
              alt="First slide"
              height="300px"
              weight="100%"
            />
          </Link>
        </Grid>
        <Grid item md={3} xs={12}>
          <Link href="https://www.instagram.com/p/CEjizqCpBIE/">
            <img
              src="https://image.freepik.com/free-photo/small-baby-lies-bed_8353-5187.jpg"
              alt="First slide"
              height="300px"
              weight="100%"
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FollowUs;
