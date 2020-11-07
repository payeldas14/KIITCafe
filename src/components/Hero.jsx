import React from "react";
import ReactDOM from "react-dom";
import Pic from "./Pic";
import Button from "./Button";
import {Link} from "react-router-dom";

function Hero(){
    return(
        <div className="containerHero">
            <Pic/>
            <div className="content-block">
                <h1>
                NOW YOU DON'T <br /> HAVE TO WAIT <br /> FOR FOOD
                </h1>
                <Link to="/login"><Button text="ORDER NOW"/></Link>
            </div>
        </div>
    );
}

export default Hero;