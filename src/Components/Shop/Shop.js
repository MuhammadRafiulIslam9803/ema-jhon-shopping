import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from '../Product/Product';
import Claculate from '../Calculation/Claculate';
import { addToLC, getStoredCart } from '../../Utilities/fakedb';

const Shop = () => {
    const [products ,setProducts] = useState([])
    const [cart ,setCart] = useState([])
    useEffect( ()=>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    useEffect( () => {
        const storedCart = getStoredCart()
        const allAdeddedCart =[]
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){

                const storedCardQuantity = storedCart[id]
                addedProduct.quantity =storedCardQuantity;
                allAdeddedCart.push(addedProduct)
   
             }
            // console.log(allAdeddedCart)
        //     console.log(addedProduct)
        }
        setCart(allAdeddedCart)
    } , [products])

    const updateCalculatorBtn = product =>{
        const newCart = [...cart ,product]
        setCart(newCart)
        addToLC(product.id)
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
                {
                    <Claculate 
                    cart = {cart}
                    ></Claculate>
                }    
            </div>
        </div>
    );
};

export default Shop;