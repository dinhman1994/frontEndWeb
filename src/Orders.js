import React, { useState, useEffect } from 'react';
import { useParams,useHistory} from "react-router-dom";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import UserDetail from './UserDetail'
import Axios from 'axios'
import paginationFactory from 'react-bootstrap-table2-paginator'
import BootstrapTable  from 'react-bootstrap-table-next'

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    const [show,setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const handleShow  = () =>setShow(true);
    let   { user_id } = useParams();
    const [showModal,SetShowModal] =useState(false);

    const[idUser,setIdUser] =useState(['1']); 
    useEffect(() =>{
        async function fetchData() {
           
            const Order = await Axios({
                method: 'get',
                url:`http://localhost:8000/user/${user_id}/purchase`,
            })
            setOrders(Order.data)    
        }
        fetchData();
    },[])
    const columns =[
        {dataField :"order_id" ,     text :"Order ID" },
        {dataField :"status" ,       text :"Status" },
        {dataField :"total" ,        text :"Total money " },
        {dataField :"orderDate" ,    text :"Created At" },
        {dataField :"requiredDate" , text :"Require Date" },
        {dataField :"shippedDate"  , text :"Ship Date" },
    ];
    const rowEvents = {
        onClick : (row) =>{
        toggleTrueFalse()  ;   
    },
    };
    const toggleTrueFalse = () =>{
        SetShowModal(handleShow);
    };

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <h1> Your Order </h1>
            <BootstrapTable
            keyField ="product_id"
            data ={orders}
            columns ={columns}
            pagination ={paginationFactory()}
            rowEvents = {rowEvents}
            />
            {show?  <UserDetail/> :null}
        </div>
    )
}

export default Orders
