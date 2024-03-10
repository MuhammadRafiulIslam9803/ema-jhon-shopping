import React from 'react';
import './Calculate.css'

const Claculate = ({cart}) => {
    console.log(cart)
    let quantity =0 ;
    let price =0;
    for (const product of cart){
        quantity = quantity + product.quantity
        price = price + product.price * product.quantity
        console.log(cart.quantity)
    }
    return (
        <div className='CalculateStyle'>
            <h1>Calculation</h1>
            <h3>Selected Item : {quantity}</h3>
            <h3>Price : {price}</h3>
        </div>
    );
};

export default Claculate;