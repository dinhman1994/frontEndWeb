import React, { useState,useEffect } from 'react';
import './Products.css';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useForm } from 'react-hook-form';
import axios from "axios";

import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import SettingsApplicationsSharpIcon from '@material-ui/icons/SettingsApplicationsSharp';
import StorefrontSharpIcon from '@material-ui/icons/StorefrontSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import CameraAltSharpIcon from '@material-ui/icons/CameraAltSharp';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';

import ProductInShop from "./ProductInShop";

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};


function CreateProduct() {
    const [{ user }, dispatch] = useStateValue();
    const [shopProducts, setShopProducts] = useState([]);
    const backEndServe = 'http://localhost:8000/';
	useEffect(() => {
            async function fetchData(){
                const result = await axios({
                    method: 'get',
                    url: `http://localhost:8000/shop/${2}/product`
                });
                setShopProducts(result.data);
            }
            fetchData();   
	},[]);
    if (shopProducts.length != 0)
    return (
        <div className="Products">
            <nav class="navbar navbar-expand-xl">
                <div class="h-100">
                    <a class="navbar-brand" href="index.html">
                        <h1 class="tm-site-title mb-0">Product Admin</h1>
                    </a>
                    <div class="navListRef" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto h-100">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">
                                    <i class="fas fa-tachometer-alt"></i> Dashboard
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i class="far fa-file-alt"></i>
                                    <span> Reports <i class="fas fa-angle-down"></i> </span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Daily Report</a>
                                    <a class="dropdown-item" href="#">Weekly Report</a>
                                    <a class="dropdown-item" href="#">Yearly Report</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="products.html">
                                    <i class="fas fa-shopping-cart"></i> Products
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="accounts.html">
                                    <i class="far fa-user"></i> Accounts
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i class="fas fa-cog"></i>
                                    <span> Settings <i class="fas fa-angle-down"></i> </span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Profile</a>
                                    <a class="dropdown-item" href="#">Billing</a>
                                    <a class="dropdown-item" href="#">Customize</a>
                                </div>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link d-block" href="login.html">
                                    Admin, <b>Logout</b>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container mt-5">
                <div class="row tm-content-row">
                    <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
                        <div class="tm-bg-primary-dark tm-block tm-block-products">
                            <div class="tm-product-table-container">
                                <table class="table table-hover tm-table-small tm-product-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">&nbsp;</th>
                                            <th scope="col">PRODUCT NAME</th>
                                            <th scope="col">PRODUCT PRICE</th>
                                            <th scope="col">UNIT SOLD</th>
                                            <th scope="col">IN STOCK</th>
                                            <th scope="col">EXPIRE DATE</th>
                                            <th scope="col">&nbsp;</th>
                                            <th scope="col">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>  
                                        {shopProducts.map( shopProduct => 
                                        <ProductInShop 
                                            product_id = {shopProduct.product_id} 
                                            product_name = {shopProduct.product_name}
                                            product_image = {shopProduct.product_image}
                                            product_price = {shopProduct.product_price}
                                            quantityInStock = {shopProduct.quantityInStock}
                                            createdAt = {shopProduct.createdAt}
                                        />)}   
                                    </tbody>
                                </table>
                            </div>
                            <a
                                href="add-product.html"
                                class="btn btn-primary btn-block text-uppercase mb-3">Add new product</a>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
                        <div class="tm-bg-primary-dark tm-block tm-block-product-categories">
                            <h2 class="tm-block-title">Product Sold In Week</h2>
                            <div class="tm-product-table-container">
                                <table class="table tm-table-small tm-product-table">
                                    <tbody>
                                        <tr>
                                            <th scope="col">PRODUCT NAME</th>
                                            <th scope="col">QUANLITY</th>
                                            <th scope="col">&nbsp;</th>
                                        </tr>
                                        <tr>
                                            <td class="tm-product-name">Product Category 1</td>
                                            <td class="tm-product-name">15</td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tm-product-name">Product Category 1</td>
                                            <td class="tm-product-name">15</td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tm-product-name">Product Category 1</td>
                                            <td class="tm-product-name">15</td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tm-product-name">Product Category 1</td>
                                            <td class="tm-product-name">15</td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                            <button class="btn btn-primary btn-block text-uppercase mb-3">
                                Add new category
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="tm-footer row tm-mt-small">
                <div class="col-12 font-weight-light">
                    <p class="text-center text-white mb-0 px-4 small">
                        Copyright &copy; <b>2018</b> All rights reserved. 
                        
                        Design: <a rel="nofollow noopener" href="https://templatemo.com" class="tm-footer-link">Template Mo</a>
                    </p>
                </div>
            </footer>
        </div>
    );
    else return (
        <div>
        </div>
    )
}		
export default CreateProduct