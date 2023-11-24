import React, { useContext, useEffect, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Badge} from 'antd';
import './styleCart.css'
import { Link } from 'react-router-dom';
import { ShopContext } from "../cartContext/cartContext";

const CartWidget = () => {
   
const {numero} = useContext(ShopContext)
    return (
        <div >
            <Badge count={numero}>
            <Link to={`cartDetailContainer`}><Avatar shape="square" size="large" icon={<ShoppingCartOutlined/>} className='colorNumberCart'/></Link>
            </Badge>
        </div>
    )
}

export default CartWidget