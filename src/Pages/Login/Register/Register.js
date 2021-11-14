import { Container, Grid, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, autherror } = useAuth();
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Not match");
      return;
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8, mb: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your email"
                name="email"
                type="email"
                onChange={handleOnchange}
                variant="standard"
              />

              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your password"
                type="password"
                name="password"
                onChange={handleOnchange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Re-type Your password"
                type="password"
                name="password2"
                onChange={handleOnchange}
                variant="standard"
              />
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already registered? please login</Button>
              </NavLink>
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              User created successfully
            </Alert>
          )}
          {autherror && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {autherror}
            </Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  );
};

export default Register;
