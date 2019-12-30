function pipe(x) {
    for (let i = 1; i < arguments.length; i++) {
        x = arguments[i](x);
    }
    return x;
}

function addOne(x) {
    return x + 1;
}
  
pipe(1, addOne, addOne);