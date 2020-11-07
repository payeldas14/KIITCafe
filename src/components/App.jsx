import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "./Home";
import ContactUs from "./ContactUs";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import EmptyCart from "./EmptyCart";
import MyOrders from "./MyOrders";
import AdminOrders from "./AdminOrders";

function App() {
    return (
        <div>
        <Navbar /> 

        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/#menu" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/my-orders" component={MyOrders}></Route>
            <Route exact path="/contact-us" component={ContactUs}></Route>
            <Route exact path="/my-cart" component={EmptyCart}></Route>
            <Route exact path="/admin" component={AdminOrders}></Route>
        </Switch>
        </div>
    );
}

export default App;
