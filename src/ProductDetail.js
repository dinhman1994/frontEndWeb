import React, { useState, useEffect } from 'react';
import "./ProductDetail.css";
import axios from "./axios";
import { Link, useHistory, useParams} from "react-router-dom";
import { useStateValue } from "./StateProvider";


function ProductDetails(){
    let history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    const [product, setProduct] = useState(null);
    const [shop, setShop] = useState(null);
    let { product_id } = useParams();
    const backEndServe = 'http://localhost:8000/';
    useEffect(() => {
        async function fetchData(){
            const result = await axios({
				method: 'get',
				url: `http://localhost:8000/products/${product_id}`
			});
            setProduct(result.data);
            const shopResult = await axios({
				method: 'get',
				url: `http://localhost:8000/shopProduct/${product_id}`
            });
            setShop(shopResult.data);
        }
        fetchData();
    },[]);

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: product.product_id,
            name: product.product_name,
            image: backEndServe+product.product_image,
            price: product.product_price,
            rating: 5,
          },
        });
    };
    
    const byNow = () => {
        addToBasket();
        history.push("/payment");
    }
    if(product && shop)
    return (
        <div className="ProductDetail">
            <div className="right_content">
                <div className="img_area">
                    <img src={backEndServe+product.product_image} className="product_img"/>
                </div>
                
                <div className="discription_area">
                    <h2>{product.product_name}</h2>
                    <div className="shop_description">{product.product_description}</div>
                </div>
                <Link to={`/shopProducts/${shop.shop_id}`}>
                    <div className="shop_area">
                        <div>
                            <img src={backEndServe+shop.avatar} className="shop_img"/>
                        </div>    
                        <h3>SHOP {shop.name}</h3>
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
                    <button onClick={addToBasket}>ADD TO CART</button>
                    <button onClick={byNow}>BUY NOW</button>
                </div>
            </div>
        </div>
    );
    else return (
        <div></div>
    )
} 

export default ProductDetails;