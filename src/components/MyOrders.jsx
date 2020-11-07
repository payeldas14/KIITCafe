import React from "react";
import Header from "./Header";

function MyOrders(){
    return(
        <div class="container">
        <Header head="MY ORDERS"/>
            <div class="table-responsive">          
                <table class="table">
                    <thead>
                        <tr class="headings">
                            <th>Order ID</th>
                            <th>Order Details</th>
                            <th>Price</th>
                            <th>Placed At</th>
                        </tr>
                    </thead>
                    <tbody class="table-body">
                        <tr>
                            <td>RWEFWEFWEFE</td>
                            <td> <ul>
                            <li>Dosa - 2</li>
                            <li>Pan Fried Noodles - 1</li>
                            <li>Chocolate Pastry - 2</li>
                            </ul>
                            </td>
                            <td>₹400</td>
                            <td>16:42 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyOrders;