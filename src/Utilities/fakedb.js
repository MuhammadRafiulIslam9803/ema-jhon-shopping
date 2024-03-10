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
export {
    getStoredCart,
    addToLC 
}