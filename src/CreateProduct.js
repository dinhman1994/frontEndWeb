import React, { useState,useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import axios from "./axios";

import './CreateProduct.css';

import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import SettingsApplicationsSharpIcon from '@material-ui/icons/SettingsApplicationsSharp';
import StorefrontSharpIcon from '@material-ui/icons/StorefrontSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import CameraAltSharpIcon from '@material-ui/icons/CameraAltSharp';

const validateForm = errors => {
	let valid = true;
	Object.values(errors).forEach(val => val.length > 0 && (valid = false));
	return valid;
};

function CreateProduct() {
	const [{ shop }, dispatch] = useStateValue();
	const [formErrors, setFormErrors] = useState({
		product_name: '',
		product_image: '',
		product_price: '',
		product_description: '',
		quantityInStock: '',
		category_id: 'You must choose category'
	});
	const [product_image , setProduct_image] = useState(null);
	const {register , handleSubmit} = useForm();
	const [cookies, setCookie] = useCookies(['token']);


	useEffect(() => {
	},[formErrors]);
	const handleChange = (event) => {
		const { name, value } = event.target;
		let errors = {
				...formErrors
		};
		switch (name) {
			case 'product_name': 
				errors.product_name = 
					value.length < 5
						? 'Name must be at least 5 characters long!'
						: '';
				break;
			case 'product_image': 
				errors.product_image = 
					(value)
						? ''
						: 'You must have Product Image';
				setProduct_image(event.target.files[0]);
				break;
			case 'product_price': 
				errors.product_price = 
					(parseInt(value)>0)
						? ''
						: 'Price must more than 0';
				break;
			case 'product_description':
				errors.product_description = 
					value.length < 10
					? 'Description must be at least 10 characters long!'
					: '';
				break;
			case 'quantityInStock': 
				errors.quantityInStock = 
					(parseInt(value)>0)
						? ''
						: 'Price must more than 0';
					break;
			case 'category_id': 
				errors.category_id = 
					(value==="Select Category")
						? 'You must choose category'
						: '';
			default:	
				break;
		}

		setFormErrors(errors);
	}

	const onSubmit = (data) => {
		async function sendForm(data){
			const dataForm = new FormData(); 
			dataForm.append('product_image',product_image);
			dataForm.append('shop_id',2);
			const result = await axios({
				method: 'post',
				url: 'http://localhost:8000/profile',
				headers : {
					token: cookies.token
				},
				data: dataForm
			});
			if(result.data.message != 'Success'){
				alert(result.data.message);
				return;
			};
			window.location.reload(false);
			console.log(data);
		}

		if(!validateForm(formErrors)){
			alert("You have some errors in your form !!!");
			return;
		}

		sendForm(data);
	}
	
	return (
		<div className="createProduct">
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
								<div className="dropdown-menu" aria-label led by="navbarDropdown">
									<a className="dropdown-item" href="#">Daily Report</a>
									<a className="dropdown-item" href="#">Weekly Report</a>
									<a className="dropdown-item" href="#">Yearly Report</a>
								</div>
							</li>
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link d-block" href="login">
									<ExitToAppSharpIcon />
								 	<b>LOGOUT</b>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>		
			<div className="container">
				<div className="row">
					<div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
						<div className="tm-bg-primary-dark tm-block tm-block-h-auto">
							<div className="row">
								<div className="col-12">
									<h2 className="tm-block-title d-inline-block">Add Product</h2>
								</div>
							</div>
							<form  className="tm-edit-product-form" onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
							<div className="row tm-edit-product-row">
								<div className="col-xl-6 col-lg-6 col-md-12">
										<div className="form-group mb-3">
											<label
												for="name"
												>Product Name
											</label>
											<input
												ref={register}
												id="name"
												name="product_name"
												type="text"
												className="form-control validate"
												onChange={handleChange}
												required
											/>
										</div>
										{formErrors.product_name.length > 0 && 
																<span className='error'>{formErrors.product_name}</span>}
										<div className="form-group mb-3">
											<label
												for="price"
												>Product Price
											</label>
											<input
												ref={register}
												id="price"
												name="product_price"
												type="number"
												className="form-control validate"
												onChange={handleChange}
												required
											/>
										</div>
										{formErrors.product_price.length > 0 && 
																<span className='error'>{formErrors.product_price}</span>}
										<div className="form-group mb-3">
											<label
												for="description"
												>Description</label
											>
											<textarea
												ref={register}
												className="form-control validate"
												rows="3"
												name="product_description"
												onChange={handleChange}
											></textarea>
										</div>
										{formErrors.product_description.length > 0 && 
																<span className='error'>{formErrors.product_description}</span>}
										<div className="form-group mb-3">
											<label
												for="category"
												>Category</label
											>
											<select
												ref={register}
												className="custom-select tm-select-accounts"
												id="category"
												name="category_id"
												onChange={handleChange}
											>
												<option selected>Select Category</option>
												<option value="1">Văn phòng phẩm</option>
												<option value="2">Tivi</option>
												<option value="3">Thực phẩm</option>
												<option value="4">Sách</option>
												<option value="5">Mẹ và Bé</option>
												<option value="6">Nhà cửa đời sống</option>
												<option value="7">Mỹ phẩm</option>
												<option value="8">Máy tính - Thiết bị VP</option>
												<option value="9">Điện Lạnh - Điện gia dụng</option>
											</select>
										</div>
										{formErrors.category_id.length > 0 && 
																<span className='error'>{formErrors.category_id}</span>}
										<div className="row">
													<div className="form-group mb-3 col-xs-12 col-sm-6">
														<label
															for="stock"
															>QUANTITY IN STOCK 
														</label>
														<input
															ref={register}
															id="stock"
															name="quantityInStock"
															type="number"
															className="form-control validate"
															onChange={handleChange}
															required
														/>
														{formErrors.quantityInStock.length > 0 && 
																<span className='error'>{formErrors.quantityInStock}</span>}
													</div>
													
										</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
									<div className="tm-product-img-dummy mx-auto">
										<CameraAltSharpIcon />
									</div>
									<div className="custom-file mt-3 mb-3">
										<input 
											ref={register} 
											id="fileInput" 
											type="file"  
											name="product_image"
											onChange={handleChange}
										/>
									</div>
									{formErrors.product_image.length > 0 && 
											<span className='error'>{formErrors.product_image}</span>}
								</div>
								<div className="col-12">
									<button type="submit" className="btn btn-primary btn-block text-uppercase">Add Product Now</button>
								</div>
							</div>
							</form>
							
						</div>
					</div>
				</div>
			</div>
			<footer className="tm-footer row tm-mt-small">
					<div className="col-12 font-weight-light">
						<p className="text-center text-white mb-0 px-4 small">
							Copyright &copy; <b>2018</b> All rights reserved. 
							
							Design: <a rel="nofollow noopener" href="https://templatemo.com" className="tm-footer-link">Template Mo</a>
					</p>
					</div>
			</footer>			
		</div>
	)
}		
export default CreateProduct