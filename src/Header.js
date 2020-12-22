import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import axios from "axios";


import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StorefrontSharpIcon from '@material-ui/icons/StorefrontSharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';


function Header() {
	const [{ basket, user,shop }, dispatch] = useStateValue();
	const [cookies, setCookie] = useCookies(['token']);
	const backEndServe = 'http://localhost:8000/';
	useEffect(() => {
	},
	[]);

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					// src="/images/avatars/avatar.png"
				/>
			</Link>

			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link to={user || shop ? '/signout' : '/login'}>
					<div className="header__option">
						<span className="header__optionLineOne">Hello {user ? user.name : 'Guest' }</span>
						<span className="header__optionLineTwo">{user || shop ? 'Sign Out' : 'Log In'}</span>
					</div>
				</Link>
				<Link to='/profile'>
					{
						user ? <div className={classNames("header__option")}>
										<img src={backEndServe+user.avatar} className="header_avatar"/>
									 </div> : null
					}
				</Link>
				<Link to={user ? `/orderDetail/${user.user_id}` : `/`}>
					{
						user ? <div className={classNames("header__option")}>
									<span className="header__optionLineOne">YOUR HISTORY ORDER</span>
									<HistorySharpIcon />
								</div> : null
					}
				</Link>
				<Link to='/shopProfile'>
					{
						shop ? <div className={classNames("header__option")}>
										<img src={backEndServe+shop.avatar} className="header_avatar"/>
									 </div> : null
					}
				</Link> 
				<Link to={shop ? `/${shop.shop_id}/shopProducts` : `/`}>
					{
						shop ? <div className={classNames("header__option")}>
									<span className="header__optionLineOne">YOUR SHOP</span>
									<StorefrontSharpIcon />
								</div> : null
					}
				</Link>
				<Link to='/orders'>
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				
				

				{/* <div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div> */}

				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon className="shoppingIcon"/>
						<span className="header__optionLineTwo header__basketCount">
							{basket.reduce((amount,item) => item.quantity + amount,0)}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
