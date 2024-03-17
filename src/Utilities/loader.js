import { getStoredCart } from "./fakedb"

const loaderAndProduct = async () =>{
     
    const products = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    const product = await products.json()

    const storedCart = getStoredCart()
    const initialCart = []
    for(const id in storedCart){
        const existsCart = product.find(pro => pro.id === id)
        if(existsCart){
            const quantity = storedCart[id]
            existsCart.quantity = quantity
            initialCart.push(existsCart)
        }
    }
    return {product, initialCart}
}
export {
    loaderAndProduct
}