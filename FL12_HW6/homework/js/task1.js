let a = prompt('Quadratic equation (ax2 + bx + c = 0). Input A value:');
let b = prompt('Quadratic equation (ax2 + bx + c = 0). Input B value:');
let c = prompt('Quadratic equation (ax2 + bx + c = 0). Input C value:');
let d, x, x1, x2;
let two = 2;
let four = 4;

if (isNaN(a) || isNaN(b) || isNaN(c) || +a === 0) {
    alert('Invalid input data');
} else {
    d = b*b - four*a*c;
    if (d === 0) {
        x = -b / (two*a);
        console.log('x = ', Math.round(x));
    } else if (d > 0) {
        x1 = (-b+Math.sqrt(d)) / (two*a);
        x2 = (-b-Math.sqrt(d)) / (two*a);
        console.log('x1 = ' + Math.round(x1) + ' and x2 = ' + Math.round(x2));
    } else {
        console.log('No solution');
    }
}