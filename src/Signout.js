import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useCookies } from 'react-cookie';
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { useStateValue } from "./StateProvider";

function Signout(){
    let history = useHistory();
    const [{ user }, dispatch] = useStateValue();
    const [cookies, removeCookie] = useCookies(['token']);

    useEffect(() => {
        async function fetchData(){
            dispatch({
				type: "SET_USER",
                user: null
            });
            removeCookie('token');
            history.push('/');
        }

        fetchData();
	},[]);

    return(
        <div className="Signout">Wait a minute</div>
    );
}

export default Signout;