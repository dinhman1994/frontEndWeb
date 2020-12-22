import React, { useState, useEffect } from 'react';
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'
import Axios from 'axios'

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
  
    const[idUser,setIdUser] =useState(['1']); 
    useEffect(() => {
        Axios.get(`http://localhost:8000/user/${idUser}/purchase`)
            .then(response => {
                console.log(response);
                setOrders(response.data)
            })
            .catch(error => {
                console.log('Failed to Get response', error);
            })
    }, [])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <table>
                <thead>
                    <tr>
                    <th className="Order_para"> ID order </th>
                    <th className="Order_para"> Created At </th>
                    <th className="Order_para"> requiredDate </th>
                    <th className="Order_para"> status </th>
                    <th className="Order_para"> Total </th>
                    </tr>
                </thead>
                <tbody className ="tbody_order">
                {
                orders && orders.map(your_orders =>
                    (
                        <tr>
                        <td className ="tbody_td_order" key ={your_orders.order_id}> {your_orders.order_id}</td>
                        <td className ="tbody_td_order" key ={your_orders.order_id}> {your_orders.orderDate} </td>
                        <td className ="tbody_td_order" key ={your_orders.order_id}> {your_orders.requiredDate} </td>
                        <td className ="tbody_td_order" key ={your_orders.order_id}> {your_orders.status}</td>
                        <td className ="tbody_td_order" key ={your_orders.order_id}> {your_orders.total}</td>
                        </tr>
                    )
            )
            }
                </tbody>
            </table>
        </div>
    )
}

export default Orders
