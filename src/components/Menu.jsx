import React from "react";
import Cards from "./Cards";
import CardDeck from "react-bootstrap/CardDeck";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Menu(){
    return(
        <div>
            <Tabs defaultActiveKey="NOODLES"  id="noanim-tab-example" className="form">
                <Tab eventKey="NOODLES" title="NOODLES">
                <CardDeck>
                    <Cards img="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg" title="PAN FRIED NOODLES BOWL" text="₹ 200/-"/> 
                    <Cards img="https://realfood.tesco.com/media/images/lbroccoli-noodles-One-Mag-March-TESCO-2e2e4bd7-3595-489a-9842-e6349610bdfb-0-1400x919.jpg" title="BROCOLLI NOODLES WITH CHILLI" text="₹ 180/-"/>
                    <Cards img="https://img.taste.com.au/3NJK2-8T/taste/2019/04/express-wonton-noodle-soup-p41-148789-2.jpg" title="WONTON SOUP NOODLES" text="₹ 220/-"/>
                    <Cards img="https://static01.nyt.com/images/2019/04/03/dining/29romanrex/merlin_147497208_84b04ae4-b838-44be-97fb-3e51909c5713-articleLarge.jpg" title="SPICY MUSHROOM NOODLES" text="₹ 250/-"/>
                </CardDeck>
                </Tab>
                <Tab eventKey="SANDWICH" title="SANDWICH">
                <CardDeck>
                    <Cards img="https://www.simplyrecipes.com/wp-content/uploads/2019/05/EYF-Italian-Grilled-Cheese-LEAD-4.jpg" title="ITALIAN GRILLED CHEESE SANDWICH" text="₹ 70/-"/> 
                    <Cards img="https://cdn.apartmenttherapy.info/image/upload/v1595983004/k/Photo/Recipes/2020-08-most-wanted-california-sandwich/Kitchn_Cali_Sandwich-horizontal.jpg" title="CALIFORNIA SANDWICH" text="₹ 90/-"/>
                    <Cards img="https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg" title="CHICKEN CLUB SANDWICH" text="₹ 50/-"/>
                    <Cards img="https://www.readersdigest.ca/wp-content/uploads/2012/09/apulia-panini-grilled-cheese-sandwich.jpg" title="PANINI GRILLED CHEESE SANDWICH" text="₹ 60/-"/>
                </CardDeck>
                </Tab>
                <Tab eventKey="PIZZA" title="PIZZA">
                <CardDeck>
                    <Cards img="https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aDM2L2g1Mi8xMzA5NzI3MzI2MjExMC5qcGd8N2MxZDhmNmI5ZTgzZDZlZWQyZGQ4YjFlZjUyNDlkMTExYjdkZDdlZmFkY2I0N2NmNjljOGViNmExZjIyMDU4Yw" title="PEPPERONI PIZZA" text="₹ 120/-"/> 
                    <Cards img="https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1416867304309.jpeg" title="MARGHERITA PIZZA" text="₹ 100/-"/>
                    <Cards img="https://cdn.shopify.com/s/files/1/0205/9582/articles/BBQChickenPizza.jpg?v=1587646451" title="BBQ CHICKEN PIZZA" text="₹ 150/-"/>
                    <Cards img="https://images.getbento.com/accounts/218d4ffbb37dd2996ba53d258951a956/media/UFHsFlMmR8e6NSVYKlMw_ClassicCombo.jpg?fit=max&w=1800&auto=format,compress" title="FIVE STYLE PIZZA" text="₹ 130/-"/>
                </CardDeck>
                </Tab>
                <Tab eventKey="BURGER" title="BURGER">
                <CardDeck>
                    <Cards img="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg" title="CLASSIC CHICKEN CHEESE BURGER" text="₹ 80/-"/> 
                    <Cards img="https://imgp3.schaer.com/sites/default/files/2000_Fiery%20Mexican%20Chicken%20Burger.jpg" title="MEXICAN CHICKEN BURGER" text="₹ 80/-"/>
                    <Cards img="https://www.telegraph.co.uk/content/dam/recipes/2020/08/04/chicken-burger_trans_NvBQzQNjv4BqHZIonAOAdG3yXSlPW-X0bfV2Kj9S-wKdyRQ5TuyHSo0.png?imwidth=450" title="CRISPY CHICKEN BURGER" text="₹ 85/-"/>
                    <Cards img="https://mcdonaldsblog.in/wp-content/uploads/2016/06/mcspicy-paneer-1.jpg" title="SPICY PANEER BURGER" text="₹ 75/-"/>
                </CardDeck>
                </Tab>
                <Tab eventKey="INDIAN" title="INDIAN">
                <CardDeck>
                    <Cards img="https://i.livingfoodz.com/blog_images/4d5b54a14c28ead2fdd4c8a023960230_thumb_1200.jpg" title="CHOLE BHATURE" text="₹ 40/-"/> 
                    <Cards img="https://cdn.cdnparenting.com/articles/2020/05/14110321/Mumbais-Special-Pav-Bhaji-Recipe.jpg" title="PAV BHAJI" text="₹ 40/-"/>
                    <Cards img="https://sukhis.com/wp-content/uploads/2020/01/Dosa.jpg" title="MASALA DOSA" text="₹ 50/-"/>
                    <Cards img="https://mytastycurry.com/wp-content/uploads/2019/04/Alu-paratha.jpg" title="ALOO PARATHA" text="₹ 15/-"/>
                </CardDeck>
                </Tab>
                <Tab eventKey="MAIN COURSE" title="MAIN COURSE">
                <CardDeck>
                    <Cards img="https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala-500x500.jpg" title="PANEER BUTTER MASALA" text="₹ 120/-"/> 
                    <Cards img="https://pinchofyum.com/wp-content/uploads/Chicken-Tikka-Masala-Square.jpg" title="CHICKEN TIKKA MASALA" text="₹ 160/-"/>
                    <Cards img="https://images.ctfassets.net/3s5io6mnxfqz/WqjMydbWKTvoKxoHARxtZ/036246d5decb703f76bb7c9fb0259c61/AdobeStock_228144922.jpeg" title="DAAL MAKHANI WITH CREAM" text="₹ 110/-"/>
                    <Cards img="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Punjabi-Aloo-Matar-Recipe.jpg" title="SPICY ALOO MATAR CURRY" text="₹ 115/-"/>
                </CardDeck>
                </Tab>
                <Tab eventKey="INDIAN SNACKS" title="INDIAN SNACKS">
                <CardDeck>
                    <Cards img="https://blog.pureindianfoods.com/wp-content/uploads/2018/10/indian-samosas.jpg" title="SAMOSA" text="₹ 30/-"/> 
                    <Cards img="https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/02/palak-paneer-puff-1.jpg" title="PANEER PUFF" text="₹ 35/-"/>
                    <Cards img="https://www.masala.tv/wp-content/uploads/2020/05/kachori-547.jpg" title="KACHORI" text="₹ 25/-"/>
                    <Cards img="https://punampaul.com/wp-content/uploads/2018/05/gujarati-dhokla-recipe.jpg" title="DHOKLA" text="₹ 20/-"/>
                </CardDeck>
                </Tab>
                <Tab eventKey="PASTRY" title="PASTRY">
                <CardDeck>
                    <Cards img="https://i.pinimg.com/originals/be/17/6f/be176f4f5180cb24a4c2e8a706472a0b.jpg" title="CHOCOLATE PASTRY" text="₹ 50/-"/> 
                    <Cards img="https://www.thespruceeats.com/thmb/RbASKcyOkFnW_5EYV0H-S_UUskk=/2048x1367/filters:fill(auto,1)/fluffy-homemade-vanilla-cake-995187_18_preview-5afddc4c8023b900369a9cbd.jpeg" title="VANILLA PASTRY" text="₹ 45/-"/>
                    <Cards img="https://thebusybaker.ca/wp-content/uploads/2020/02/red-velvet-cake-fb-ig-5-scaled.jpg" title="RED VELVET PASTRY" text="₹ 50/-"/>
                    <Cards img="https://www.theterracekitchen.in/wp-content/uploads/2017/09/LREdit_Wordpress-4754.jpg" title="PINEAPPLE PASTRY" text="₹ 40/-"/>
                </CardDeck>
                </Tab>
            </Tabs>
        </div>
    );
}

export default Menu;