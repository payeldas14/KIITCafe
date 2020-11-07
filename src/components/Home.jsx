import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

function Home(){
    return(
        <div>
            <Hero/>
            <div className="container">
                <Header head="MENU"/>
                <Menu/>
            </div> 
            <Footer/>
        </div>
    );
}

export default Home;