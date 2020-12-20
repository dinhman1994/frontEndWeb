import React, { useState, useEffect } from 'react';
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  }, [])

    return (
        <div className='orders'>
        </div>
    )
}

export default Orders
