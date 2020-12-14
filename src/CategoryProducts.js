import React, { useState, useEffect } from 'react';
import { useParams,useHistory} from "react-router-dom";
import "./CategoryProduct.css";
import Product from "./Product";
import Category from "./Category";
import axios from "./axios";


function CategoryProducts() {
	const [products, setProducts] = useState([]);
	let { category_id } = useParams();
	let name;
	switch (category_id){
		case '1':
			name = "Máy tính - Thiết bị VP";
			break;
		case '2':
			name = "Điện lạnh - Điện gia dụng";
			break;
		case '3':
			name = "Kỹ thuật số";
			break;
		case '4':
			name = "Mẹ và bé";
			break;
		case '5':
			name = "Mỹ phẩm";
			break;
		case '6':
			name = "Nhà cửa đời sống";
			break;
		case '7':
			name = "Sách";
			break;
		case '8':
			name = "Thực phẩm";
			break;
		case '9':
			name = "Tivi";
			break;
		case '10':
			name = "Văn phòng phẩm"
			break;
	}
	
	useEffect(() => {
		async function fetchData(){
			const result = await axios({
				method: 'get',
				url: `http://localhost:8000/category/${category_id}`
			});
			setProducts(result.data);
		}
		fetchData();
	},[]);
	
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
			alt=""
			/>

			<div className="home__row">
			<Product
				id="12321341"
				name={products[0].product_name}
				price={products[0].product_price  }
				rating={5}
				image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
			/>
			<Product
				id="49538094"
				name="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
				price={239.0}
				rating={4}
				image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
			/>
			</div>

			<div className="home__row">
			<Product
				id="4903850"
				name="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
				price={199.99}
				rating={3}
				image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
			/>
			<Product
				id="23445930"
				name="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
				price={98.99}
				rating={5}
				image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
			/>
			<Product
				id="3254354345"
				name="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
				price={598.99}
				rating={4}
				image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
			/>
			</div>

			<div className="home__row">
			<Product
				id="90829332"
				name="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
				price={1094.98}
				rating={4}
				image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
			/>
			</div>
		</div>
		</div>
	);
}

export default CategoryProducts;