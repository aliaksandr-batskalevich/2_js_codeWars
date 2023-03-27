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


// must be fix
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

function isSolved(board) {
    let isNotEnd = board.some(arr => arr.includes(0));
    const isWinner = (user) => {
        let firstRule = board.some(arr => arr.every(num => num === user));
        let secondRule = [0, 1, 2].some(indexIn => [0, 1, 2].every(indexOut => user === board[indexOut][indexIn]));
        let thirdRule = [0, 1, 2].every(index => user === board[index][index]) || [2, 1, 0].every((first, second, array) => user === board[first][second]);
        return firstRule || secondRule || thirdRule;
    };
    return isWinner(1) ? 1 : isWinner(2) ? 2 : isNotEnd ? -1 : 0;
}

function rot13(str) {
    return str.replace(/[a-z]/ig, function (x) {
        return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13 : -13));
    });
}

// must be fix
// function parseMolecule(formula) {
//     let result = {};
//     let regEx1 = /[A-Z][a-z]?[0-9]?/g;
//     let elementsArr = formula.match(regEx1);
//     elementsArr.forEach(el => {
//         let element = el.replace(/[0-9]/g, '');
//         let numStr = el.replace(/[a-z]/gi, '');
//         let count = numStr ? +numStr : 1;
//         result[element] ? result[element] += count : result[element] = count;
//     });
//     let uniqElementsArr = Object.keys(result);
//
//     const multiply = (group) => {
//         if (firstBraces) {
//             for (const group of firstBraces) {
//                 let ind = group.match(/\d+$/g, '')[0];
//                 let elementsGroup = group.replace(/[0-9\)\(\[\]]/g, '');
//                 for (let element of uniqElementsArr) {
//                     let match = elementsGroup.match(new RegExp(element));
//                     if (match) {
//                         result[element] *= ind;
//                     }
//                 }
//             }
//         }
//     };
//     let regEx2 = /\(.+\)[0-9]+/g;
//     let regEx3 = /\[.+\][0-9]+/g;
//
//     let firstBraces = formula.match(regEx2);
//     let secondBraces = formula.match(regEx3);
//     multiply(firstBraces);
//     multiply(secondBraces);
//
//     return result;
// }

function hexStringToRGB(hexString) {
    let colorsArr16 = hexString.slice(1).match(/[a-z0-9]{2}/gi);
    let colorsArr10 = colorsArr16.map(el => parseInt(el, 16));
    console.log(colorsArr10);
    return {r: colorsArr10[0], g: colorsArr10[1], b: colorsArr10[2]};
}

// 02/04/2023

function toUnderscore(string) {
    if (typeof string !== 'string') string = String(string);
    let arr = string.match(/[A-Z][a-z0-9]*/g);
    if (!arr) return string;
    return arr.map(el => el.toLowerCase()).join('_');
}

const solution1 = function (firstArray, secondArray) {
    return firstArray.map((el, i) => (el - secondArray[i]) ** 2).reduce((acc, el) => acc + el) / firstArray.length;
}

// function isMerge(s, part1, part2) {
//     const worker = (str) => str.replace(/ /g, '');
//
//     s = worker(s);
//     part1 = worker(part1);
//     part2 = worker(part2);
//
//     if (part1 + part2 === s || part2 + part1 === s) return true;
//
//     let part1Arr = part1.split('');
//     let part2Arr = part2.split('');
//     let sArr = s.split('');
//
//     let tester = '';
//     // const maker = (partArr) => tester + partArr.shift();
//     for (let i = 0; i < s.length; i++) {
//         if (part1Arr[0] === s[i]) {
//             tester = tester + part1Arr.shift();
//         } else if (part2Arr[0] === s[i]) {
//             tester = tester + part2Arr.shift();
//         } else return false;
//     }
//     return true;
// }

Math.round = function (number) {
    let arr = String(number).split('.');
    if (arr.length === 1) return number;
    let isInc = +arr[1][0] > 4;
    return isInc ? Number(arr[0]) + 1 : Number(arr[0]);
};

