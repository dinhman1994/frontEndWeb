import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import ShopDetail from './ShopDetail'
import Axios from 'axios'
import paginationFactory from 'react-bootstrap-table2-paginator'
import BootstrapTable from 'react-bootstrap-table-next'
import LoadData from './LoadData'
import { Modal, Button, Input, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function OrdersForShop() {
    const [{ basket, shop }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [rowInfo, setRowInfo] = useState();
    const [showModal, SetShowModal] = useState(false);
    let { shop_id } = useParams();
    const [orderDetail, setOrderDetail] = useState(null);
    const [order_id, setOrder_id] = useState();
    const formatButton = (cell, row) => {
        if (row.order_id) {
            return (
                <div>
                    <button className="btn btn-sm btn-success"> Change Status</button>
                </div>
            )
        }
    }
    useEffect(() => {
        async function fetchData() {

            const Order = await Axios({
                method: 'get',
                url: `http://localhost:8000/shop/${shop_id}/order`,
            })
            const OrderDetail = await Axios({
                method: 'get',
                url: `http://localhost:8000/shop/${shop_id}/order/${order_id}/detail`
            })
            setOrderDetail(OrderDetail.data)
            setOrders(Order.data)
        }
        fetchData();
    }, [])
    const columns = [
        { dataField: "order_id", text: "Order ID" },
        { dataField: "total", text: "Total money " },
        { dataField: "orderDate", text: "Created At" },
        { dataField: "requiredDate", text: "Require Date" },
        { dataField: "shippedDate", text: "Shipped Date" },
        { dataField: "status", text: "Status" },
    ];
    const rowEvents = {
        onClick: (e, row) => {
            setRowInfo(row);
            setOrder_id(row.order_id)
            toggleTrueFalse();
        },
    };
    const toggleTrueFalse = () => {
        SetShowModal(handleShow);
    };

    const ShopOrderDetail = () => {
        return (
            <Modal isOpen backdrop={false} fade={false} >
                <ModalHeader>
                    Hello
                </ModalHeader>
                <ModalBody>
                    <ShopDetail order_id={rowInfo.order_id} shop_id={shop_id} status={rowInfo.status}/>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        );
    };
    return (

        <div className='orders'>
            <LoadData />
            <h1>Your Orders</h1>
            <BootstrapTable
                keyField="order_id"
                data={orders}
                columns={columns}
                pagination={paginationFactory()}
                rowEvents={rowEvents}

            />
            {show ? <ShopOrderDetail /> : null}

        </div>
    )
}

export default OrdersForShop
