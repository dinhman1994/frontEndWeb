import React, { useState,useEffect } from 'react';
import axios from "axios";
import './Dashboard.css';
import  ChartOrders from './ChartOrders'
import  ChartMoney from './ChartMoney'
import queryString from 'query-string'

import Axios from 'axios' 

function Dashboard(){
    const [totalOrder,setTotalOrder] = useState([]);
    const [totalMoney,setTotalMoney] = useState([]);
    const [products, setProducts] = useState([]);
    const [recentOrder,setRecentOrder] =useState([]);
    const [idShop,setIdShop] =useState(['4']); 
    useEffect(() =>{
        
        Axios.get(`http://localhost:8000/shop/${idShop}/recentorder`)
        .then( res =>{
            console.log(res);
            setRecentOrder(res.data)
        })
        .catch(error =>{
            console.log('Failed to Get Recent Order',error);
        })
    },[])

    useEffect(() =>{
        Axios.get(`http://localhost:8000/shop/${idShop}/totalorder`)
        .then( resp =>{
            console.log(resp);
            setTotalOrder(resp.data)
        })
        .catch(error =>{
            console.log('Failed to Get Total Order',error);
        })
    },[])
    useEffect(() =>{
        Axios.get(`http://localhost:8000/shop/${idShop}/totalMoney`)
        .then( resp =>{
            console.log(resp);
            setTotalMoney(resp.data)
        })
        .catch(error =>{
            console.log('Failed to Get Total Money',error);
        })
    },[])

    useEffect(() =>{
        Axios.get(`http://localhost:8000/shop/${idShop}/topsales`)
        .then( response =>{
            console.log(response);
            setProducts(response.data)
        })
        .catch(error =>{
            console.log('Failed to Get products',error);
        })
    },[])
    
    return(
        <div className="dashboard">
        <section class="page">
        <nav className="navbar-aside navbar-static-side" role="navigation">
        <div className="sidebar-collapse nano">
          <div className="nano-content">
            <ul className="nav metisMenu" id="side-menu">
              <li className="nav-header">
                <div className="dropdown side-profile text-left"> 
                  <span style={{display: 'none'}}>
                    <img alt="image" className="img-circle" src='/src/images/avatar-1.jpg' width={40} />
                  </span>
                  <span className="clear" style={{display: 'none'}}> <span className="block m-t-xs"> <strong className="font-bold">John Doe </strong>
                    </span></span> 
                </div>
              </li>
            </ul></div>
        </div>
      </nav>        
            <div id="wrapper">
                <div class="content-wrapper container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title">
                                <h1>Dashboard <small /></h1>
                                <ol className="breadcrumb">
                                <li><a href="#"><i className="fa fa-home" /></a></li>
                                 <li className="active">Dashboard</li>
                                </ol>
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
                            { totalOrder && totalOrder.map(post =>(
                                                <td class = "list-group-item">
                                                    
                                                    <small> <i class ="fa fa-clock-o" key ={post.total}>{post.total} order </i> </small>
                                                </td>
                                        ))
                                        }
                            </tr>
                           
                            
                        </tbody>
                        <tfoot>
                            <tr>
                                <td> 
                                    Welcome, Shop Name
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
                            <tr>{ totalMoney && totalMoney.map(post =>(
                                                <td class = "list-group-item">
                                                    <small> <i class ="fa fa-clock-o" key ={post.total}>{post.total} $ </i> </small>
                                                </td>
                                        ))
                                        }
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td> 
                                    Welcome, Shop Name
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
                                      
                                        {   products && products .map(post =>(
                                                <li class = "list-group-item">
                                                    <a key ={post.product_id}> {post.product_name} </a>
                                                    <small> <i class ="fa fa-clock-o" key ={post.product_id}>{post.nosale} order </i> </small>
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
                                                    recentOrder && recentOrder.map(order =>(
                                                        <tr>
                                                            <td key ={order.order_id}> {order.order_id}</td>
                                                            <td key ={order.order_id}> {order.user_id}</td>
                                                            <td key ={order.order_id}> {order.status}</td>
                                                            <td key ={order.order_id}> {order.createdAt}</td>
                                                            <td key ={order.order_id}> {order.requiredDate}  </td>
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
        </section>
        </div>
        
    );
}

export default Dashboard;