Math.ceil = function (number) {
    let arr = String(number).split('.');
    return arr.length === 2 ? +arr[0] + 1 : +arr[0];
};

Math.floor = function (number) {
    return +String(number).split('.')[0];
};

function validISBN10(isbn) {
    if (!/^\d{9}[\dX]$/.test(isbn)) return false;
    return (isbn.split('').reduce((acc, el, index) => acc + (el === 'X' ? 10 : +el) * (index + 1), 0) % 11) === 0;
}

let snail = function (array) {
    const moveRight = (count, result = []) => {
        result = [...result, ...array.shift()];
        return --count
            ? moveDown(count, result)
            : result;
    };
    const moveDown = (count, result) => {
        for (const arrInn of array) {
            result.push(arrInn.pop());
        }
        return --count
            ? moveLeft(count, result)
            : result;
    };
    const moveLeft = (count, result) => {
        result = [...result, ...array.pop().reverse()];
        return --count
            ? moveUp(count, result)
            : result;
    };
    const moveUp = (count, result) => {
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i].shift());
        }
        return --count
            ? moveRight(count, result)
            : result;
    }
    return moveRight(array.length * 2 - 1);
}

// const solution1 = list => list
//     .map((el, index, array) => index === 0 || index === array.length - 1
//         ? el
//         : +array[index - 1] + 2 === array[index + 1]
//             ? `${el}`
//             : el
//     )
//     .map(el => typeof el === 'number' ? el : 'dash')
//     .join(',')
//     .replace(/(,dash)+/g, '-')
//     .replace(/-,/g, '-');


// function nextBigger(num){
//     let numArr =String(num).split('').map(el => +el);
//     for (let i = numArr.length - 1; i > 0 ; i--) {
//         if (numArr[i] > numArr[i - 1]) {
//             numArr[i] += numArr[i - 1];
//             numArr[i - 1] = numArr[i] - numArr[i - 1];
//             numArr[i] -= numArr[i - 1];
//             if (i < numArr.length - 1) {
//                 let endArr = numArr.splice(i - 1).sort((a, b) => a - b);
//                 numArr = [...numArr, ...endArr];
//             }
//             return +numArr.join('');
//         }
//     }
//     return -1;
// }
function nextBigger(num) {
    let numArr = String(num).split('').map(el => +el);
    let endValues = [];
    const endValuesPushAndSort = (el) => {
        endValues.push(el);
        endValues.sort((a, b) => a - b);
    };

    for (let i = numArr.length - 1; i >= 0; i--) {
        endValuesPushAndSort(numArr.pop());
        if (endValues.some(el => el > numArr[numArr.length - 1])) {
            let endIndex = endValues.reduce((acc, endEl, index) => acc === undefined && endEl > numArr[numArr.length - 1] ? index : acc, undefined);
            let endValue = endValues.splice(endIndex, 1)[0];
            let buf = numArr.pop();
            numArr.push(endValue);
            endValuesPushAndSort(buf);
            return +[...numArr, ...endValues].join('');
        }
    }
    return -1;
}

// class Ship {
//     constructor(draft,crew) {
//         this.draft = draft;
//         this.crew = crew;
//     }
//
//     isWorthIt() {
//         return (this.draft - this.crew * 1.5) > 20
//     }
// }

// function Ship(draft,crew) {
//     this.draft = draft;
//     this.crew = crew;
// }
//
// Ship.prototype.isWorthIt = function () {
//     return (this.draft - this.crew * 1.5) > 20
// }
// let titanic = new Ship(35, 20);


// Array.prototype.reverse = function () {
//     let temp = this.splice(0);
//     while (temp.length) {
//         this.push(temp.pop());
//     }
//     return this;
// };

// Array.prototype.size = function () {
//     let count = 0;
//     for (const el of this) count++;
//     return count;
// };

// Array.prototype.filter = function (func) {
//     let resultArr = [];
//     for (let i = 0; i < this.length; i++) func(this[i], i, this) && resultArr.push(this[i]);
//     return resultArr;
// }

