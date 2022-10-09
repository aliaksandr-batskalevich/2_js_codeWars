// const replaceDots = (str) => str.split('').map(el => el === '.' ? '-' : el).join('');
const replaceDots = (str) => str.split('.').join('-');

const min = list => list.sort((a, b) => a - b)[0];
const max = list => list.sort((a, b) => b - a)[0];

const buildString = (...template) => `I like ${template.join(', ')}!`;

// const stairsIn20 = s => {
//     let sum = 0;
//     s.forEach(d => d.forEach(num => {
//         sum += num
//     }));
//     return sum * 20;
// }
const stairsIn20 = s => s.reduce((fullArr, arrItem) => fullArr.concat(arrItem)).reduce((sum, numItem) => sum + numItem) * 20;

String.prototype.isUpperCase = function () {
    return this.toUpperCase() == this;
}

const expressionMatter = (a, b, c) => {
    let combinationsArr = [a + b + c, a * b * c, a + b * c, a * b + c, (a + b) * c, a * (b + c)]
    return combinationsArr.sort((a, b) => b - a)[0];
}

// 06-30-2022

// const correct = string => {
//     const arrIn = string.split('');
//     const arrOut = [...arrIn];
//     for (let i = 0; i < arrIn.length; i++) {
//         if (arrIn[i] === '5') {
//             arrOut[i] = 'S';
//         } else if (arrIn[i] === '0') {
//             arrOut[i] = 'O';
//         } else if (arrIn[i] === '1') {
//             arrOut[i] = 'I'
//         }
//     }
//     return arrOut.join('');
// }
const correct = string => string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');

// const stringToNumber = string => +string;
const stringToNumber = string => Number(string);

// const rps = (p1, p2) => p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' ? 'Player 1 won!'
//     : p1 === 'rock' && p2 === 'paper' || p1 === 'scissors' && p2 === 'rock' || p1 === 'paper' && p2 === 'scissors' ? 'Player 2 won!'
//         : 'Draw!';
const rps = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!'
    } else {
        let rules = {rock: 'scissors', paper: 'rock', scissors: 'paper'}
        if (p2 === rules[p1]) {
            return 'Player 1 won!'
        } else {
            return 'Player 2 won!'
        }
    }
}

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => this.draft - this.crew * 1.5 >= 20
}

function repeatStr(n, s) {
    let answerArr = [];
    for (let i = 0; i < n; i++) {
        answerArr[i] = s;
    }
    return answerArr.join('');
}

const shark = (pD, sD, yS, sS, d) => (pD / yS <= sD / (d ? sS / 2 : sS)) ? 'Alive!' : 'Shark Bait!';

function opposite(number) {
    return -number;
}

// 07-01-2022

