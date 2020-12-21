import React, { useState, useEffect } from 'react';
import axios from "./axios";

import "./ProductInOrderDetail.css";

function ProductInOrderDeTail() {
    const backEndServe = 'http://localhost:8000/';
    const [stars,setStars] = useState(4);
    function increaseStar(){
        if(stars<5)
            return setStars(stars+1);
    }
    function decreaseStar(){
        if(stars>1)
            return setStars(stars-1);
    }
    return(
        <tr>
            <th scope="row">IMAGE</th>
            <td class="tm-product-name">NAME</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
            <td>SUM</td>
            <td>STAR</td>
            <td>
                <button onClick={decreaseStar}>-</button>
                <span>
                    <div>
                    {Array(stars)
                    .fill()
                    .map((_, i) => (
                    <span>🌟</span>
                    ))}
                    </div>
                </span>
                <button onClick={increaseStar}>+</button>
            </td>
            <td> 
                <button>SUBMIT</button>
            </td>
        </tr>
    )
}

export default ProductInOrderDeTail;