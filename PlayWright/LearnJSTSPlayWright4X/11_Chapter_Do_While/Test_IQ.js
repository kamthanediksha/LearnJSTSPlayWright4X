let a = 10 ;
let b = 8 ;
let c = 5 ;
if (a==b && b==c && c==a) {
    console.log("Eqvilateral triangle") ;
} else if (a==b || b==c || c==a) {
    console.log("Isosceles triangle") ;
} else {
    console.log("Scalene triangle") ;
}