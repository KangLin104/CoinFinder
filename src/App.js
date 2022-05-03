import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from "antd"
import { Navbar, Homepage, Cryptocurrency, CryptoDetail, News } from "./components/index"
import "./App.css"

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar/>
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path="/"  element={<Homepage/>} />
                            <Route path="/cryptocurrency"  element={<Cryptocurrency/>} />
                            <Route path="/crypto/:coinId"  element={<CryptoDetail/>} />
                            <Route path="/news" element={<News/>} />
                                
                           
                        </Routes>
                    </div>
                </Layout>
            
            </div>
            
        </div>
    )
}

export default App
