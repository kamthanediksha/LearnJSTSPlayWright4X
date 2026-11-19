function calculate (a, b, operation){
    return operation(a, b);
}

let sum = calculate(5, 3, function(x, y) {
    return x + y;
});

console.log("Sum:", sum); // Output: Sum: 8
