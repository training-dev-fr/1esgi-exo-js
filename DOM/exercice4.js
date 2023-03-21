let div = document.querySelector("#test");
div.addEventListener("click", function () {
    if (div.classList.contains("active")) {
        document.querySelector("#test").classList.remove("active");
    } else {
        document.querySelector("#test").classList.add("active");
    }
})