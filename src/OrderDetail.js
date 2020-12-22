import React, { useState, useEffect } from 'react';
import { useStateValue } from "./StateProvider";
import { useCookies } from 'react-cookie';
import { Link, useHistory, useParams} from "react-router-dom";
import axios from "./axios";
import ProductInOrderDetail from "./ProductInOrderDetail";
import LoadData from "./LoadData";
import "./OrderDetail.css";

function OrderDetail() {
    let { user_id } = useParams();
    const [orders, setOrders] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    const [cookies, setCookie] = useCookies(['token']);

    useEffect(() => {
        async function fetchData(){
            const ordersResult = await axios({
				method: 'get',
				url: `http://localhost:8000/order/${user_id}`,
				headers : {
					token: cookies.token
				}
            });
            setOrders(ordersResult.data.userOrders);
            return;
        }
        // generate the special stripe secret which allows us to charge a customer
        fetchData();
        return;
    }, [])

    if (user!=null)
    return(
        <div className="orderDetail">
            <LoadData/>
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
                        <td>RATING</td>
                        <td>
                            YOURSTARS
                        </td>
                        <td> 
                        </td>
                    </tr> 
                    {
                        orders.map(product => <ProductInOrderDetail
                            product_id = {product.product_id}
                            product_image = {product.product_image}
                            product_name = {product.product_name}
                            product_price = {product.product_price}
                            quantity = {product.quantity}
                            sum = {product.quantity*product.product_price}
                            product_rating = {product.product_rating}
                        /> )
                    }
                </tbody>
            </table>
        </div>
    );
    else {
        return (
            <div>
                <LoadData/>
            </div>
        )
    }
}
export default OrderDetail;
