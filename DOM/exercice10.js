import { addBasket, updateBasket, removeBasket, getBasket, getTotalBasket, getProductById } from "./basket.js";

document.querySelector("#create").addEventListener("click",function(){
    document.querySelector("#type").value = "create";
    document.querySelector("#id").removeAttribute("disabled");
    document.querySelector("#name").removeAttribute("disabled");
    document.querySelector("#price").removeAttribute("disabled");
    document.querySelector("#id").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#quantity").value = "";
    document.querySelector("#add").innerHTML = "Ajouter un produit";
    document.querySelector("#create").disabled = "disabled";
});

document.querySelector("#add").addEventListener("click", function () {
    if (document.querySelector("#type").value == "create") {
        addBasket({
            id: document.querySelector("#id").value,
            name: document.querySelector("#name").value,
            price: document.querySelector("#price").value,
            quantity: Number.parseInt(document.querySelector("#quantity").value)
        });
        
    }else if(document.querySelector("#type").value == "update"){
        updateBasket({
            id: document.querySelector("#id").value,
            quantity: Number.parseInt(document.querySelector("#quantity").value)
        });
    }
    showBasket();
});

function showBasket() {
    let productDOM = "";
    for (let product of getBasket()) {
        productDOM += `
        <div class="product" data-id="${product.id}">
            <div class="name">${product.name}</div>
            <div class="price">${product.price} €</div>
            <div class="quantity">quantité : ${product.quantity}</div>
            <div class="action">
                <button class="remove">Supprimer</button>
                <button class="update">Modifier</button>
            </div>
        </div>`;
    }
    document.querySelector("#list").innerHTML = productDOM;
    document.querySelector("#total").innerHTML = "Total : " + getTotalBasket() + "€";

    manageAction();
}

function manageAction() {
    document.querySelectorAll(".product").forEach(product => {
        product.querySelector(".remove").addEventListener("click", function (e) {
            let target = e.target.closest(".product");
            removeBasket({ id: target.dataset.id });
            showBasket();
        });

        product.querySelector(".update").addEventListener("click", function (e) {
            let target = e.target.closest(".product");
            let product = getProductById(target.dataset.id);
            document.querySelector("#type").value = "update";
            document.querySelector("#id").value = target.dataset.id;
            document.querySelector("#id").disabled = "disabled";
            document.querySelector("#name").disabled = "disabled";
            document.querySelector("#price").disabled = "disabled";
            document.querySelector("#name").value = product.name;
            document.querySelector("#price").value = product.price;
            document.querySelector("#quantity").value = product.quantity;
            document.querySelector("#add").innerHTML = "Modifier un produit";
            document.querySelector("#create").removeAttribute("disabled");
        });

    });

}