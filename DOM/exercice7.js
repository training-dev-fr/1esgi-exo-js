document.querySelector("#send").addEventListener("click",function(){
    let date = Date.parse(document.querySelector("#test").value);
    if(date <new Date()){
        console.log("La date est dans le passé");
    }else{
        console.log("La date est dans le futur");
    }
});