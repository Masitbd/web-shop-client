import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">{/* <AddService></AddService> */}</Route>
          <Route path="/mylist">{/*  <MyList></MyList> */}</Route>
          <Route path="/gallery">{/*  <Gallery></Gallery> */}</Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">{/*  <Login></Login> */}</Route>
          {/*   <PrivateRout path="/serviceInfo/:serviceId">
            <ServiceInfo></ServiceInfo>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