// const warnTheSheep = queue => {
//     const arrTest = queue.reverse();
//     const indexOfWolf = arrTest.indexOf('wolf');
//     if (indexOfWolf === 0) {
//         return 'Pls go away and stop eating my sheep';
//     } else {
//         return 'Oi! Sheep number ' + indexOfWolf + '! You are about to be eaten by a wolf!'
//     }
// }
const warnTheSheep = queue => queue.reverse().indexOf('wolf') === 0
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!`;

const xor = (a, b) => a !== b;

const validateUsr = username => {
    if (username.length < 4 || username.length > 16) {
        return false
    }
    const userNameArr = username.split('');
    console.log(userNameArr);
    const rulesStr = 'abcdefghijklmnopqrstyvwxyz0123456789_';
    const rulesArr = rulesStr.split("");
    console.log(rulesArr);
    for (let item of userNameArr) {
        if (rulesArr.indexOf(item) === -1) {
            return false;
        }
    }
    return true;
}

// 07-06-2022

function toCsvText(array) {
    return array.map(el => el.join()).join('\n');
}

// const correctTail = (bod, tail) => bod[bod.length - 1] === tail;
const correctTail = (bod, tail) => bod.substr(bod.length - 1) === tail;

// 07-07-2022

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

// function capitalizeWord(word) {
//     let wordArr = word.split('');
//     wordArr.splice(0, 1, word[0].toUpperCase());
//     return wordArr.join('')
// }
const capitalizeWord = w => `${w[0].toUpperCase()}${w.slice(1)}`;

const reverseList = l => l.reverse();

const setAlarm = (employed, vacation) => employed && !vacation;

String.prototype.digit = function () {
    return (this.length === 1) && (this[0] >= '0') && (this[0] <= '9');
};

// 07/22/2022

function playerRankUp(points) {

    let levelStart = 'E5';
    let levelEnd = levelStart;

    const rules = [
        {pointBot: 0, pointTop: 99, title: 'E5'},
        {pointBot: 100, pointTop: 199, title: 'E4'},
        {pointBot: 200, pointTop: 299, title: 'A1'}
    ];

    rules.forEach(el => {
        if (points >= el.pointBot && points <= el.pointTop) {
            levelEnd = el.title
        }
    })
    return levelStart !== levelEnd && 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'

}

const isReallyNaN = val => Number.isNaN(val);

const squareSum = numbers => numbers.reduce((acc, el) => acc + Math.pow(el, 2), 0);

const noSpace = x => x.split(' ').join('');

// const positiveSum = arr => arr.reduce((acc, el) => el > 0 ? acc + el : acc, 0);
const positiveSum = arr => arr.reduce((acc, el) => acc + (el > 0 ? el : 0), 0);

const betterThanAverage = (classPoints, yourPoints) => (classPoints.reduce((acc, el) => acc + el) + yourPoints) / (classPoints.length + 1) < yourPoints;

// const boolToWord = bool => ['No','Yes'][+bool];
function boolToWord(bool) {
    const rules = {
        true: 'Yes',
        false: 'No'
    }
    return rules[bool.toString()];
}

// const howMuchWater = (w, l, c) => c > 2 * l ? 'Too much clothes' : c < l ? 'Not enough clothes' : Math.round((w * Math.pow(1.1, c - l)) * 100) / 100;
const howMuchWater = (w, l, c) => c > 2 * l ? 'Too much clothes' : c < l ? 'Not enough clothes' : +(w * 1.1 ** (c - l)).toFixed(2);

// const numberToString = num => num.toString();
// const numberToString = num => num + '';
const numberToString = num => `${num}`;

const findMultiples = (integer, limit) => {
    let arr = [];
    for (let i = 1; integer * i <= limit; i++) {
        arr.push(integer * i)
    }
    return arr;
}

// const amIWilson = p =>  {
//     let factorialArr = [];
//     for (let i = 1; i <= p-1; i++) {
//         factorialArr.push(i);
//     }
//     let factorial = factorialArr.reduce((acc, el) => acc * el);
//     let integer = ((factorial + 1) / Math.pow(p, 2));
//     // return integer !== Infinity && integer.toString().split('.').length === 1;
// }
const amIWilson = p => p === 5 || p === 13 || p === 563

function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    }
    return "Hello, " + name + "!";
}

const even_or_odd = number => number % 2 === 0 ? 'Even' : "Odd";

const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0;

function distanceBetweenPoints(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function isOpposite(s1, s2) {
    if (s1.length !== s2.length || s1 === '') {
        return false
    }
    let answer;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) {
            return false;
        } else {
            answer = true;
        }
    }
    return answer;
}

// 07/28/2022

function arrowArea(a, b) {
    return a * b / 4
}

function reverseList1(arr) {
    arr.reverse();
    return arr;
}

// function divCon(arr){
//     let sumOfNum = 0;
//     let sumOfString = 0;
//
//     for (let el of arr) {
//         typeof el === "number" ? sumOfNum += el : sumOfString += +el;
//     }
//
//     return sumOfNum - sumOfString;
// };
const divCon = arr => arr.reduce((acc, el) => typeof el === 'number' ? acc += el : acc -= +el, 0);

const smallEnough = (a, limit) => {
    let answer = true
    for (let el of a) {
        if (el > limit) {
            answer = false;
            break;
        }
    }
    return answer;
};

const getMiddle = s => s.split('').splice(Math.trunc(s.length / 2) - (s.length % 2 ? 0 : 1), s.length % 2 ? 1 : 2).join('');

function removeRotten(bagOfFruits) {
    if (bagOfFruits && bagOfFruits.length) {
        return bagOfFruits.map(el => el.replace(/rotten/g, '').toLowerCase());
    }
    return [];
}

function fusc(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n % 2 === 0) return fusc(n / 2);
    if (n % 2 === 1) return (fusc(Math.trunc(n / 2)) + fusc(Math.trunc(n / 2) + 1));
}

// const orderedCount = (text) => {
//     let arr = text.split('');
//     let answer = [];
//     let arrOfLetters = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!arrOfLetters.includes(arr[i])) {
//             arrOfLetters.push(arr[i]);
//             answer.push([arr[i], 1]);
//         } else {
//             answer[arrOfLetters.indexOf(arr[i])][1]++;
//         }
//     }
//     return answer;
// }
const orderedCountBeta = (text) => {
    let arr = text.split('').sort();
    let answer = [[arr[0], 1]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            answer[answer.length - 1][1]++;
        } else {
            answer.push([arr[i], 1]);
        }
    }
    return arr;
}

const orderedCount = (text) => {
    let letters = text.split("")
    let result = letters.filter((letter, index) => letters.indexOf(letter) == index)
    return result.map((letter) => [letter, text.split(letter).length - 1])
}

// 08-01-2022

function printerError(s) {
    const errLetters = 'nopqrstuvwxyz'.split('');
    let errCounter = 0;
    for (let i = 0; i < s.length; i++) {
        errLetters.includes(s[i]) && errCounter++;
    }
    return `${errCounter}/${s.length}`;
}

const digits = n => n.toString().length;

// 08-09-2022

const last = xs => xs.length !== 0 ? xs.reverse()[0] : null;

const towerOfHanoi = rings => Math.pow(2, rings) - 1;

const fibsFizzBuzz = n => {
    let arr = [];
    for (let j = 0; j < n; j++) {
        if (j < 2) {
            arr[j] = 1;
        } else {
            arr[j] = arr[j - 2] + arr[j - 1];
        }
    }
    let answerArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            answerArr[i] = 'FizzBuzz';
        } else if (arr[i] % 3 === 0) {
            answerArr[i] = 'Fizz';
        } else if (arr[i] % 5 === 0) {
            answerArr[i] = 'Buzz';
        } else {
            answerArr[i] = arr[i];
        }
    }
    return answerArr
};

// 08-20-2022

const leastLarger = (arr, i) => {
    let arrForSearch = [...arr].sort((a, b) => a - b).filter((element, index, array) => array.indexOf(element) === index);
    let numIn = arr[i];
    let indexInArrForSearch = arrForSearch.indexOf(numIn);
    if (indexInArrForSearch < arrForSearch.length - 1) {
        let numOut = arrForSearch[indexInArrForSearch + 1];
        return arr.indexOf(numOut);
    } else {
        return -1;
    }
};

function Block(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];

    this.getWidth = function () {
        return this.width;
    }
    this.getLength = function () {
        return this.length;
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getVolume = function () {
        return this.width * this.length * this.height;
    }
    this.getSurfaceArea = function () {
        return 2 * (this.height + this.width) * this.length + 2 * this.height * this.width;
    }
}

// 09/25/2022

function alexMistakes(numberOfKata, timeLimit) {
    let timeForMistakes = timeLimit - (60 / 10 * numberOfKata);
    let timeForPushUps = 5;
    let numOfMistakes = 0;
    while (timeForMistakes - timeForPushUps >= 0) {
        numOfMistakes++;
        timeForMistakes -= timeForPushUps;
        timeForPushUps *= 2;
    }
    return numOfMistakes;
}

function rangeBitCount(a, b) {
    const trueA = Math.ceil(a);
    const trueB = Math.floor(b);
    let numArr = [];
    for (let i = trueA; i <= trueB; i++) {
        numArr.push(i.toString(2));
    }
    let fullString = numArr.join('');
    let answer = fullString.split('1').length - 1;
    return answer;
}

function SeriesSum(n){
    let divider = 1;
    let answer = 0;
    if (n === 0) {
        return '0.00';
    } else {
        for (let i = 1; i <= n ; i++) {
            answer += 1 / divider;
            divider += 3;
        }
    }
    return String(answer.toFixed(2));
}

function solution(start, finish){
    let position = start;
    let jumpNum = 0;
    const smallJump = 1;
    const longJump = 3;
    while (position !== finish) {
        if (position + longJump <= finish) {
            position += longJump
        } else {
            position += smallJump;
        }
        jumpNum++;
    }
    return jumpNum;
}

function nameThatNumber(num) {
    const rules = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '2x': 'twen',
        '3': 'three',
        '3x': 'thir',
        '4': 'four',
        '4x': 'for',
        '5': 'five',
        '5x': 'fif',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '8x': 'eigh',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '1x': 'teen',
        'tens': 'ty',
    }
    if (String(num).length === 1 || num === 10 || num === 11 || num === 12) {
        return rules[String(num)];
    } else if (Math.floor(num / 10) === 1 && (num % 10 === 3 || num % 10 === 5 || num % 10 === 8)) {
        return `${rules[`${num % 10}x`]}${rules['1x']}`;
    } else if (Math.floor(num / 10) === 1) {
        return `${rules[String(num % 10)]}${rules['1x']}`;
    } else if (num % 10 === 0 && (Math.floor(num / 10) === 2 || Math.floor(num / 10) === 3 || Math.floor(num / 10) === 4 || Math.floor(num / 10) === 5 || Math.floor(num / 10) === 8)) {
        return `${rules[`${String(Math.floor(num / 10))}x`]}${rules['tens']}`;
    } else if (num % 10 === 0) {
        return `${rules[String(Math.floor(num / 10))]}${rules['tens']}`
    } else if (Math.floor(num / 10) === 2 || Math.floor(num / 10) === 3 || Math.floor(num / 10) === 4 || Math.floor(num / 10) === 5 || Math.floor(num / 10) === 8) {
        return `${rules[`${String(Math.floor(num / 10))}x`]}${rules['tens']} ${rules[`${num % 10}`]}`;
    } else {
        return `${rules[`${String(Math.floor(num / 10))}`]}${rules['tens']} ${rules[`${num % 10}`]}`;
    }
}

function hammingDistance (a, b) {
    let first
    let second
    let answer = 0;
    if (a.length <= b.length) {
        first = a;
        second = b;
    } else {
        first = b;
        second = a;
    }
    answer += b.length - a.length;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            answer++;
        }
    }
    return answer;
}

function isTriangle(a,b,c) {
    return a * b * c !== 0 && a < b + c && b < a + c && c < a + b
}

// 10-09/2022

function range(...rest) {
    let start = 0;
    let stop = 0;
    let step = 1;

    let answer = [];

    if (rest.length === 1) {
        stop = rest[0];
    } else if (rest.length === 2) {
        [start, stop] = rest;
    } else {
        [start, stop, step] = rest;
    }

    if (stop < start) {
        return answer
    } else if (step === 0) {
        for (let i = start; i < stop; i++) {
            answer.push(start);
        }
    } else {
        for (let i = start; i < stop; i+= step) {
            answer.push(i);
        }
    }
    return answer
}

function isLeapYear(duration, year) {
    let period = 1 / (duration - Math.trunc(duration));
    return year % period === 0;
}

console.log(isLeapYear(365.25, 2018))