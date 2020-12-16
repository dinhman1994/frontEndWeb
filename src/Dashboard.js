import React, { useState,useEffect } from 'react';
import axios from "axios";
import './Dashboard.css';
import  ChartOrders from './ChartOrders'
import  ChartMoney from './ChartMoney'

function Dashboard(){
    return(
        <div className="dashboard">
        <section class="page">
            <nav class="navbar-aside navbar-static-side" role="navigation">
                <div class="sidebar-collapse nano">
                    <div class="nano-content">
                        <ul class="nav metisMenu" id="side-menu">
                            <li class="nav-header">
                                <div class="dropdown side-profile text-left"> 
                                    <span style={{display: "block"}}>
                                        <img alt="image" class="img-circle" src="./images/avatar-1.jpg" width="40" />
                                    </span>
                                    <span class="clear" style={{display: "block"}}> <span class="block m-t-xs"> <strong class="font-bold">John Doe </strong>
                                    </span></span> 
                                </div>
                            </li>
                            <li>
                                <a><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard </span></a>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        

            <div id="wrapper">
                <div class="content-wrapper container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-title">
                                <h1>Dashboard <small></small></h1>
                                <ol class="breadcrumb">
                                    <li><a href="#"><i class="fa fa-home"></i></a></li>
                                    <li class="active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-3 margin-b-30">
                            <div class="tile">
                                <div class="tile-title clearfix">
                                    Total orders
                                    <span class="pull-right"><i class="fa fa-caret-up"></i> 33%</span>
                                </div>
                                <div class="tile-body clearfix">
                                    <i class="fa fa-cart-plus"></i>
                                    <h4 class="pull-right">2.5K</h4>
                                </div>
                                <div class="tile-footer">
                                    <a>Welcome, ShopName</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 margin-b-30">
                            <div class="tile">
                                <div class="tile-title clearfix">
                                    Total Money
                                    <span class="pull-right"><i class="fa fa-caret-up"></i> 33%</span>
                                </div>
                                <div class="tile-body clearfix">
                                    <i class="fa fa-cart-plus"></i>
                                    <h4 class="pull-right">2.5K</h4>
                                </div>
                                <div class="tile-footer">
                                    <a> Welcome, ShopName</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="panel panel-default recent-activites">
                                <div class="panel-heading">
                                    <h4 class="panel-title">Total Orders </h4>
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
                        
                            <div class="panel panel-default ">
                                <div class="panel-heading">
                                    <h4 class="panel-title"> Total money</h4>
                                    <div class="panel-actions">
                                        <a href="#" class="panel-action panel-action-toggle" data-panel-toggle></a>
                                        <a href="#" class="panel-action panel-action-dismiss" data-panel-dismiss></a>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <div>
                                    <ChartMoney> </ChartMoney>
                                    </div>
                                </div>
                            </div>  
                        

                    </div>


                    <div class="row">
                        <div class="col-md-4">
                            <div class="panel panel-default recent-activites">
                                <div class="panel-heading">
                                    <h4 class="panel-title"> Top Products </h4>
                                    <div class="panel-actions">
                                        <a href="#" class="panel-action panel-action-toggle" data-panel-toggle></a>
                                        <a href="#" class="panel-action panel-action-dismiss" data-panel-dismiss></a>
                                    </div>
                                </div>
                                <div class="panel-body pad-0">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <a href="#"> Sản phẩm top 1</a>
                                            <small><i class="fa fa-clock-o"></i> Số lượng người mua</small>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="#">Sản phẩm top 2</a>
                                            <small><i class="fa fa-clock-o"></i> Số lượng người mua</small>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="#">Sản phẩm top 3</a>
                                            <small><i class="fa fa-clock-o"></i> Số lượng người mua</small>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="#">Sản phẩm top 4</a>
                                            <small><i class="fa fa-clock-o"></i> Số lượng người mua</small>
                                        </li>                            
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
                                                    <th>Date</th>
                                                    <th>Total</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>4563</td>
                                                    <td>David</td>
                                                    <td><span class="text-danger">Pending</span></td>
                                                    <td>04 / 08 / 2015</td>
                                                    <td>$5679.99</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>8997</td>
                                                    <td>John</td>
                                                    <td><span class="text-success">Success</span></td>
                                                    <td>04 / 08 / 2015</td>
                                                    <td>$5679.99</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>2342</td>
                                                    <td>Mohinder</td>
                                                    <td><span class="text-danger">Pending</span></td>
                                                    <td>04 / 08 / 2015</td>
                                                    <td>$5679.99</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>5677</td>
                                                    <td>Mohinder</td>
                                                    <td><span class="text-danger">Pending</span></td>
                                                    <td>04 / 08 / 2015</td>
                                                    <td>$5679.99</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td>6756</td>
                                                    <td>Camron</td>
                                                    <td><span class="text-success">Success</span></td>
                                                    <td>04 / 08 / 2015</td>
                                                    <td>$5679.99</td>
                                                    
                                                </tr>
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