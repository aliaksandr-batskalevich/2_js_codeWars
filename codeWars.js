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

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => this.draft - this.crew * 1.5 >= 20
}

function repeatStr (n, s) {
    let answerArr = [];
    for (let i = 0; i < n; i++) {
        answerArr[i] = s;
    }
    return answerArr.join('');
}

const shark = (pD, sD, yS, sS, d) => (pD / yS <= sD / (d ? sS / 2 : sS)) ? 'Alive!' : 'Shark Bait!';
console.log(shark(24, 0, 4, 8, true));