// Object.prototype.description =  "TODO: GIVE ME A DESCRIPTION";

// Array.prototype.groupBy = function(fn) {
//     let result = {};
//     if (fn === undefined) {
//         let uniqArr = [...new Set(this)];
//         uniqArr.forEach((el) => {
//             result[el] = [];
//         })
//         this.forEach(el => {
//             result[el].push(el);
//         })
//     } else {
//         this.forEach((el) => {
//             let key = fn(el);
//             result[key]
//                 ? result[key].push(el)
//                 : result[key] = [el];
//         })
//     }
//     return result;
// }

// Array.prototype.splice = function (from, count, ...insertItems) {
//     let left = [];
//     let cut = [];
//     let right = [];
//     for (let i = 0; i < this.length; i++) {
//         if (i < from) {
//             left[left.length] = this[i];
//         } else if (i >= from && i < (count !== undefined ? from + count : this.length)) {
//             cut[cut.length] = this[i];
//         } else {
//             right[right.length] = this[i];
//         }
//     }
//
//     this.length = 0;
//     let temp = [...left, ...insertItems, ...right];
//     for (let i = 0; i < temp.length; i++) {
//         this[i] = temp[i];
//     }
//     return cut;
// };

function solution(input, markers) {
    let strArr = input.split('\n');
    let resultArr = strArr.map(str => {
        let firstMarker;
        for (let i = 0; i < str.length; i++) {
            if (markers.some(marker => marker === str[i])) {
                firstMarker = str[i];
                markerIndex = i;
                break;
            }
        }
        return markerIndex
            ? str.split(firstMarker)[0].trim()
            : str.trim();
    });
    return resultArr.join('\n');
}

function getPINs(observed) {
    let rules = {
        '1': [1, 2, 4],
        '2': [1, 2, 3, 5],
        '3': [2, 3, 6],
        '4': [1, 4, 5, 7],
        '5': [2, 4, 5, 6, 8],
        '6': [3, 5, 6, 9],
        '7': [4, 7, 8],
        '8': [5, 7, 8, 9, 0],
        '9': [6, 8, 9],
        '0': [8, 0],
    }
    let variable = observed.split('').map(num => rules[num]);
    let result = [];
    const worker = (arr, index, pin) => {
        for (let i = 0; i < arr.length; i++) {
            if (index === variable.length - 1) {
                result.push(pin + arr[i]);
            } else {
                worker(variable[index + 1], index + 1, pin + arr[i]);
            }
        }
    }
    worker(variable[0], 0, '')
    return result;
}

function permutations(string) {

    function worker(arr, prepend) {
        let i, version, el, result = [];
        prepend = prepend || [];
        if (arr.length === 1) return [arr];
        for (i = 0; i < arr.length; i++) {
            if (arr.length === 2) {
                result.push(prepend.concat([arr[i], arr[(i + 1) % 2]]));
            } else {
                version = arr.slice();
                el = version.splice(i, 1);
                result = result.concat(worker(version, prepend.concat(el)));
            }
        }
        return result;
    }
   return [...new Set(worker(string.split('')).map(el => el.join('')))];
}

// function sumIntervals(intervals) {
//     let intervalsSort = intervals
//         .sort((a, b) => a[0] - b[0]);
//     label:
//     for (let i = 0; i < intervalsSort.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (intervalsSort[j][1] > intervalsSort[i][0]) {
//                 if (intervalsSort[j][1] < intervalsSort[i][1]) {
//                     intervalsSort[j][1] = intervalsSort[i][1];
//                 }
//                 intervalsSort[i].length = 0;
//                 continue label;
//             }
//         }
//     }
//     let result = intervalsSort.filter(el => el.length).map(int => int[1] - int[0]).reduce((acc, el) => acc + el);
//     return result;
// }
function sumIntervals(intervals) {
    let resIntervals = [];
    const ruleMaker = (item, interval) => {
        let first = interval[0] <= item[1] && interval[0] >= item[0];
        let second = interval[1] <= item[1] && interval[1] >= item[0];
        let third = interval[0] <= item[0] && interval[1] >= item[1];
        return first || second || third;
    }
    for (let i = 0; i < intervals.length; i++) {
        let index = resIntervals.findIndex(item => ruleMaker(item, intervals[i]));
        if (index !== -1) {
            resIntervals[index][0] = resIntervals[index][0] > intervals[i][0] ? intervals[i][0] : resIntervals[index][0];
            resIntervals[index][1] = resIntervals[index][1] < intervals[i][1] ? intervals[i][1] : resIntervals[index][1];
        } else {
            resIntervals.push(intervals[i]);
        }
    }
    if (intervals.length === resIntervals.length) {
        let result = resIntervals.map(int => int[1] - int[0])
            .reduce((acc, el) => acc + el);
        return (result);
    }
    return sumIntervals(resIntervals);
}

