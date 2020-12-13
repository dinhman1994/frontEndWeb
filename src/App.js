import React, { useEffect, Component} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { auth } from "./firebase";
import { useCookies } from 'react-cookie';
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
import Payment from "./Payment";
import Orders from "./Orders";
import Profile from "./Profile";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import Products from "./Products";
import CategoryProducts from "./CategoryProducts";
import ProductDetail from "./ProductDetail";
import Signout from "./Signout";
import Dashboard from "./Dashboard";
import Checkmail from "./Checkmail";
import SendToken from "./SendToken";



const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const [{user}, dispatch] = useStateValue();
  const [cookies, setCookie] = useCookies(['token']);

  useEffect(() => {
    // will only run once when the app component loads...

  }, []);

  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signout">
            <Signout />
          </Route>
          <Route exact path="/profile">
            {(cookies.token!='undefined') ? <Profile /> : <Redirect to="/"/>}
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/createProduct">
            <CreateProduct />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/editProduct">
            <EditProduct />
          </Route>
          <Route path="/category/:category_id">
            <CategoryProducts />
          </Route>
          <Route path="/products/:product_id">
            <ProductDetail />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkmail">
            <Checkmail />
          </Route>
          <Route path="/userToken/:token">
            <SendToken />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
