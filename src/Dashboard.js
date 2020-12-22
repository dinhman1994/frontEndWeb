import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import ChartOrders from './ChartOrders'
import ChartMoney from './ChartMoney'
import moment from 'moment'
import Axios from 'axios'
import NavShop from './NavShop';
import LoadData from './LoadData';

function Dashboard() {
    const [totalOrder, setTotalOrder] = useState([]);
    const [totalMoney, setTotalMoney] = useState([]);
    const [products, setProducts] = useState([]);
    const [recentOrder, setRecentOrder] = useState([]);
    const [shop_id, setShop_id] = useState(['3']);
    let year = moment().year();
    let month = moment().month() +1;
    useEffect(() => {
        Axios.get(`http://localhost:8000/shop/${shop_id}/recentorder`)
            .then(res => {
                console.log(res);
                setRecentOrder(res.data)
            })
            .catch(error => {
                console.log('Failed to Get Recent Order', error);
            })
    }, [])

    useEffect(() => {
        Axios.get(`http://localhost:8000/shop/${shop_id}/totalorder/${year}/${month}`)
            .then(resp => {
                console.log(resp);
                setTotalOrder(resp.data)
            })
            .catch(error => {
                console.log('Failed to Get Total Order', error);
            })
    }, [])
    useEffect(() => {
        Axios.get(`http://localhost:8000/shop/${shop_id}/totalMoney/${year}/${month}`)
            .then(resp => {
                console.log(resp);
                setTotalMoney(resp.data)
            })
            .catch(error => {
                console.log('Failed to Get Total Money', error);
            })
    }, [])

    useEffect(() => {
        Axios.get(`http://localhost:8000/shop/${shop_id}/topsales`)
            .then(response => {
                console.log(response);
                setProducts(response.data)
            })
            .catch(error => {
                console.log('Failed to Get products', error);
            })
    }, [])

    return (

        <div className="dashboard">
            
            <div>
            <NavShop/>
                <div class="content-wrapper container" >
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title">
                                <h1>Dashboard <small /></h1>
                            </div>
                        </div>
                    </div>
                    <div className='div_table'>
                        <table className='dashboard__table'>
                            <thead>
                                <tr>
                                    <th>
                                        Total Order
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {totalOrder && totalOrder.map(post => (
                                        <td class="list-group-item">
                                            <small> <i class="fa fa-clock-o" key={post.total}>{post.total} order </i> </small>
                                        </td>
                                    ))
                                    }
                                </tr>


                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        Welcome
                                </td>
                                </tr>
                            </tfoot>
                        </table>
                        <table className='dashboard__table'>
                            <thead>
                                <tr>
                                    <th>
                                        Total Money
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>{totalMoney && totalMoney.map(post => (
                                    <td class="list-group-item">
                                        <small> <i class="fa fa-clock-o" key={post.total}>{post.total} $ </i> </small>
                                    </td>
                                ))
                                }
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        Welcome
                                </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="panel panel-default recent-activites">
                                <div class="panel-heading">
                                    <h4 class="panel-title"><strong>Total Orders </strong> </h4>
                                    <div class="panel-actions">
                                        <a href="#" class="panel-action panel-action-toggle" data-panel-toggle></a>
                                        <a href="#" class="panel-action panel-action-dismiss" data-panel-dismiss></a>
                                    </div>
                                </div>
                                <div class="panel-body text-center">
                                    <div>
                                        <ChartOrders></ChartOrders>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="panel panel-default recent-activites">
                                <div class="panel-heading">
                                    <h4 class="panel-title"> <strong>Total Money</strong> </h4>
                                    <div class="panel-actions">
                                        <a href="#" class="panel-action panel-action-toggle" data-panel-toggle></a>
                                        <a href="#" class="panel-action panel-action-dismiss" data-panel-dismiss></a>
                                    </div>
                                </div>
                                <div class="panel-body text-center">
                                    <div>
                                        <ChartMoney></ChartMoney>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="panel panel-default recent-activites">
                                <div class="panel-heading">
                                    <h4 class="panel-title"> Top Product </h4>
                                    <div class="panel-actions">
                                        <a href="#" class="panel-action panel-action-toggle" data-panel-toggle></a>
                                        <a href="#" class="panel-action panel-action-dismiss" data-panel-dismiss></a>
                                    </div>
                                </div>
                                <div class="panel-body pad-0">
                                    <ul class="list-group">

                                        {products && products.map(post => (
                                            <li class="list-group-item">
                                                <a key={post.product_id}> {post.product_name} </a>
                                                <small> <i class="fa fa-clock-o" key={post.product_id}>{post.nosale} order </i> </small>
                                            </li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">

                            <div class="panel panel-default recent-activites">
                                <div class="panel-heading">
                                    <h4 class="panel-title"> Recent Orders</h4>
                                    <div class="panel-actions">
                                        <a href="#" class="panel-action panel-action-toggle" data-panel-toggle></a>
                                        <a href="#" class="panel-action panel-action-dismiss" data-panel-dismiss></a>
                                    </div>
                                </div>
                                <div class="panel-body pad-0">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-recent-orders">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Customer</th>
                                                    <th>Status</th>
                                                    <th>Create Date</th>
                                                    <th>Required Date</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    recentOrder && recentOrder.map(order => (
                                                        <tr>
                                                            <td key={order.order_id}> {order.order_id}</td>
                                                            <td key={order.order_id}> {order.user_id}</td>
                                                            <a key={order.order_id}> {order.status}   </a>
                                                            <td key={order.order_id}> {order.orderDate}</td>
                                                            <td key={order.order_id}> {order.requiredDate}  </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Dashboard;