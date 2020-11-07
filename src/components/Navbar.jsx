import React from "react";
import Logout from "./Logout";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div className="container">
            <nav className="navbar">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fas fa-bars"></i>
                </span>
                <div>
                    <p><Link className="logo" to="/">KiitCafe</Link></p>
                </div>

                <ul className="main-nav">
                    <li>
                        <Link className="nav-links" to="/#menu">MENU</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/my-orders">MY ORDERS</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/contact-us">CONTACT US</Link>
                    </li>
                    <Logout/>
                    <li>
                        <Link className="nav-links" to="/my-cart"><img src="./img/cart.png" alt="cart" className="cart"/></Link>
                    </li>
                </ul>                
            </nav>
        </div>
    );
}

export default Navbar;
