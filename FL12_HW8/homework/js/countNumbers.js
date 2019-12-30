function makeNumber(userStr) {
    let str = '';
    for (let i = 0; i < userStr.length; i++) {
        if (!isNaN(userStr[i])) {
            str += userStr[i];
        }
    }
    return str;
}

function countNumbers(userStr) {
    let str = makeNumber(userStr),
        count = {};
    for (let j = 0; j < str.length; j++) {
        if (count[str[j]]) {
            count[str[j]]++;
        } else {
            count[str[j]] = 1;
        }
    }
    return count;
}

countNumbers('jdjjka000466588kkkfs662555');