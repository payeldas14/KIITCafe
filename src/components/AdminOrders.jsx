import React from "react";
import Header from "./Header";

function AdminOrders(){
    return(
        <div className="container">
        <Header head="ORDERS"/>
            <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr class="headings">
                       <th>Orders</th>
                        <th>Customer</th>
                        <th>Phone No.</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Placed At</th>
                    </tr> 
                  </thead>
                  <tbody class="table-body">
                    <tr>
                        <td>RWEFWEFWEFE<br/><br/>
                        <ul>
                            <li>Dosa - 2</li>
                            <li>Pan Fried Noodles - 1</li>
                            <li>Chocolate Pastry - 2</li>
                            </ul>
                        </td>
                        <td>Rachel Green</td>
                        <td>9876543210</td>
                        <td><select id="dropdown" name="order-status">
                                <option value="Placed">PLACED</option>
                                <option value="Not-Placed">NOT PLACED</option>
                            </select>
                        </td>
                        <td>₹400</td>
                        <td>16:42 PM</td>
                    </tr>
                    <tr>
                        <td>RWEFWEFWEFE<br/><br/>
                        <ul>
                            <li>Veg Sandwich - 2</li>
                            <li>Egg Noodle - 1</li>
                            <li>Cold Drinks - 2</li>
                            </ul>
                        </td>
                        <td>Derek Hough</td>
                        <td>9976513260</td>
                        <td> <select id="dropdown" name="order-status">
                                <option  value="Placed">PLACED</option>
                                <option  value="Not-Placed">NOT PLACED</option>
                            </select>
                        </td>
                        <td>₹300</td>
                        <td>16:50 PM</td>
                    </tr>
                  </tbody>
                </table>
            </div>

        </div>
    );
}

export default AdminOrders;