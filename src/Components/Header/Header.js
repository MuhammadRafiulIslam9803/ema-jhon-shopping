import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-Style'> 
           <img src={logo} alt="" />
           <div className='Header-Ankor'>
            <Link to="/home">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/order">Order</Link>
            <Link to="/about">About</Link>
           </div>

        </div>
    );
};

export default Header;