// console.log(sumIntervals([ [ 1, 5 ], [ 10, 20 ], [ 1, 6 ], [ 16, 19 ], [ 5, 11 ] ]));


const reverse = str => str.trim().split(' ').map((el, index) => index % 2 ? el.trim().split('').reverse().join('') : el.trim()).join(' ');

// Array.prototype.square = function() {
//     return this.map(el => Math.sqrt(el));
// }
//
// Array.prototype.cube = function() {
//     return this.map(el => el ** 3);
// }
//
// Array.prototype.average = function() {
//     if (!this.length) return NaN;
//     return this.reduce((acc, el) => acc + el) / this.length;
// }
//
// Array.prototype.sum = function() {
//     return this.reduce((acc, el) => acc + el);
// }
//
// Array.prototype.even = function() {
//     return this.filter(el => !(el % 2));
// }
//
// Array.prototype.odd = function() {
//     return this.filter(el => el % 2)
// }

function abbreviate(string) {
    let pattern = string.replace(/[a-z]{4,}/gi, '+');
    if (pattern === string) return string;
    let words = string.match(/[a-z]{4,}/gi);
    let newWords = words.map(word => `${word[0]}${word.length - 2}${word[word.length - 1]}`);
    return pattern.split('').map(el => el === '+' ? newWords.shift() : el).join('');
}


let transitCells = [
    {figure: {}},
    {figure: {}},
    {figure: null},
    {figure: null},
];

const transitCondition = transitCells.reduce((acc, cell, i, arr) => acc && !(arr[i + 1] && cell.figure && arr[i + 1].figure), true);




const uniqWords = (str1, str2) => {
    const strArrMaker = (str) => str.toLowerCase().split(/[ ,.()0-9]/).filter(word => word);
    const rootArr = [...strArrMaker(str1), ...strArrMaker(str2)];
    const uniqStrArr = rootArr.filter((word, index, array) => array.indexOf(word) === array.lastIndexOf(word)).sort();
    return uniqStrArr;
};

const str1 = 'Ячмень, Глиадин (глютен), Овес, Рожь, Спельт, Пшеница, Гречиха, Семя льна, Кукуруза, Просо, Рис, Говядина, Курица, Ягненок, Свинина, Индейка, Коровье молоко, Желток яйца, Белок яйца, Козий сыр, Козье молоко, Овечье молоко, Овечий сыр, Йогурт, Баклажан, Свекла, Болгарский перец, Брокколи, Морковь, Сельдерей, Чили, Огурец, Хрен, Лук-порей, Олива, Лук, Картофель, Краснокачаная капуста, Помидор, Репа, Кабачок, Артишок, Спаржа, Шпинат, Фасоль стручковая, Горох, Соевые бобы, Чечевица, Фасоль белая, Салат-латук, Полевой салат, Яблоко, Абрикос, Банан, Вишня, Виноград (белый/синий), Киви, Лимон, Нектарин, Апельсин, Ананас, Клубника, Арбуз, Груша, Слива, Грейпфрут, Персик, Финик, Базилик, Перец (черный/белый), Корица, Чеснок, Семена горчицы, Мускатный орех, Орегано, Петрушка, Мята, Маковое семя, Розмарин, Тимьян, Ваниль, Миндаль, Кешью, Какао бобы, Лесной орех, Арахис, Фисташка, Кунжут, Семена подсолнечника, Грецкий орех, Кокос, Рак, Лосось, Тунец, Моллюск, Креветка, Анчоус, Рыба-меч, Форель, Камбала, Треска, Пивные дрожжи, Пекарские дрожжи, Мед, Кофе, Черный чай, Грибная смесь 1 (Вешенка обыкн., Белый гриб, Шиитаке, Лисичка обыкн.), Грибная смесь 2 (Польский гриб, Боровик).';

