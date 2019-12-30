function getMin() {
    let arr = [],
        min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
        if (min > arguments[i]) {
            min = arguments[i];
        }
    }
    return min;
}

getMin(3, 0, -3);