const addToLC =id =>{
    let shopingCart = {};

    const storedCart = localStorage.getItem('shoping-cart')
    if (storedCart){
        shopingCart = JSON.parse(storedCart)
    }

    const value = shopingCart[id]
    if(value){
        const newValue = value +1;
        shopingCart[id] =newValue;
    }
    else{
        shopingCart[id] = 1;
    }
    localStorage.setItem('shoping-cart' , JSON.stringify(shopingCart))
}
const getStoredCart = () =>{
    let shopingCart = {};

    const storedCart = localStorage.getItem('shoping-cart')
    if (storedCart){
        shopingCart = JSON.parse(storedCart)
    }
    return shopingCart;
}

const removeFromDB = id =>{
    console.log(id)
    const storedCart = localStorage.getItem('shoping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shoping-cart', JSON.stringify(shoppingCart));
            console.log(1)
        }
    }
}
export {
    getStoredCart,
    addToLC ,
    removeFromDB
}