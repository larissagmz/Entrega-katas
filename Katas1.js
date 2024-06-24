function oneThroughTwenty(x) {
    let arr = [];
    for (let i = 1; i <= x; i++) {
        arr.push(i);
    }
    return arr;
}
let n = 20;

console.log(oneThroughTwenty(n));

function evensToTwenty(x) {
    let arr = [];
    for (let i = 1; i <= x; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(evensToTwenty(n));

function oddsToTwenty(x) {
    let arr = [];
    for (let i = 1; i <= x; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(oddsToTwenty(n));

function multiplesOfFive(x) {
    let arr = [];
    for (let i = 1; i <= x; i++) {
        if (i % 5 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(multiplesOfFive(n));

function squareNumbers(x) {
    let arr = [];
    for (let i = 1; i <= x; i++) {
        if (Math.sqrt(i) === Math.round(Math.sqrt(i))) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(squareNumbers(n));

function countingBackwards(x) {
    let arr = [];
    for (let i = x; i >= 1; i--) {
        arr.push(i);
    }
    return arr;
}
console.log(countingBackwards(n));

function evenNumbersBackwards(x) {
    let arr = [];
    for (let i = x; i >= 1; i--) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(evenNumbersBackwards(n));

function oddNumbersBackwards(x) {
    let arr = [];
    for (let i = x; i >= 1; i--) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(oddNumbersBackwards(n));

function multiplesOfFiveBackwards(x) {
    let arr = [];
    for (let i = x; i >= 1; i--) {
        if (i % 5 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
n = 100;
console.log(multiplesOfFiveBackwards(n));

function squareNumbersBackwards(x) {
    let arr = [];
    for (let i = x; i >= 1; i--) {
        if (Math.sqrt(i) === Math.round(Math.sqrt(i))) {
            arr.push(i);
        }
    }
    return arr;
}
let x = 100;
console.log(squareNumbersBackwards(x));
