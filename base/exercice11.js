function addParam(object,name,value){
    object[name] = value;
    return object;
}

console.log(addParam({firstname:"Aurélien",lastname:"Vaast"},"birthday","21/05/1987"));