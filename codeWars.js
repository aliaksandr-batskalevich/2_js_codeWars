// 01/26/2023

function closestPairTonum(n) {
    let answerArr = [];
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (!(Math.sqrt(j + i) % 1) && !(Math.sqrt(j - i) % 1)) {
                answerArr.push([j, i]);
            }
        }
    }
    return answerArr.sort((a, b) => a[0] < b[0] ? 1 : a[0] === b[0] && a[1] < b[1] ? 1 : -1)[0];
}

function nClosestPairsTonum(num, k) {
    let answerArr = [];
    label:
        while (answerArr.length < k) {
            for (let i = num - 1; i > 0; i--) {
                for (let j = i - 1; j > 0; j--) {
                    if (!(Math.sqrt(i + j) % 1) && !(Math.sqrt(i - j) % 1)) {
                        answerArr.push([i, j]);
                    }
                    if (answerArr.length === k) continue label;
                }
            }
        }
    return answerArr;
}

function fibDigits(n) {
    let fib = [0n, 1n];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    let num = fib[n];
    let numArr = String(num).split('');
    let uniqNum = [...new Set(numArr)];
    let result = uniqNum.map(el => {
        let count = numArr.filter(f => f === el).length
        return [count, +el]
    })
    let resSortArr = result.sort((a, b) => a[0] < b[0] ? 1 : a[0] === b[0] && a[1] < b[1] ? 1 : -1);
    return resSortArr;
}

function listSquared(m, n) {
    let answer = [];
    const maker = (num) => {
        let resultArr = [];
        for (let i = 1; i <= num; i++) {
            if (!(num % i)) resultArr.push(i);
        }
        let pow = resultArr.reduce((acc, el) => acc + el ** 2, 0);
        let result = Math.sqrt(pow);
        return !(result % 1) ? [num, pow] : undefined;
    }
    for (let i = m; i <= n; i++) {
        answer.push(maker(i));
    }
    return answer.filter(el => el);
}

// to fixed, will be faster
function sumPairs(arr, s) {
    let firstIndexInit = 0;
    let lastIndexInit = arr.length;
    const maker = (firstIndex, lastIndex) => {
            for (let i = firstIndex; i < lastIndex; i++) {
                for (let j = i + 1; j < lastIndex; j++) {
                    if (arr[i] + arr[j] === s) {
                        firstIndexInit = i;
                        lastIndexInit = j;
                        return maker(i, j);
                    }
                }
            }
    }
   maker(firstIndexInit, lastIndexInit);
    if (lastIndexInit !== arr.length) {
        return [arr[firstIndexInit], arr[lastIndexInit]];
    }
}
function sumPairs1(arr, s) {
    let first;
    let last;
    const maker = () => {
        console.log('call', first, last);
        while (arr.length) {
            let element = arr.shift();
            let set = [...new Set(arr)];
            for (let j = 0; j < set.length; j++) {
                if (element + set[j] === s) {
                    first = element;
                    last = set[j];
                    arr.length = j + 1;
                    return maker();
                }
            }
        }
    }
    maker();
    if (first !== undefined) {
        return [first, last];
    }
}

function pickPeaks(arr){
    let pos = [];
    let peaks = [];
    let currentPeak = [];
    if (arr.length) {
        arr.reduce((acc, el, index, array) => {
            if (acc < el && index !== array.length - 1) {
                currentPeak = [index, el];
                return el;
            } else if (acc > el && currentPeak.length) {
                pos.push(currentPeak[0]);
                peaks.push(currentPeak[1]);
                currentPeak = [];
                return el;
            } else {
                if (el === acc) {
                }
                return el;
            }
        });
    }
    return {pos, peaks};
}

const REGEXP = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
