let grid = [
    [10,20,30],
    [40,50,60],
    [70,80,90],
    [1,2,3] 
];
console.log(grid[0][0]);
console.log(grid[2][1]);

grid[0][0] = 100;
console.log(grid[0][0]);

console.log(grid.length); // 3
console.log(grid[0].length); // 3