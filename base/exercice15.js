let basket = [];

function addBasket(product){
    let productFound = basket.find(p => p.id == product.id);
    if(productFound){
        productFound.quantity += product.quantity;
    }else{
        basket.push(product);
    }
}

function updateBasket(product){
    let productFound = basket.find(p => p.id == product.id);
    if(productFound){
        productFound.quantity = product.quantity;
    }
    if(productFound.quantity <=0){
        removeBasket(product);
    }
}

function removeBasket(product){
    basket = basket.filter(p => p.id != product.id);
}

function getBasket(){
    return basket.sort((a,b)=>{
        return a.quantity - b.quantity;
    })
}

function getTotalBasket(){
  let cumul = basket.map(product => product.quantity * product.price);
  return cumul.reduce((total,price) => price);
}

console.log(JSON.parse(JSON.stringify(basket)));
console.log("Ajout d'un produit au panier")
addBasket({
    id: 1,
    name : "Ordinateur",
    price: 559.90,
    quantity: 1
  });
console.log(JSON.parse(JSON.stringify(basket)));
console.log("Ajout d'un autre produit au panier (quantité 2)")
addBasket({
    id: 2,
    name : "Télévision",
    price: 225.90,
    quantity: 2
  });
console.log(JSON.parse(JSON.stringify(basket)));
console.log("Ajout du même produit au panier (quantité 3)")
addBasket({
    id: 2,
    name : "Télévision",
    price: 225.90,
    quantity: 3
  });
console.log(JSON.parse(JSON.stringify(basket)));
console.log("Modification du premier produit au panier (quantité 4)")
updateBasket({
    id: 1,
    name : "Ordinateur",
    price: 559.90,
    quantity: 4
  });
console.log(JSON.parse(JSON.stringify(basket)));
console.log("Modification du premier produit au panier (quantité 0)")
updateBasket({
    id: 1,
    name : "Ordinateur",
    price: 559.90,
    quantity: 0
  });
console.log(JSON.parse(JSON.stringify(basket)));
console.log("Suppression d'un produit du panier (quantité 10 pour test)")
removeBasket({
    id: 2,
    name : "Télévision",
    price: 225.90,
    quantity: 10
  });
console.log(JSON.parse(JSON.stringify(basket)));
console.log("Ajout de 3 produit au panier avec quantité différentes")
addBasket({
    id: 1,
    name : "Ordinateur",
    price: 559.90,
    quantity: 10
  });
  addBasket({
    id: 2,
    name : "Télévision",
    price: 225.90,
    quantity: 2
  });
  addBasket({
    id: 3,
    name : "Iphone",
    price: 999.99,
    quantity: 4
  });
console.log(JSON.parse(JSON.stringify(basket)));
console.log("récupération du panier trié")
console.log(getBasket());
console.log("prix total du panier")
console.log(getTotalBasket());


