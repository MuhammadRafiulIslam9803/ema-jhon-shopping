import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products ,setProducts] = useState([])
    const [cart ,setCart] = useState([])
    useEffect( ()=>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    const updateCalculatorBtn = product =>{
        const newCart = [...cart ,product]
        setCart(newCart)
        console.log(newCart.length)
    }
    return (
        <div className='Shop-conteiner'>
            <div className='product-conteiner'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        calculateBtn={updateCalculatorBtn}
                        product={product}
                        ></Product>)
                }
            </div>
            <div className='Calculate-part'>
                <h1>Selected Cart :{cart.length}</h1> 
                {
                    console.log(cart)
                }    
            </div>
        </div>
    );
};

export default Shop;