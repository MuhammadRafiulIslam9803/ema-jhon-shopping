import React from 'react';
import './Calculate.css'

const Claculate = ({cart}) => {
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h3>Selected Items: <span className='grand-total'>{quantity}</span></h3>
            <h3>Total price: $<span className='grand-total'>{total}</span></h3>
            <h3>Total Shipping: $<span className='grand-total'>{shipping}</span></h3>
            <h3>Tax: $<span className='grand-total'>{tax}</span></h3>
            <h2>Grand Total: $<span className='grand-total'>{grandTotal.toFixed(2)}</span></h2>
        </div>
    );
};

export default Claculate;