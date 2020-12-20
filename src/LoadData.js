import React, { useState,useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useStateValue } from "./StateProvider";
import axios from "./axios";

function LoadData(){
    const [{ basket, user,shop }, dispatch] = useStateValue();
    const [cookies, setCookie] = useCookies(['token']);
    useEffect(()=>{
        async function fetchData(){
            if(user == null){
                const userData = await axios({
					method: 'get',
					url: 'http://localhost:8000/profile',
					headers : {
						token: cookies.token
					}
                });
                if (userData.data.message === 'Success') 
					dispatch({
						type: "SET_USER",
						user: {
								...userData.data.user
						},
                    });
            }
            if(shop == null){
				const shopData = await axios({
					method: 'get',
					url: 'http://localhost:8000/shopProfile',
					headers : {
						token: cookies.token
					}
				});
				if (shopData.data.message === 'Success')
					dispatch({
						type: "SET_SHOP",
						shop: {
								...shopData.data.shop
						},
					});
			}
			return ;
        }
        fetchData();
    })
    return(
        <></>
    )
}

export default LoadData;