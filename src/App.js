import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd'

import { NavBar, Homepage, Cryptocurrencies, News, CryptoDetails, NotFound } from './components'


const App = () => {
    return (
       <div className='app'>
            <div className='navbar'>
                <NavBar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Homepage />}/>
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                            <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                            <Route path='/news' element={<News />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className='footer'>
                <Typography.Title className='footer' level={5} style={{ color: 'white', textAlign: 'center' }}>
                    CryptoApp <br/>
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/news'>News</Link>
                </Space>
            </div>
       </div>
    )
}

export default App



