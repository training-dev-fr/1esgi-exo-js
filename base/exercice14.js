function sort(array){
    return array.sort((a,b) => {
        return Date.parse(a) -Date.parse(b)
    });
}

console.log(sort(["2020-08-12","1995-12-05","2005-04-23"]));