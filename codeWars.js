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
