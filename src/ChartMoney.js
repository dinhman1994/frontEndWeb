import { SignalWifi1BarLockSharp } from '@material-ui/icons';
import Axios from 'axios';
import React, {Component, useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2';

const ChartMoney =() =>{
    const [chartData,setChartData] =useState({})
    const chart =  () =>{
        let shopMonth = [];
        let shopMoney =[];
        Axios.get("http://localhost:8000/shop/3/order")
        .then(res =>{ 
            console.log(res);
            for( const dataObj of res.data){
                shopMoney.push(parseInt(dataObj.total ))
                shopMonth.push(parseInt(dataObj.order_id ))

            }
        })
        .catch(error =>{
            console.log(error);
        });

        console.log(shopMonth, shopMoney);
        setChartData({
            labels : shopMonth,
            datasets:[
                {
                    label : 'Total Money',
                    data:shopMoney,
                    backgroundColor: [
                        'rgb(255,255,0)',
                        'rgb(54,162,235)',
                        'rgb(255,206,86)',
                        'rgb(75,102,255)',
                        'rgb(153,159,64)',
                        'rgb(255,184,64)',
                    ]

                }
            ]
        })
    }
    useEffect(() =>{
        chart()
    },[])

    return(
        <div className = 'chart'>
        <Bar data={chartData}></Bar>
        
        </div>
    )
}
export default ChartMoney;