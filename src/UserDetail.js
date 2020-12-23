import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import BootstrapTable  from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'

function UserDetail() {

    const[orderDetail,setOrderDetail] =useState([]);
    const[user_id,setUser_id] = useState([1]);
    const[order_id,setOrder_id] =useState([1]);
    useEffect(() =>{
        async function fetchData() {
            const OrderDetail = await Axios({
                method:'get',
                url:`http://localhost:8000/user/${user_id}/order/${order_id}/detail`
            })
            setOrderDetail(OrderDetail.data)     
        }
        fetchData();
    },[])
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