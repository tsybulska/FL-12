const TWO = 2, THREE = 3, TEN = 10, THIRTY = 30, YEAR = 2019;

function convert(...args) {
    let result = [];
    for (let i = 0; i < args.length; i++) {
        result.push(typeof args[i] === 'string' ? parseInt(args[i]) : args[i].toString());
    }
    return result;
}
convert('1', TWO, THREE, '4'); // [1, '2', '3', 4]

function executeforEach(arr, func) {
    for (let i = 0; i <= arguments.length; i++) {
        func(arr[i]);
    }
}
executeforEach([1, TWO, THREE], function(el) {
    console.log(el * TWO);
}); // logs 2 4 6

function mapArray(arr, func) {
    let result = [];
    executeforEach(arr, el => {
        result.push(func(parseInt(el)));
    });
    return result;
}
mapArray([TWO, '5', THREE], function(el) {
    return el + THREE;
}); // returns [5, 8, 6]

function filterArray (arr, func) {
    let result = [];
    executeforEach(arr, el => {
        if (func(el)) {
            result.push(el);
        }
    });
    return result;
}
filterArray([TWO, THREE, TEN], function(el) {
    return el % TWO === 0;
}); // returns [2, 10]

function flipOver (str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
flipOver('hey world'); // 'dlrow yeh'

function makeListFromRange(arr) {
    let result = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        result.push(i);
    }
    return result;
}
makeListFromRange([TWO, TEN]); // [2, 3, 4, 5, 6, 7, 8 , 9 , 10]

function getArrayOfKeys(arr, key) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][key]);
    }
    return result;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
getArrayOfKeys(actors, 'name'); // [‘tommy’, ‘lee’]

function substitute(arr) {
    let result = [];
    mapArray(arr, el => result.push(el <= THIRTY ? '*' : el));
    return result;
}
substitute([TEN, THIRTY, YEAR]); // ['*', '*', 2019]

function getPastDay(date, daysAgo) {
    let result = new Date(date);
    result.setDate(result.getDate() - daysAgo);
    return result.getDate();
}
const date = new Date(YEAR, 0, TWO);
getPastDay(date, 1); // 1, (1 Jan 2019)

function formatDate (date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < TEN) {
        hours = '0' + hours;
    }
    if (minutes < TEN) {
        minutes = '0' + minutes;
    }
    let result = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`;
    return result;
}
formatDate(new Date('6/15/2018 09:15:00')); // "2018/6/15 09:15"