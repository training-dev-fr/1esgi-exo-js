function Upper(array){
    return array.map(element => element[0].toUpperCase() + element.slice(1))
}

console.log(Upper(["aurelien","jean","nina"]));