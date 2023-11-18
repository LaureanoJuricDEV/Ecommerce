import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Badge} from 'antd';
import './styleCart.css'
import { Link } from 'react-router-dom';
const CartWidget = () => {
    
    

    return (
        <div >
            <Badge count={10}>
            <Link to={`cartDetailContainer`}><Avatar shape="square" size="large" icon={<ShoppingCartOutlined/>} className='colorNumberCart'/></Link>
            </Badge>
            
        </div>
    )
}

export default CartWidget