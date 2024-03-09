import React from 'react';
import './Product.css'

const Product = ({product,calculateBtn}) => {
    const{name ,seller,price,ratings,img} = product
    return (
        <div className='product-style'>
            <img className='imges' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price : ${price} </p>
            <p>Menufecturer :{seller}</p>
            <p>Rating : {ratings} starts</p>
            <button onClick={()=>calculateBtn(product)} className='btn-style'>
                <h1>Add to cart</h1>
            </button>
        </div>
    );
};

export default Product;