import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Reviews = () => {
  return (
    <div>
      <Box
        style={{
          backgroundColor: "#f5d6d6",
          color: "black",
          marginTop: "10px",
          marginBottom: "40px",
        }}
        sx={{ flexGrow: 1 }}
      >
        <Typography variant="h2">What our client says</Typography>
        <Grid container spacing={0}>
          <Grid item md={3} xs={12}>
            1
          </Grid>
          <Grid item md={3} xs={12}>
            2
          </Grid>
          <Grid item md={3} xs={12}>
            3
          </Grid>
          <Grid item md={3} xs={12}>
            4
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Reviews;
