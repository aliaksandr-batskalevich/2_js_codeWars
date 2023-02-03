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

function pickPeaks(arr) {
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

const REGEXP = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;

        this._maxFullPageIndex = Math.floor(collection.length / itemsPerPage) - 1;
        this._itemsLastPage = collection.length % itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        return pageIndex <= this._maxFullPageIndex && pageIndex >= 0
            ? this.itemsPerPage
            : pageIndex === this.pageCount() - 1
                ? this._itemsLastPage
                : -1;
    }

    pageIndex(itemIndex) {
        if (itemIndex >= 0 && itemIndex <= this.collection.length - 1) {
            return Math.ceil(itemIndex / this.itemsPerPage) === this.pageCount()
                ? this.pageCount() - 1
                : Math.floor(itemIndex / this.itemsPerPage);
        }
        return -1;
    }
}

// let inst = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10);
// console.log(inst.pageCount());
// console.log(inst.itemCount());
// console.log(inst.pageItemCount(1));
// console.log(inst.pageItemCount(2));
// console.log(inst.pageItemCount(3));
// console.log(inst.pageIndex(40));
// console.log(inst.pageIndex(22));
// console.log(inst.pageIndex(3));
// console.log(inst.pageIndex(0));
// console.log(inst.pageIndex(-1));
// console.log(inst.pageIndex(-23));
// console.log(inst.pageIndex(-15));


function gap(g, m, n) {
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    let first;
    let second;
    const maker = (firstIn) => {
        for (let i = firstIn + 1; i <= n; i++) {
            if (isPrime(i)) {
                if (i - firstIn === g) {
                    second = i;
                    return;
                } else {
                    first = i;
                    return maker(first);
                }
            }
        }
    };
    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            first = i;
            break;
        }
    }
    console.log(first);
    maker(first);

    return second ? [first, second] : null;
}

let lastDigit = function (str1, str2) {
    let rules = {
        '1': [1, 1, 1, 1],
        '2': [2, 4, 8, 6],
        '3': [3, 9, 7, 4],
        '4': [4, 6, 4, 6],
        '5': [5, 5, 5, 5],
        '6': [6, 6, 6, 6],
        '7': [7, 9, 3, 1],
        '8': [8, 4, 2, 6],
        '9': [9, 1, 9, 1],
    }
    // if (str2.length > 90) return 6;
    if (+str2 === 0) return 1;
    let lastNumStr = str1.match(/\d$/)[0];
    if (lastNumStr === '0') return 0;
    let lastNumInDeg = str2.length === 1 ? +(str2.match(/\d$/)[0]) : +(str2.match(/\d{2}$/)[0]);
    let position = lastNumInDeg % 4 ? lastNumInDeg % 4 - 1 : 3;

    let result = rules[lastNumStr][position];
    return result;
}

function numberToIp(int32) {
    return int32
        .toString(2).padStart(32, '0')
        .match(/\d{8}/g)
        .map(el => parseInt(el, 2))
        .join('.');
}

function fibonacciBeta(n) {
    let cache = {
        '0': 0,
        '1': 1,
    };
    const worker = (n) => {
        if (cache[String(n)] !== undefined) {
            return cache[String(n)];
        }

        let firstNum;
        if (cache[String(n - 2)] !== undefined) {
            firstNum = cache[String(n - 2)];
        } else {
            firstNum = worker(n - 2);
            cache[String(n - 2)] = firstNum;
        }

        let secondNum;
        if (cache[String(n - 1)] !== undefined) {
            secondNum = cache[String(n - 1)];
        } else {
            secondNum = worker(n - 1);
            cache[String(n - 1)] = secondNum;
        }

        let result = firstNum + secondNum;
        cache[String(n)] = result;
        return result;
    }
    return worker(n);
}

const fibonacci = (function () {
    let mem = [0, 1];
    return function (n) {
        if (mem[n] === undefined)
            mem[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return mem[n];
    };
})();

function ipsBetween(start, end) {
    const ipToNumber = (ip) => parseInt(ip.split('.').map(el => (+el).toString(2).padStart(8, '0')).join(''), 2);
    let first = ipToNumber(start);
    let second = ipToNumber(end);
    return second - first;
}


function add(n) {
    let num = m => add(n + m);
    num.toString = () => n;
    return num;
}

function alphanumeric(string) {
    return /^[a-z0-9]+$/i.test(string);
}


// must be six
function josephus(items, k) {
    let result = [];
    const nextIndexMaker = (startIndex) => {
        if (startIndex >= items.length) startIndex = 0;
        let nextIndex = startIndex + k - 1 < items.length ? startIndex + k - 1 : startIndex + k - 1 - items.length;
        return nextIndex;
    }

    let startIndex = 0;
    while (items.length) {
        if (items.length === 1) {
            result.push(items[0]);
            break;
        } else {
            let nextIndex = nextIndexMaker(startIndex);
            result.push(items.splice(nextIndex, 1)[0]);
            startIndex = nextIndex;
        }
    }
    return result;
}

const isPP = function (n) {
    for (let i = 2; i <= n / 2; i++) {
        let pow = 2;
        while (Math.pow(i, pow) <= n) {
            if (Math.pow(i, pow) === n) return [i, pow];
            pow++;
        }
    }
    return null;
};

function convertFrac(lst) {
    if (!lst.length) return '';
    let denominators = lst.map(el => el[1]);
    let common = 1;
    denominators.forEach(d => {
        for (let i = 1; i <= d; i++) {
            if (!(common * i % d)) {
                common = common * i;
                break;
            }
        }
    })
    let result = lst.map(el => [el[0] * common / el[1], common]);
    return `(${result.join(')(')})`;
}


console.log(convertFrac([[1, 2], [1, 3], [1, 4]]));