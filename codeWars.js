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

function greet (name) {
    if(name === "Johnny") {
        return "Hello, my love!";
    }
    return "Hello, " + name + "!";
}

const even_or_odd = number => number % 2 === 0 ? 'Even' : "Odd";

const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0;

function distanceBetweenPoints (a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function isOpposite(s1,s2) {
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
