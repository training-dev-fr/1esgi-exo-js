function showObject(array) {
    for (let object of array) {
        let div = document.createElement("div");
        div.classList.add("object");
        for (let [key, value] of Object.entries(object)) {
            let line = document.createElement("div");
            line.innerHTML = key + " : " + value;
            div.appendChild(line);
        }
        document.querySelector("#content").appendChild(div);
    }
}

showObject([{ firstname: "Aurélien", lastname: "Vaast" },{
    id: 2,
    name: "Télévision",
    price: 225.90,
    quantity: 10
}]);