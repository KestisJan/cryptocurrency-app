import React from "react";
import { Link } from 'react-router-dom';
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';

import icon from '../images/cryptologo.png'

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size='large'/>
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>CryptoApp</Link>
                </Typography.Title>
                <Button className='menu-control-container'>
                    <MenuOutlined />
                </Button>
            </div>
            <Menu theme='blue'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )   
}


export default NavBar