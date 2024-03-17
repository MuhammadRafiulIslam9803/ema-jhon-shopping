import React from 'react';
import './OrderProducts.css'

const OrderProducts = ({product ,removeOrder}) => {
    // console.log(product)
    const {id ,img , name ,price ,quantity} = product
    return (
        <div className='products-conteiner'>
            <div className='image'>
                <img  src={img} alt="" />
            </div>
            <div className='product-details'>
                <div>
                    <h5>{name}</h5>
                    <p>Quantity : {quantity} </p>
                    <p>Price : {price} </p>
                </div>
                <button className='btn-stayle' onClick={()=>removeOrder(id)}>Delate</button>
            </div>

        </div>
    );
};

export default OrderProducts;