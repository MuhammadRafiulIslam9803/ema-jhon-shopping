import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header-Style'> 
           <img src={logo} alt="" />
           <div className='Header-Ankor'>
            <a href="/home">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
           </div>

        </div>
    );
};

export default Header;