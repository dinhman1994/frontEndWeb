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
                        label:'Orders',
                        data:[
                            600,
                            400,
                            650,
                            400,
                            300,
                            350,
                        ],
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