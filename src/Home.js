import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useStateValue } from "./StateProvider";
import axios from "axios";

import "./Home.css";
import Product from "./Product";
import Category from "./Category";
import CategoryHomeProduct from "./CategoryHomeProduct";


function Home() {
	const [products, setProducts] = useState([]);
	const [cookies, setCookie] = useCookies(['token']);
	const [{ user }, dispatch] = useStateValue();
	const backEndServe = 'http://localhost:8000/';

	useEffect(() => {
		async function fetchData(){
			const result = await axios({
				method: 'get',
				url: `http://localhost:8000`
			});
			console.log(result.data);
			setProducts(result.data);
		}
		fetchData();
	},
	[]);
	
	if(products.length === 0)
		return (
			<div className="home">
			</div>
		);
		else return (
			<div className="home">
				<div className="home__container">
					<img
						className="home__image"
						src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
						alt="VCC"
					/>
					<Category />
					<div>
						<h2>HOT PRODUCTS</h2>
					</div>
					<div className="home__row">
						{
							products.slice(0,2).map(
								(product) => <Product
								id={product.product_id}
								name={product.product_name}
								price={product.product_price}
								rating={5}
								image={backEndServe+product.product_image}
							/>)
						}
					</div>
					<div className="home__row">
						{
							products.slice(2,5).map(
								(product) => <Product
								id={product.product_id}
								name={product.product_name}
								price={product.product_price}
								rating={5}
								image={backEndServe+product.product_image}
							/>)
						}
					</div>

					<div className="home__row">
						{
							products.slice(5,6).map(
								(product) => <Product
								id={product.product_id}
								name={product.product_name}
								price={product.product_price}
								rating={5}
								image={backEndServe+product.product_image}
							/>)
						}
					</div>
				</div>
			</div>
		);
}

export default Home;
