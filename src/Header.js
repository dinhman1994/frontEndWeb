import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import axios from "axios";


import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";



function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
	const [cookies, setCookie] = useCookies(['token']);

	useEffect(() => {
    console.log(cookies.token);
    async function fetchData(){
      const userData = await axios({
        method: 'get',
        url: 'http://localhost:8000/profile',
        headers : {
            token: cookies.token
        }
      });
      if (userData.data.message != 'Success') return;
      dispatch({
          type: "SET_USER",
          user: {
              ...userData.data.user
          },
      });
      return ;
    }

    if(user === null){
      fetchData();
    }
	},
	[user]);


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
        <Link to={user ? '/signout' : '/login'}>
          <div className="header__option">
            <span className="header__optionLineOne">Hello {user ? user.name : 'Guest' }</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Log In'}</span>
          </div>
        </Link>
        <Link to='/profile'>
          {
            user ? <div className={classNames({hidden: (user===null)},"header__option")}>
                    <img src={user.avatar} className="header_avatar"/>
                   </div> : null
          }
        </Link> 
        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="shoppingIcon"/>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
