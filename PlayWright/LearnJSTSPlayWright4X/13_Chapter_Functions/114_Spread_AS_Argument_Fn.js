// function add (a,b,c) {
//     return a+b+c ;
// }

// let num= [1,2,3,4,5] ;
// console.log(add(...num)) ;

function hasError(...codes) {
    return codes.some(c => c>= 400);
}

let responses1 = [201,300,400] ;
let responses2 = [201,300,400,408,500 ] ;
hasError(...responses1) ;
console.log(hasError(...responses1));
console.log(hasError(...responses2));
