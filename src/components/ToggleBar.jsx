import React from "react";
import ReactDOM from "react-dom";

function ToggleBar(){
    return(
        <div className="toggleBar">
            <nav className="navbar">
                <a className="nav-item" href="#">NOODLES</a>
                <a className="nav-item" href="#">PASTA</a>
                <a className="nav-item" href="#">RICE</a>
                <a className="nav-item" href="#">DOSA</a>
                <a className="nav-item" href="#">SANDWICH</a>
                <a className="nav-item" href="#">BEVERAGES</a>
                <a className="nav-item" href="#">INDIAN</a>
            </nav>
        </div>
    );
}

export default ToggleBar;

{/* <ToggleBar/>
                <CardDeck>
                    <Cards img="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg" title="PAN FRIED NOODLES BOWL" text="₹ 200/-"/> 
                    <Cards img="https://realfood.tesco.com/media/images/lbroccoli-noodles-One-Mag-March-TESCO-2e2e4bd7-3595-489a-9842-e6349610bdfb-0-1400x919.jpg" title="BROCOLLI NOODLES WITH CHILLI" text="₹ 180/-"/>
                    <Cards img="https://img.taste.com.au/3NJK2-8T/taste/2019/04/express-wonton-noodle-soup-p41-148789-2.jpg" title="WONTON SOUP NOODLES" text="₹ 220/-"/>
                    <Cards img="https://static01.nyt.com/images/2019/04/03/dining/29romanrex/merlin_147497208_84b04ae4-b838-44be-97fb-3e51909c5713-articleLarge.jpg" title="SPICY MUSHROOM NOODLES" text="₹ 250/-"/>
                </CardDeck> */}