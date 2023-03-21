function destruct(object){
    for(let [key,value] of Object.entries(object)){
        console.log(key + " : " + value);
    }
}

destruct({firstname:"Aurélien",lastname:"Vaast"});