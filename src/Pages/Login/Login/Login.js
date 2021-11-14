import { Container, Grid, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, autherror } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 8, mb: 8 }} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your email"
                name="email"
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
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New user? please register</Button>
              </NavLink>
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  User login successfully
                </Alert>
              )}
              {autherror && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {autherror}
                </Alert>
              )}
            </form>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
