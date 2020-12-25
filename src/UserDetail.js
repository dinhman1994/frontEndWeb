import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import BootstrapTable  from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import './UserDetail.css'
export const UserDetail =({order_id,user_id} ) => {

    const[orderDetail,setOrderDetail] =useState(null);
    
    useEffect(() =>{
        async function fetchData() {
            const OrderDetail = await Axios({
                method:'get',
                url:`http://localhost:8000/user/${user_id}/order/${order_id}/detail`
            })
            setOrderDetail(OrderDetail.data)     
        }
        fetchData();
        console.log(orderDetail);
    },[order_id])
    
    
    return(
        <table>
            <thead>
                <tr>
                    <th> Product ID</th>
                    <th> Product name</th>
                    <th> Quantity</th>
                    <th> Price Each</th>
                    <th> Created At</th>
                    <th> Status</th>
                </tr>
            </thead>
            <tbody>
                {
                orderDetail && orderDetail.map(post =>(
                    <tr > 
                        <td key ={post.product_id}> {post.product_id}   </td>
                        <td key ={post.product_id}> {post.product_name} </td>
                        <td key ={post.product_id}> {post.quantity}     </td>
                        <td key ={post.product_id}> {post.priceEach}    </td>
                        <td key ={post.product_id}> {post.orderDate}    </td>
                        <td key ={post.product_id}> {post.status}       </td>
                    </tr>  
                ))}
            </tbody>
        </table>
    );
};
export default UserDetail