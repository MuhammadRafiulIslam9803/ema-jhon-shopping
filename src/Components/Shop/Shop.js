import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from '../Product/Product';
import Claculate from '../Calculation/Claculate';
import { addToLC, getStoredCart } from '../../Utilities/fakedb';

const Shop = () => {
    const [products ,setProducts] = useState([])
    const [cart ,setCart] = useState([])
    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    useEffect( () => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    } , [products])

    const updateCalculatorBtn = product =>{
        let newCart = [];
        const exists = cart.find(product => product.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            const rest = cart.filter(product => product.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
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