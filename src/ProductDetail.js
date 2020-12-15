import React, { useState, useEffect } from 'react';
import "./ProductDetail.css";
import axios from "./axios";
import { Link, useHistory, useParams} from "react-router-dom";


function ProductDetails(){
    const [product, setProduct] = useState({});
    let { product_id } = useParams();
    useEffect(() => {
        async function fetchData(){
            const result = await axios({
				method: 'get',
				url: `http://localhost:8000/products/${product_id}`
			});
            setProduct(result.data);
        }
        fetchData();
    },[]);
    return (
        <div className="ProductDetail">
            <div className="right_content">
                <div className="img_area">
                    <img src="/avatar.jpg" className="product_img"/>
                </div>
                
                <div className="discription_area">
                    <h2>{product.product_name}</h2>
                    <div className="shop_description">{product.product_description}</div>
                </div>
                <Link to="/">
                    <div className="shop_area">
                        <div>
                            <img src="avatar.jpg" className="shop_img"/>
                        </div>    
                        <h3>Shop name</h3>
                    </div>
                </Link>
                
            </div>
            <div className="left_content">
                <h2>{product.product_name}</h2>
                <p>Number of people buy</p>
                <div className="product_rating">
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                </div>
                <h3>{product.product_price} đ</h3>
                <h3>QUANTITY IN STOCK {product.quantityInStock}</h3>
                <div className="button_group">
                    <button>ADD TO CART</button>
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>
    );
} 

export default ProductDetails;