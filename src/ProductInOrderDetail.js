import React, { useState, useEffect } from 'react';
import axios from "./axios";

import "./ProductInOrderDetail.css";

function ProductInOrderDeTail({ product_id, product_image,product_name,product_price,quantity,sum,status,product_rating}) {
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
        <tr className="ProductInOrderDeTail">
            <th scope="row"><img src={backEndServe+product_image} className="product_img"/></th>
            <td class="tm-product-name">{product_name}</td>
            <td>{product_price}</td>
            <td>{quantity}</td>
            <td>{sum}</td>
            <td>{status}</td>
            <td>{product_rating}</td>
            <td>
                <div hidden={status!='shipped'}> 
                    <button onClick={decreaseRating}>-</button>
                    <span>
                        <div>
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <span>🌟</span>
                        ))}
                        </div>
                    <button onClick={increaseRating}>+</button>
                    </span>
                </div>
            </td>
            <td> 
                <button onClick={updateRaing} hidden={status!='shipped'}>SUBMIT</button>
            </td>
        </tr>
    )
}

export default ProductInOrderDeTail;