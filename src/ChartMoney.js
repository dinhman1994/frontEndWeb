import { SignalWifi1BarLockSharp } from '@material-ui/icons';
import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state ={
            chartData:{
                labels:['January','February' ,'March','April','May','June'],
                datasets:[
                    {
                        label:'Money',
                        data:[
                            6000,
                            4000,
                            6500,
                            4000,
                            3070,
                            3570,
                        ],
                        backgroundColor: [
                            'rgb(255,255,0)',
                            'rgb(54,162,235)',
                            'rgb(255,206,86)',
                            'rgb(75,102,255)',
                            'rgb(153,159,64)',
                            'rgb(255,184,64)',
                        ]
                        ,
                        borderWidth:1,
                        borderColor:'#777',
                        hoverBorderWidth:3,
                    }
                ]
            }
        }
    }; 
    render(){
        return (
            <div className ="chart">
                <Bar
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}
export default Chart;