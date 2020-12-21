import React, { useState, useEffect } from 'react';
import axios from "./axios";

import ProductInOrderDetail from "./ProductInOrderDetail";
import "./OrderDetail.css";

function OrderDetail() {
    return(
        <div className="orderDetail">
            <table class="table table-hover tm-table-small tm-product-table">
                <thead>
                    <tr>
                        <th scope="col">&nbsp;</th>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">PRODUCT PRICE</th>
                        <th scope="col">QUANTITY</th>
                        <th scope="col">SUM</th>
                        <th scope="col">STARS</th>
                        <th scope="col">YOURSTARS</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">IMAGE</th>
                        <td class="tm-product-name">NAME</td>
                        <td>PRICE</td>
                        <td>QUANTITY</td>
                        <td>SUM</td>
                        <td>STAR</td>
                        <td>
                            YOURSTARS
                        </td>
                        <td> 
                        </td>
                    </tr> 
                    {/* {shopProducts.map( shopProduct => 
                    <ProductInShop 
                        product_id = {shopProduct.product_id} 
                        product_name = {shopProduct.product_name}
                        product_image = {shopProduct.product_image}
                        product_price = {shopProduct.product_price}
                        quantityInStock = {shopProduct.quantityInStock}
                        createdAt = {shopProduct.createdAt}
                    />)}    */}
                    <ProductInOrderDetail />
                </tbody>
            </table>
        </div>
    );
}
export default OrderDetail;
