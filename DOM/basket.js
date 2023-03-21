let basket = [];

export function addBasket(product){
    let productFound = basket.find(p => p.id == product.id);
    if(productFound){
        productFound.quantity += product.quantity;
    }else{
        basket.push(product);
    }
}

export function updateBasket(product){
    let productFound = basket.find(p => p.id == product.id);
    if(productFound){
        productFound.quantity = product.quantity;
    }
    if(productFound.quantity <=0){
        removeBasket(product);
    }
}

export function removeBasket(product){
    basket = basket.filter(p => p.id != product.id);
}

export function getBasket(){
    return basket.sort((a,b)=>{
        return b.quantity - a.quantity;
    })
}

export function getProductById(id){
    return basket.find(product => product.id == id);
}

export function getTotalBasket(){
    let cumul = basket.map(product => product.quantity * product.price);
    return cumul.reduce((total,price) => total + price);
}