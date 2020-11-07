import React from "react";
import {Link} from "react-router-dom";
import Button from "./Button";

function EmptyCart(){
    return(
        <div className="container">
            <div className="content">
                <img src="./img/restaurant1.png" alt="empty-cart" className="emptyCart"/>
                <p className="emptyText">LOOKS LIKE YOUR PLATE IS EMPTY!</p>
                <p className="emptyText1">ADD SOME FOOD ITEMS <br/> FROM THE MENU</p>
                <Link to="/"><Button text="HOME"/></Link>
            </div>
        </div>
    );
}

export default EmptyCart;
