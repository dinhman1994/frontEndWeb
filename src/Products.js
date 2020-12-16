import React, { useState,useEffect } from 'react';
import './Products.css';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useForm } from 'react-hook-form';
import { auth } from "./firebase";

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

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};


function CreateProduct() {
    const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		console.log(user);
	},[user]);

	const signIn = () => {
		// dispatch the item into the data layer
		dispatch({
		  type: "SET_USER",
		  user: {
			id: 1,
			name: "Binh Duong"
		  },
		});
	};

	const register = e => {
		// e.preventDefault();
		console.log("Registered");
	}

    return (
        <div className="Products">
            <nav className="navbar navbar-expand-xl">
				<div className="h-100">
					<a className="navbar-brand" href="index.html">
						<h1 className="tm-site-title mb-0">WELL COME SHOPNAME</h1>
					</a>
					<div className="navListRef" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto h-100">
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									<HomeSharpIcon className="navIcon" /> HOME
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									<DashboardSharpIcon className="navIcon" /> DASHBOARD				 
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									<HistorySharpIcon className="navIcon" /> HISTORY				 
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									<AccountCircleSharpIcon className="navIcon" /> PROFILE				 
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="index.html">
									<StorefrontSharpIcon className="navIcon" /> MY STORE				 
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="false"
									aria-expanded="true"
								>
									<SettingsApplicationsSharpIcon /> SETTINGS
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">Daily Report</a>
									<a className="dropdown-item" href="#">Weekly Report</a>
									<a className="dropdown-item" href="#">Yearly Report</a>
								</div>
							</li>
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link d-block" href="login.html">
									<ExitToAppSharpIcon />
								 	<b>LOGOUT</b>
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
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img src="" alt="image" /></th>
                                            <td class="tm-product-name">Lorem Ipsum Product 1</td>
                                            <td>15.00 $</td>
                                            <td>1,450</td>
                                            <td>550</td>
                                            <td>28 March 2019</td>
                                            <td>
                                                <form action="" method="post">
                                                    <button type="submit">
                                                        <DeleteForeverSharpIcon />
                                                    </button>
                                                </form>
                                            </td>
                                            <td> 
                                                <Link to="/editProduct">
                                                    <EditSharpIcon />
                                                </Link>
                                            </td>
                                        </tr>   
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
}		
export default CreateProduct