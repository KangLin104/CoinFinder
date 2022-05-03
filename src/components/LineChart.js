import React from 'react'
import { Line } from 'react-chartjs-2'
import {Col, Row, Typography} from 'antd'
import { Chart as ChartJS } from "chart.js/auto"

const {Title} = Typography


const LineChart = ({ coinHistory, currentPrice, coinName }) => {

    const coinPrice=[]
    const coinTimestamp=[]

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory?.data?.history[i].price);
      }
    
    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        const dates=coinHistory?.data?.history[i].timestamp
        coinTimestamp.push(new Date(dates*1000).toLocaleDateString());

    }
    

    const data = {
        labels: coinTimestamp.reverse(),
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice.reverse(),
            fill: false,
            backgroundColor: 'rgb(102, 255, 0)',
            borderColor: 'rgb(102, 255, 0)',
          },
        ],
      };
    
      const options = {
        scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
      };

    return(
        <>
          <Row className='chart-header'>
              <Title level={2} className='chart-title'> {coinName} Price Chart</Title>
              <Col className='price-container'>
              <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
                  <Title level={5} className='current-price'> Current {coinName} Price: $ {currentPrice} </Title>
              </Col>
          </Row>
          <Line data={data} options={options}/>
    
        </>

  
  
    )};

export default LineChart;
