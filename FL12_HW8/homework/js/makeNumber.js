function makeNumber(userStr) {
    let str = '';
    for (let i = 0; i < userStr.length; i++) {
        if (!isNaN(userStr[i])) {
            str += userStr[i];
        }
    }
    return str;
}

makeNumber('123098h76gfdd');