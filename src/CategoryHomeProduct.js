import React, { useState, useEffect } from 'react';

import "./CategoryHomeProduct.css";

function CategoryHomeProduct(props) {
    const [categoryHomeProducts,setCategoryHomeProducts] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const products = await axios({
                method: 'get',
                url: 'http://localhost:8000/categoryHome/:categoryId',
                data: {
                    token: token
                }
            });
        }
        fetchData();
    });
    return(
        <div className={props.name}>
        <div>
    )

}
export default CategoryHomeProduct;