const str2 = 'Ячмень, Глиадин (глютен), Овес, Рожь, Спельт, Пшеница, Гречиха, Семя льна, Кукуруза, Просо, Рис, Говядина, Курица, Ягненок, Свинина, Индейка, Коровье молоко, Желток яйца, Белок яйца, Козий сыр, Козье молоко, Овечье молоко, Овечий сыр, Йогурт, Баклажан, Свекла, Болгарский перец, Брокколи, Морковь, Сельдерей, Чили, Огурец, Хрен, Лук-порей, Олива, Лук, Картофель, Краснокачаная капуста, Помидор, Репа, Кабачок, Артишок, Спаржа, Шпинат, Фасоль стручковая, Горох, Соевые бобы, Чечевица, Фасоль белая, Салат-латук, Полевой салат, Яблоко, Абрикос, Банан, Вишня, Виноград (белый/синий), Киви, Лимон, Нектарин, Апельсин, Ананас, Клубника, Арбуз, Груша, Слива, Грейпфрут, Персик, Финик, Базилик, Перец (черный/белый), Корица, Чеснок, Семена горчицы, Мускатный орех, Орегано, Петрушка, Мята, Маковое семя, Розмарин, Тимьян, Ваниль, Миндаль, Кешью, Какао бобы, Лесной орех, Арахис, Фисташка, Кунжут, Семена подсолнечника, Грецкий орех, Кокос, Рак, Лосось, Тунец, Моллюск, Креветка, Анчоус, Рыба-меч, Форель, Камбала, Треска, Пивные дрожжи, Пекарские дрожжи, Мед, Кофе, Черный чай, Грибная смесь 1 (Вешенка обыкн., Белый гриб, Шиитаке, Лисичка обыкн.), Грибная смесь 2 (Польский гриб, Боровик), Рожковое дерево, Рапс, Утка, Коза, Гусь, Страус, Перепелка, Кролик, Косуля, Цесарка, Лошадь, Кефир, Масло, Камамбер, Казеин, Эменталь сыр, Творог, Моцарелла, Плавленый сыр, Творожный сыр,  Побеги бамбука, Брюссельская капуста, Цветная капуста, Мангольд, Китайская капуста, Укроп, Тыква, Иерусалимский артишок, Листовая капуста, Редис, Савойская капуста, Сладкий картофель, Виноградный лист, Белокочанная капуста, Лук-шалот, Лакричный корень, Стручковый корень, Бобы, Нут, Бобы мунг, Фасоль, Цикорий, Салат айсберг, Руккола, Авокадо, Ежевика, Черника, Клюква, Красная и черная смородина, Инжир, Крыжовник, Медовая дыня, Лайм, Личи, Манго, Папайя, Гранат, Малина, Шиповник, Мускусная дыня, Изюм, Анис, Лавровый лист, Ромашка, Каперсы, Зеленый лук, Гвоздика, Кориандр, Тмин, Фенхель, Имбирь, Майоран, Шафран, Шалфей, Кайенский перец, Карри, Эстрагон, Хмель, Мята, Бразильский орех, Макадамия, Кедровые орехи, Каштан, Орех колы, Карп, Кальмар, Угорь, Дорада, Пикша, Щука, Палтус, Сельдь, Лобстер, Скумбрия, Осьминог, Устрицы, Сардины, Морской окунь, Сибас, Икра, Краб, Агар-агар, Алоэ, Зеленый чай, Разрыхлитель, Сафлоровое масло';

console.log(uniqWords(str1, str2));

