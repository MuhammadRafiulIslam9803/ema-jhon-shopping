import React, { useState } from 'react';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import Claculate from '../Calculation/Claculate';
import OrderProducts from '../OrderProduct/OrderProducts';
import { removeFromDB } from '../../Utilities/fakedb';



const Order = () => {
    const details = useLoaderData()
    const {product , initialCart} = details
    const [cart ,setCart] = useState(initialCart)
    // console.log(cart)

    const removeOrder = (id) =>{
        // console.log(id)
        const remainingOrder = cart.filter(productOfCart => productOfCart.id !== id )
        setCart(remainingOrder)
        removeFromDB(id)
    }
    return (
        <div className='Shop-conteiner'>
            <div className='order-conteiner'>
               {
                cart.map(singleCart => <OrderProducts 
                key={singleCart.id}
                product={singleCart}
                removeOrder={removeOrder}
                ></OrderProducts>)
               }
            </div>
            <div className='Calculate-part'>
                {
                    <Claculate 
                    cart = {cart}
                    ></Claculate>
                }    
            </div>
        </div>
    );
};

export default Order;