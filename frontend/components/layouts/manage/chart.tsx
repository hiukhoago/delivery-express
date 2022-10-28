import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import 'chart.js/auto';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

const Chart = (data : any) => {

    const dataBar = {
        labels: ['Đã giao hàng', 'Đang vận chuyển', 'Đang chờ lấy hàng', 'Đang chờ xác nhân', 'Đã hủy'],
        datasets: [{
            label: 'Trạng thái hóa đơn',
            data: [125, 20, 5, 56, 45, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    const dataLine = {
        labels: ['Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8'],
        datasets: [{
            label: 'Doanh thu trong quý 2',
            data: [12562000, 15254000, 8451369, 20365000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const option = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'bottom'
    }

    return (
        <div className='chart'>
            <Bar
                datasetIdKey='id'
                data={dataBar}
                options={{
                    // title:{
                    //     display:option.displayLegend,
                    //     text:'Thông kê hóa đơn theo trạng thái'
                    // },
                    // legend:{
                    //     display:option.displayLegend,
                    //     position:option.legendPosition,
                    // }
                    borderColor:'pink'
                }}
            />
            <Line
                datasetIdKey='id'
                data={dataLine}
                // options={{
                //     title:{
                //         display:option.displayLegend,
                //         text:'Thông kê hóa đơn theo trạng thái'
                //     },
                //     legend:{
                //         display:option.displayLegend,
                //         position:option.legendPosition,
                //     }
                // }}
            />
        </div>
    )
}

// class Chart extends Component {
//     constructor(props:any) {
//         super(props);
//         this.state = {
//             chartData: {
//                 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//                 datasets: [{
//                     label: '# of Votes',
//                     data: [12, 19, 3, 5, 2, 3],
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2)',
//                         'rgba(54, 162, 235, 0.2)',
//                         'rgba(255, 206, 86, 0.2)',
//                         'rgba(75, 192, 192, 0.2)',
//                         'rgba(153, 102, 255, 0.2)',
//                         'rgba(255, 159, 64, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)'
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             nus:null
//         }
//     }
//     render() {
//         return (
//             <div className='chart'>
//                 {/* <Bar
//                     // data={null}
//                     options={{}}
//                 /> */}
//             </div>
//         )
//     }

// }
export default Chart; 