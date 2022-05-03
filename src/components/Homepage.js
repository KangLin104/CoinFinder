import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../service/cryptoApi'
import { Cryptocurrency, News } from '../components'


const Homepage = () => {

    const { data, isFetching }= useGetCryptosQuery(10)
    const globalStats= data?.data?.stats

    if(isFetching) return "loading..."
    console.log(globalStats)

    console.log(data)
    return (
        <>
            <Typography.Title level={2} className='heading'>Crypto Stats </Typography.Title>
            <Row>
                <Col span={12}> 
                    <Statistic title="Total Cryptocurrency " value={globalStats.total}/>
                </Col>
                <Col span={12}> 
                    
                    <Statistic title="Total Exchange " value={millify(globalStats.totalExchanges)}/>
                    
                </Col>
                <Col span={12}>   
                    <Statistic title="Total Market Cap " value={millify(globalStats.totalMarketCap)}/>
                </Col>
                <Col span={12}> 
                    <Statistic title="Total 24h Volume " value={millify(globalStats.total24hVolume)}/>
                </Col>
                <Col span={12}> 
                    <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/>
                </Col>
            </Row>

            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'> Top 10 cryptocurrency in the world   </Typography.Title>
                <Typography.Title level={4} className='show-more'> <Link to="/cryptocurrency"> Show More</Link>   </Typography.Title>
            </div>
            <Cryptocurrency simplified/>
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'> Latest Crypto News  </Typography.Title>
                <Typography.Title level={4} className='show-more'> <Link to="/news"> Show More</Link>   </Typography.Title>
            </div>
            <News simplified/>
        </>
    )
}

export default Homepage
