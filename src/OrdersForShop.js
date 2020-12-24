import React, { useState, useEffect } from 'react';
import { useParams,useHistory} from "react-router-dom";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import UserDetail from './UserDetail'
import Axios from 'axios'
import paginationFactory from 'react-bootstrap-table2-paginator'
import BootstrapTable  from 'react-bootstrap-table-next'
import LoadData from './LoadData'
function OrdersForShop() {
    const [{ basket, shop }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    const [show,setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const handleShow  = () =>setShow(true);
    const [rowInfo,setRowInfo] =useState();
    
    const [showModal,SetShowModal] =useState(false);
    let { shop_id } = useParams();
 
    useEffect(() =>{
        async function fetchData() {
           
            const Order = await Axios({
                method: 'get',
                url:`http://localhost:8000/user/${shop_id}/order`,
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
        onClick : (e,row) =>{
        setRowInfo(row) ;
        console.log(rowInfo)
        toggleTrueFalse();
    },
    };
    const toggleTrueFalse = () =>{
        SetShowModal(handleShow);
    };

    return (
        
        <div className='orders'>
            <LoadData/>
            <h1>Your Orders</h1>
            <BootstrapTable
            keyField ="order_id"
            data ={orders}
            columns ={columns}
            pagination ={paginationFactory()}
            rowEvents = {rowEvents}
            />
            {show? <UserDetail user_id ={user_id} order_id ={rowInfo.order_id} /> :null}
        </div>
    )
}

export default OrdersForShop
