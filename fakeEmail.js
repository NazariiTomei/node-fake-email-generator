function fakeEmail(str) {
    // split mail addr
    let idx = str.indexOf('@');
    let strArr = str.slice(0, idx).split('');
    let suffix = str.slice(idx);
    
    // start faking
    let length = strArr.length, result = [];
    for (let i = 0; i < length - 1; i++) { // filled count
        for (let j = i; j < length - 1; j++) {
            let pointsArr = getPointsArr(i, j, length);
            result.push(mergeArr(strArr, pointsArr).join('') + suffix);
        }
    }
    
    return result;
}

function getPointsArr(filled, pos, length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        if ((i < filled) || (i === pos)) {
            arr[i] = '.';
        } else {
            arr[i] = '';
        }
    }
    return arr;
}

function mergeArr(a, b) {
    console.assert(a.length === b.length);
    let res = [];
    for (let i = 0, length = a.length; i < length; i++) {
        res.push(a[i]);
        res.push(b[i]);
    }
    return res;
}

module.exports = fakeEmail;