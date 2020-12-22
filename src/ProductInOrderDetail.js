import React, { useState, useEffect } from 'react';
import axios from "./axios";

import "./ProductInOrderDetail.css";

function ProductInOrderDeTail({ product_id, product_image,product_name,product_price,quantity,sum,product_rating}) {
    const backEndServe = 'http://localhost:8000/';
    const [rating,setRating] = useState(4);
    function increaseRating(){
        if(rating<5)
            return setRating(rating+1);
    }
    function decreaseRating(){
        if(rating>1)
            return setRating(rating-1);
    }

    function updateRaing(){
        async function fetchData(){
            const ordersResult = await axios({
				method: 'post',
				url: `http://localhost:8000/rating/${product_id}`,
				data: {
                    rating: rating,
                    quantity: quantity 
                }
            });
            return;
        }
        fetchData();
        return window.location.reload();
    }

    return(
        <tr>
            <th scope="row">{product_image}</th>
            <td class="tm-product-name">{product_name}</td>
            <td>{product_price}</td>
            <td>{quantity}</td>
            <td>{sum}</td>
            <td>{product_rating}</td>
            <td>
                <button onClick={decreaseRating}>-</button>
                <span>
                    <div>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <span>🌟</span>
                    ))}
                    </div>
                </span>
                <button onClick={increaseRating}>+</button>
            </td>
            <td> 
                <button onClick={updateRaing}>SUBMIT</button>
            </td>
        </tr>
    )
}

export default ProductInOrderDeTail;