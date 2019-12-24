let a = prompt('Triangle type. Input the length of the first side:');
let b = prompt('Triangle type. Input the length of the second side:');
let c = prompt('Triangle type. Input the length of the third side:');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be ONLY numbers');
} else {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    if (a <= 0 || b <= 0 || c <= 0) {
        alert('A triangle must have 3 sides with a positive definite length');
    } else if (a + b <= c || b + c <= a || a + c <= b) {
        console.log('Triangle doesn’t exist');
    } else if (a === b && b === c && a === c) {
        console.log('Equilateral triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
}