import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import BootstrapTable  from 'react-bootstrap-table-next'
import { Link, useHistory, useParams} from "react-router-dom";
import paginationFactory from 'react-bootstrap-table2-paginator'
import './UserDetail.css'
export const ShopDetail =({order_id,shop_id} ) => {
    const backEndServe = 'http://localhost:8000/';
    const[orderDetail,setOrderDetail] =useState(null);
    
   

    

    useEffect(() =>{
        async function fetchData() {
            const OrderDetail = await Axios({
                method:'get',
                url:`http://localhost:8000/shop/${shop_id}/order/${order_id}/detail`
            })
            setOrderDetail(OrderDetail.data)     
        }
        fetchData();
        console.log(orderDetail);
    },[order_id])
    
    
    return(
        <table className="userDetail">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th> Product ID</th>
                    <th> Product name</th>
                    <th> Quantity</th>
                    <th> Price Each</th>
                    
                    
                </tr>
            </thead>
            <tbody>
                {
                orderDetail && orderDetail.map(post =>(
                    <tr > 
                        <td key ={post.product_id}> 
                            <Link to={`/products/${post.product_id}`}>
                                <img src={backEndServe + post.product_image} className="orderdetail_img"/>
                            </Link>
                        </td>
                        <td key ={post.product_id}> {post.product_id}   </td>
                        <td key ={post.product_id}> {post.product_name} </td>
                        <td key ={post.product_id}> {post.quantity}     </td>
                        <td key ={post.product_id}> {post.priceEach}    </td> 
                    </tr>   
                ))}
                <button> Change Status </button>
            </tbody>
        </table>
    );
};
export default ShopDetail