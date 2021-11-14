import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import MoreProducts from "./Pages/MoreProducts/MoreProducts";
import NotFound from "./Pages/NotFound/NotFound";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/moreProducts">
              <MoreProducts></MoreProducts>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/productInfo/:productId">
              <ProductInfo></ProductInfo>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
