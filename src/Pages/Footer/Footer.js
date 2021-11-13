import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./Footer.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <Box
      style={{ backgroundColor: "#007aff", color: "white", marginTop: "10px" }}
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body1">
            648 Jackson Court Centreville, <br /> VA 20120 <br />
            +000-1234-56789 <br />
            support@example.com
          </Typography>
        </Grid>

        <Grid item md={4} xs={12}>
          <Typography variant="h6">Quick Links</Typography>
          <Typography variant="body1">
            Search <br />
            News
            <br />
            Faqs <br />
            Contact <br />
          </Typography>
        </Grid>

        <Grid
          style={{ color: "white", alignItems: "left", marginBottom: "10px" }}
          item
          md={4}
          xs={12}
        >
          <Typography variant="h6">Join Our Newsletter</Typography>
          <TextField
            id="outlined-basic"
            label="Enter your email address"
            variant="outlined"
          />
          <br />
          <Button variant="contained" color="success">
            Join us
          </Button>
          <Typography variant="body1">
            Subscribe to get special offers,
            <br /> free giveaways, and once-in-a-lifetime <br /> deals.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
