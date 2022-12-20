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

function SeriesSum(n) {
    let divider = 1;
    let answer = 0;
    if (n === 0) {
        return '0.00';
    } else {
        for (let i = 1; i <= n; i++) {
            answer += 1 / divider;
            divider += 3;
        }
    }
    return String(answer.toFixed(2));
}

function solution(start, finish) {
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

function hammingDistance(a, b) {
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

function isTriangle(a, b, c) {
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
        for (let i = start; i < stop; i += step) {
            answer.push(i);
        }
    }
    return answer
}

function isLeapYear(duration, year) {
    let period = 1 / (duration - Math.trunc(duration));
    return year % period === 0;
}

// fetch('https://api.github.com/users/aliaksandr-batskalevich')
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             alert('User not found')
//         }
//     })
//     .then(response => {
//         console.log(response.id)
//     })
//     .catch(error => {
//         console.log(error);
//     })


// 10/14/2022

const menStillStanding = (cards) => {

    // console.log(cards);

    let removePlayers = {A: [], B: []};

    // create teams
    let teams = {
        A: {},
        B: {}
    }
    let teamsArr = Object.keys(teams);
    for (let j of teamsArr) {
        for (let i = 1; i < 12; i++) {
            teams[j][String(i)] = {number: i, Y: 0, R: 0}
        }
    }

    // create answer
    const createAnswer = () => {
        return [11 - removePlayers.A.length, 11 - removePlayers.B.length]
    }

    // action
    if (cards.length) {
        for (let i = 0; i < cards.length; i++) {
            let card = {
                team: cards[i][0],
                player: cards[i].length === 3 ? cards[i][1] : cards[i].slice(1, 3),
                color: cards[i][cards[i].length - 1]
            }
            let player = teams[card.team][card.player];
            if (player.Y < 2 && player.R === 0) {
                player[card.color]++;
                if (player.Y === 2 || player.R === 1) {
                    removePlayers[card.team].push(card.player);
                    if (removePlayers.A.length === 5 || removePlayers.B.length === 5) {
                        break;
                    }
                }
            }
        }
    }
    return createAnswer();
}

const toFixed = (num, fix) => {
    if (!isFinite(num)) {
        console.error(`Error!!! ${num} - is not a number!!!`)
    } else {
        num = +num;
        return num.toFixed(fix);
    }
}

// async function userAbout(apiUrl, key) {
//     let userPr = fetch(apiUrl)
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error(`No user at url: ${apiUrl}`);
//             }
//         })
//         .catch(error => {
//             throw(error);
//         })
//     let user = await userPr;
//     let keys = Object.keys(user);
//     if (keys.includes(key)) {
//         return console.log(user[key]);
//     } else {
//         throw new Error(`No key in object! Select from: ${keys.join(', ')}`)
//     }
// }

// 11/03/2022

function comp(a, b) {
    return !!a && !!b && a.map(x => x * x).sort().join() == b.sort().join();
}

// function solution(number){
//     if (number < 0) {
//         return 0;
//     }
//     let arrOfNum = [];
//     for (let i = 0; i < number; i++) {
//         arrOfNum.push(i);
//     }
//     return arrOfNum.reduce((acc, el) => el % 3 === 0 || el % 5 === 0 ? acc + el : acc, 0)
// }
function solution(number) {
    return number < 0 ? 0 : [...Array(number)].map((el, i) => i).reduce((acc, el) => !(el % 3) || !(el % 5) ? acc + el : acc, 0);
}

const spinWords = s => s.split(' ').map(el => el.length > 4 ? el.split('').reverse().join('') : el).join(' ');

// 04/11/2022

const findOdd = (arr) => {
    const uniqueArrayElements = array => array.filter((el, index, array) => array.indexOf(el) === index);
    const uniqArr = uniqueArrayElements(arr);
    for (const i of uniqArr) {
        let count = 0;
        arr.forEach(el => {
            el === i && count++;
        })
        if (count % 2 !== 0) {
            return i;
        }
    }
};

const digitalRoot = n => String(n).length === 1 ? n : digitalRoot(String(n).split('').reduce((acc, el) => acc + +el, 0));


// 11/15/2022

// function likes(namesArr) {
//     let answerArr = ['no one', namesArr.length > 1 ? 'like this' : 'likes this'];
//     if (namesArr.length) {
//         answerArr[0] = [...namesArr];
//         if (answerArr[0].length < 3) {
//             answerArr[0] = answerArr[0].join(' and ');
//         } else {
//             let lastChild = answerArr[0].length === 3 ? answerArr[0][2] : `${namesArr.length - 2} others`;
//             answerArr[0] = answerArr[0].slice(0, 2);
//             answerArr[0] = `${answerArr[0].join(', ')} and ${lastChild}`;
//         }
//     }
//     return answerArr.join(' ');
// }
function likes(namesArr) {
    switch (namesArr.length) {
        case 0:
            return `no one likes this`;
        case 1:
            return `${namesArr.join()} likes this`;
        case 2:
            return `${namesArr.join(' and ')} like this`;
        case 3:
            return `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} like this`;
        default:
            return `${namesArr[0]}, ${namesArr[1]} and ${namesArr.length - 2} others like this`
    }
}

// function createPhoneNumber(numbers){
//     let code = `(${numbers.slice(0, 3).join('')})`;
//     let first = numbers.slice(3, 6).join('');
//     let second = numbers.slice(6,11).join('');
//     let number = [first, second].join('-');
//     let phoneNumber = [code, number].join(' ');
//     return phoneNumber;
// }
function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx';
    numbers.forEach(el => {
        format = format.replace('x', el);
    })
    return format;
}

const countBits = function (n) {
    let twoDigits = n.toString(2);
    return twoDigits.split('1').length - 1;
};
const countBitsShort = (n) => n.toString(2).split('1').length - 1;

function duplicateCount(text) {
    let textArr = text.toLowerCase().split('');
    let duplicateArr = textArr.filter((el, index, arr) => arr.indexOf(el) !== index);
    let duplicateArrUniq = duplicateArr.filter((el, index, arr) => arr.indexOf(el) === index);
    return duplicateArrUniq.length;
};

function duplicateEncode(word) {
    let wordArr = word.toLowerCase().split('');
    let notUniqArr = wordArr.filter((el, index, arr) => arr.indexOf(el) !== index);
    let answerArr = wordArr.map(el => notUniqArr.includes(el) ? ')' : '(')
    return answerArr.join('');
}

// 11/16/2022

const isValidWalk = (walk) => {
    let x = walk.filter(el => el === 'n').length - walk.filter(el => el === 's').length;
    let y = walk.filter(el => el === 'e').length - walk.filter(el => el === 'w').length;
    return x === 0 && y === 0 && walk.length === 10;
}

function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetArr = ['', ...alphabet.split('')];
    let answerArr = text.toLowerCase().split('').map(el => alphabetArr.indexOf(el)).filter(el => el !== -1);

    return answerArr.join(' ');
}

function persistence(num, count = 0) {
    if (String(num).length === 1) return count;
    return persistence(String(num).split('').reduce((acc, el) => acc * el), count + 1);
}

function order(words) {
    let wordsArr = words.split(' ');
    let sortWordsArr = wordsArr.sort((a, b) => a.split('').filter(el => isFinite(el)) - b.split('').filter(el => isFinite(el)));
    return sortWordsArr.join(' ');
}

function tribonacci(signature, n) {
    if (!n) return [];
    for (let i = 3; i < n; i++) {
        signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1]);
    }
    signature.length = n;
    return signature;
}

function toCamelCase(str) {
    console.log(str)
    let universalStr = str.replace(/-/g, ' ');
    universalStr = universalStr.replace(/_/g, ' ');
    let strArr = universalStr.split(' ');
    for (let i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i].split('').map((el, index) => index === 0 ? el.toUpperCase() : el).join('');
    }
    return strArr.join('');
}

const uniqueInOrder = function (iterable) {
    let iterableArr = Array.isArray(iterable) ? iterable : iterable.split('');
    let iterableFilterArr = iterableArr.filter((el, index, array) => {
        if (index) {
            return el !== array[index - 1]
        } else
            return true
    })
    return iterableFilterArr;
}

const decodeMorse = function (morseCode) {
    const MORSE_TABLE = {
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",

        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",

        "/": " ",
        "-.-.--": "!",
        ".-.-.-": ".",
        "--..--": ",",

        "...---...": 'SOS',
    };
    const decoder = (code) => MORSE_TABLE[code];

    let morseCodeArrOutside = morseCode.split('   ');

    let phraseArr = morseCodeArrOutside.map(el => {
        let morseCodeArrInside = el.split(' ');
        let word = morseCodeArrInside.map(el => decoder(el)).join('').toUpperCase();
        return word;
    })
    let phrase = phraseArr.join(' ').trim();
    return phrase;
}

function narcissistic(value) {
    return String(value).split('').reduce((acc, el, index, arr) => acc + (+el) ** arr.length, 0) === value;
}

function isPangram(phrase) {
    const uniqueArrayElements = array => array.filter((el, index, array) => array.indexOf(el) === index);
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetArr = alphabet.split('');
    let lettersArr = phrase.toLowerCase().split('').filter(el => alphabetArr.includes(el));
    let uniqLettersArr = uniqueArrayElements(lettersArr);
    return alphabetArr.length === uniqLettersArr.length;
}

function isPangramBeta(phrase) {
    let alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let phraseArr = phrase.toLowerCase().split('');
    let answer = alphabetArr.every(el => phraseArr.includes(el));
    return answer;
}

function findUniq1(arr) {
    let sortArr = arr.sort((a, b) => a - b);
    switch (arr[0] - arr[1]) {
        case 0:
            return arr[arr.length - 1]
        default:
            return arr[0];
    }
}

function findUniq2(arr) {

    let sortArr = arr
        .map(el => el.toLowerCase().replace(/ /g, '')
            .split('')
            .filter((el, index, arr) => arr.indexOf(el) === index)
            .sort((a, b) => a[0] < b[0] ? -1 : 1)
            .join('')
        )
        .sort((a, b) => a > b ? 1 : -1);

    let other = sortArr[0] !== sortArr[1] ? sortArr[0] : sortArr[sortArr.length - 1];

    let answer = arr.find(arrEl => {
        if (other === '') {
            return arrEl.trim() === '';
        }
        return other.split('').every(otherEl => {
            return arrEl.toLowerCase().split('').includes(otherEl);
        });
    });

    return answer;
}

function findUniq(arr) {
    console.log(arr)

    for (let item of arr) {
        if (typeof (item) !== 'number' || item === NaN) break;
        if (arr[0] - item !== 0) return item;
    }
    // test other type

    let elementsTypeArr = arr.map(el => typeof (el)).sort((a, b) => a < b ? -1 : 1);

    if (elementsTypeArr[0] !== elementsTypeArr[elementsTypeArr.length - 1]) {
        let other = elementsTypeArr[0] === elementsTypeArr[1]
            ? elementsTypeArr[elementsTypeArr.length - 1]
            : elementsTypeArr[0];

        return arr.find(el => typeof (el) === other);
    } else if (elementsTypeArr[0] === 'object' && elementsTypeArr[elementsTypeArr.length - 1] === 'object') {

        let isAllArraysArr = arr.map(el => Array.isArray(el)).sort((a, b) => a < b ? -1 : 1);

        let isAllArrays = isAllArraysArr[0] === isAllArraysArr[isAllArraysArr.length - 1];

        if (!isAllArrays) {

            let otherType = (isAllArraysArr[0] === isAllArraysArr[1] ? isAllArraysArr[isAllArraysArr.length - 1] : isAllArraysArr[0])
                ? 'array' : 'object';

            return arr.find(el => otherType === 'array' ? Array.isArray(el) : !Array.isArray(el))
        } else {

            return arr[0];
        }

    } else {
        let sortArr = arr.sort((a, b) => a - b)
        let answer = sortArr[0] === sortArr[1] ? sortArr[sortArr.length - 1] : sortArr[0];
        return answer;
    }
}

function solution(str) {
    if (str.length % 2) str = str.concat('_');
    let answer = [];
    for (let i = 0; i < str.length; i += 2) {
        answer.push(str[i] + str[i + 1]);
    }
    return answer
}

function findMissingLetter(array) {
    const LOWER_CASE = 'LOWER_CASE';
    const UPPER_CASE = 'UPPER_CASE';
    let alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let modeCase = alphabetArr.includes(array[0]) ? LOWER_CASE : UPPER_CASE;
    if (modeCase === "UPPER_CASE") alphabetArr = alphabetArr.map(el => el.toUpperCase());
    let startIndex = alphabetArr.indexOf(array[0]);
    for (let i = startIndex; i < startIndex + array.length; i++) {
        if (alphabetArr[i] !== array[i - startIndex]) return alphabetArr[i]
    }
}

function sortArray(array) {
    let sortArr = [...array]
    let oddIndexes = [];
    let oddNumbers = [];
    sortArr.forEach((el, index) => {
        if (el % 2) {
            oddIndexes.push(index);
            oddNumbers.push(el);
        }
    });
    let oddNumbersSortArr = oddNumbers.sort((a, b) => a - b);
    for (let i = 0; i < oddIndexes.length; i++) {
        sortArr[oddIndexes[i]] = oddNumbersSortArr[i];
    }
    return sortArr;
}

function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
        if (nFloors > 0) {
            tower.push(1 + 2 * i)
        }
    }
    let width = 1 + 2 * nFloors;

    let towerToRender = tower.map(el => {
        let floor = '';
        let spaceNum = width - el;
        for (let i = 1; i <= el; i++) {
            floor += '*';
        }
        for (let i = 1; i < spaceNum / 2; i++) {
            floor = ` ${floor} `;
        }
        return floor;
    })
    return towerToRender;
}

function high(phrase) {
    let alphabetArr = '!abcdefghijklmnopqrstuvwxyz'.split('');
    let phraseArr = phrase.split(' ');
    const getScores = (strArr) => {
        return strArr.reduce((acc, el) => acc + alphabetArr.indexOf(el), 0)
    };
    let wordAndScores = phraseArr.reduce((acc, el) => {
        let scores = getScores(el.split(''));
        if (acc[1] < scores) {
            return [el, scores];
        } else {
            return acc;
        }
    }, ['', 0]);
    return wordAndScores[0];
}

function countSmileys(arr) {
    let count = 0;

    arr.forEach(el => {
        switch (el.length) {
            case 2:
                (el[0] === ':' || el[0] === ';') && (el[1] === ')' || el[1] === 'D') && count++;
                break;
            case 3:
                (el[0] === ':' || el[0] === ';') && (el[1] === '-' || el[1] === '~') && (el[2] === ')' || el[2] === 'D') && count++;
                break;
        }
    })

    return count;
}

// 11/19/2022

function findNb(m) {
    const builder = (floor, value) => {
        if (value === m) {
            return floor;
        } else if (value > m) {
            return -1;
        }
        return builder(floor + 1, value += Math.pow(floor + 1, 3));

    }
    return builder(0, 0);
}

function validBraces(braces) {
    let bracesArr = braces.split('');
    const rules = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    while (bracesArr.length) {
        let closesIndexes = bracesArr
            .map((el, index) => (el === '}' || el === ']' || el === ')') && index)
            .filter(el => el)
        if (closesIndexes.length === 0) break;
        let firstCloseIndex = closesIndexes[0];
        if (bracesArr[firstCloseIndex] === rules[bracesArr[firstCloseIndex - 1]]) {
            bracesArr.splice(firstCloseIndex - 1, 2);
        } else {
            break
        }
    }
    return !bracesArr.length
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function longestConsec(strarr, k) {
    if (strarr.length === 0 || strarr.length < k || k <= 0) return '';
    let concatArr = strarr.map((el, index, array) => {
        let newEl = '';
        for (let i = 0; i < k; i++) {
            newEl += array[index + i];
        }
        return newEl;
    });
    concatArr.length = concatArr.length - (k - 1);
    let maxLength = concatArr.reduce((acc, el) => el.length > acc ? el.length : acc, 0);
    return concatArr.find(el => el.length === maxLength);
}

function expandedFormPlus(num) {
    const divisor1000 = (num, acc = '') => {
        let result = Math.trunc((num / 1000));
        if (String(result).length < 4) return `${result} ${acc}`;
        return divisor1000(result, `${result % 1000} ${acc}`)
    };
    let answerBefore1000 = String(num % 1000);
    let answerAfter1000 = '';

    answerBefore1000 = answerBefore1000.split('')
        .map((el, index, array) => {
            for (let i = 1; i < array.length - index; i++) {
                el += 0;
            }
            return el;
        })
        .filter(el => +el !== 0)
        .join(' + ');

    if (num / 1000 >= 1) {
        answerAfter1000 = divisor1000(num).trim().split(' ')
            .map((el, index, array) => {
                for (let i = 0; i < array.length - index; i++) {
                    el += '000';
                }
                return el;
            })
            .join(' + ');
    }

    return `${answerAfter1000 && `${answerAfter1000} + `}${answerBefore1000}`;
}

function expandedForm(num) {
    let answer;
    let numArr = String(num).split('');
    let numArrWithNulls = numArr
        .map((el, index, array) => {
            for (let i = 1; i < array.length - index; i++) {
                el += '0'
            }
            return el;
        })
        .filter(el => +el);

    return numArrWithNulls.join(' + ')
}

function inArray(array1, array2) {
    let array = array1.filter(el1 => {
        return array2.some(el2 => {
            return el2.split(el1).length > 1
        })
    });
    return array.sort();
}

function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
    let count = 0;
    for (let i = h; i > window; i *= bounce) {
        count += i * bounce > window ? 2 : 1;
    }
    return count;
}

function solution(string) {
    return string.split('').map(el => el.toUpperCase() === el ? ` ${el}` : el).join('');
}

function queueTime(customers, n) {
    let cases = '0'.repeat(n).split('').map(el => Number(el));
    for (const people of customers) {
        cases.sort((a, b) => a - b)[0] += people;
    }
    return cases.sort((a, b) => b - a)[0];
}

function wave(str) {
    let answerArr = [];
    str.split('').forEach((el, index) => {
        if (el !== ' ') {
            answerArr.push(str.split('').map((e, i) => i === index ? e.toUpperCase() : e).join(''));
        }
    })
    return answerArr;
}

function sumDigPow(a, b) {
    let answerArr = [];
    for (let j = a; j < b; j++) {
        if (String(j).split('').reduce((acc, el, i) => acc + (+el) ** (i + 1), 0) === j) {
            answerArr.push(j);
        }
    }
    return answerArr;
}

function count(str) {
    let uniqArr = str.split('').filter((el, i, array) => i === array.indexOf(el));
    let answerObj = {};
    for (const element of uniqArr) {
        answerObj[element] = 0;
    }
    str.split('').forEach(el => answerObj[el]++);
    return answerObj;
}

function twoSum(numbers, target) {
    let answer = [];
    let answerArr = numbers.reduce((acc, el, i) => {
        for (let j = 0; j < numbers.length; j++) {
            if (j !== i) {
                if (numbers[j] + el === target) {
                    if (!answer.length) answer = [i, j];
                    return [...acc, i];
                }
            }
        }
        return acc;
    }, [])
    return answer
}

function encrypt(text, n) {
    if (n > 0 && text) {
        const maker = (text) => {
            return text.split('').filter((el, i) => !!(i % 2)).concat(text.split('').filter((el, i) => !(i % 2))).join('');
        };
        return encrypt(maker(text), n - 1);
    }
    return text;
}

function decrypt(encryptedText, n) {
    if (n > 0 && encryptedText) {
        const backMaker = (text) => {
            let oddLength = text.length % 2
                ? Math.floor(text.length / 2)
                : text.length / 2;
            let evenLength = text.length - oddLength;
            let odd = text.split('', oddLength);
            let even = text.split('').slice(oddLength);
            let result = [];
            for (let i = 0; i < even.length; i++) {
                result.push(even[i]);
                i <= odd.length - 1
                && result.push(odd[i]);
            }
            return result.join('');
        };

        return decrypt(backMaker(encryptedText), n - 1)
    }
    return encryptedText;
}

String.prototype.camelCase = function () {
    return this.split(' ')
        .map(el => el.split('')
            .map((el, i) => i === 0 ? el.toUpperCase() : el)
            .join(''))
        .join('');
};

function toWeirdCase(str) {
    return str.toLowerCase().split(' ')
        .map(el => el.split('')
            .map((e, i) => !(i % 2) ? e.toUpperCase() : e)
            .join(''))
        .join(' ');
}

function diamond(n) {
    if (n <= 0 || !(n % 2)) return null;
    let resultArr = [];
    resultArr.push(`${'*'.repeat(n)}\n`);
    for (let i = Math.floor(n / 2); i > 0; i--) {
        let starCount = i * 2 - 1;
        let spaceCount = (n - starCount) / 2;
        let stars = `${' '.repeat(spaceCount)}${'*'.repeat(starCount)}\n`;
        resultArr.push(stars);
        resultArr.unshift(stars);
    }
    return resultArr.join('');
}

function isValidIP(str) {
    let ipArr = str.split('.');
    if (ipArr.length !== 4) return false;
    return ipArr.every(el => {
        if (el.split('').some(el => !Number.isInteger(+el) || el === '\n' || el === ' ') || !el || (el.length > 1 && !(+el[0]))) return false;
        return +el >= 0 && +el <= 255;
    });
}

function solution(number) {
    let rules = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    }
    let result = '';
    let keys = Object.keys(rules).sort((a, b) => b - a);

    for (let key of keys) {
        let count = Math.floor(number / +key);
        result += rules[key].repeat(count);
        number -= +key * count;
        if (number === 0) break;
    }
    return result;
}

function solutionBack(roman) {
    let rules = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    }
    let result = [];
    let keys = ['900', '1000', '400', '500', '90', '100', '40', '50', '9', '10', '4', '5', '1'];
    for (let key of keys) {
        let newRomanArr = roman.split(rules[key]);
        let count = newRomanArr.length - 1;
        for (let i = 0; i < count; i++) {
            result.push(+key);
        }
        roman = newRomanArr.join('');
    }
    return result.reduce((acc, el) => acc + el);
}

// function sqInRect(lng, wdth, answerArr = []) {
//     if (lng === wdth && answerArr.length === 0) return null;
//     if (lng === wdth) {
//         answerArr.push(lng);
//         return answerArr;
//     }
//     let newLng;
//     let newWdth;
//     if (lng > wdth) {
//         newLng = lng - wdth;
//         newWdth = wdth;
//         answerArr.push(wdth)
//     } else {
//         newLng = lng;
//         newWdth = wdth - lng
//         answerArr.push(lng)
//     }
//     return sqInRect(newLng, newWdth, answerArr);
// }
function sqInRect(lng, wdth) {
    let arr = []
    if (lng === wdth) return null
    while (lng > 0 && wdth > 0) {
        arr.push(lng > wdth ? wdth : lng)
        lng > wdth ? lng -= wdth : wdth -= lng
    }
    return arr
}

function titleCase(title, minorWords) {

    let titleArr = title.toLowerCase().split(' ');
    return titleArr.map((el, index) => {
        return minorWords && minorWords.toLowerCase().split(' ').includes(el) && index
            ? el
            : el.split('').map((e, i) => !i ? e.toUpperCase() : e).join('')
    }).join(' ')
}

function parse(data) {
    let dataArr = data.split('');
    let resultArr = [];
    let initial = 0;
    for (const command of dataArr) {
        command === 'i'
            ? initial++
            : command === 'd'
                ? initial--
                : command === 's'
                    ? initial = initial ** 2
                    : command === 'o'
                        ? resultArr.push(initial)
                        : initial += 0;
    }
    return resultArr;
}

function stockList(listOfArt, listOfCat) {
    if (!listOfArt.length || !listOfCat.length) return '';
    let filterList = listOfArt.filter(el => {
        return listOfCat.includes(el[0])
    });
    let booksObj = {};
    for (const cat of listOfCat) {
        booksObj[cat] = 0;
    }
    for (const category of filterList) {
        let categoryArr = category.split(' ');
        let cat = categoryArr[0][0];
        let count = categoryArr[1];
        booksObj[cat] += +count;
    }
    let answerArr = [];
    for (const key of Object.keys(booksObj)) {
        answerArr.push(`(${key} : ${booksObj[key]})`)
    }
    return answerArr.join(' - ');
}

function goodVsEvil(good, evil) {
    let rules = {
        'Hobbits': 1,
        'Orcs': 1,
        'Men': 2,
        'Wargs': 2,
        'Goblins': 2,
        'Elves': 3,
        'Uruk Hai': 3,
        'Dwarves': 3,
        'Eagles': 4,
        'Trolls': 5,
        'Wizards': 10,
    };
    let goodOrder = ['Hobbits', 'Men', 'Elves', 'Dwarves', 'Eagles', 'Wizards'];
    let evilOrder = ['Orcs', 'Men', 'Wargs', 'Goblins', 'Uruk Hai', 'Trolls', 'Wizards'];
    let goodCount = good.split(' ').map((el, index) => rules[goodOrder[index]] * el).reduce((acc, el) => acc + el);
    let evilCount = evil.split(' ').map((el, index) => rules[evilOrder[index]] * el).reduce((acc, el) => acc + el);

    return goodCount > evilCount
        ? "Battle Result: Good triumphs over Evil"
        : goodCount < evilCount
            ? "Battle Result: Evil eradicates all trace of Good"
            : "Battle Result: No victor on this battle field"
}

function revrot(str, sz) {
    if (!str || !sz || str.length < sz) return '';
    let strArr = str.split('');
    let count = Math.floor(strArr.length / sz);
    let strArrSz = [...Array(count)];
    for (let i = 0; i < strArrSz.length; i++) {
        strArrSz[i] = strArr.slice(i * sz, i * sz + sz);
    }
    return strArrSz
        .map(el => {
            if (!(el.reduce((acc, el) => acc + el ** 3, 0) % 2)) {
                return el.reverse().join('');
            } else {
                el[el.length] = el[0];
                el.splice(0, 1);
                return el.join('');
            }
        })
        .join('');
}

function partsSums(ls) {
    console.log(ls);
    ls.reverse();
    let resultArr = [0];
    for (let i = 0; i < ls.length; i++) {
        resultArr.push(resultArr[resultArr.length - 1] + ls[i]);
    }
    resultArr.reverse();
    return resultArr;
}

// const findMissing = function (list) {
//     console.log(list);
//     let iterArr = [];
//     list.forEach((el, index, array) => {
//         iterArr.push(array[index + 1] - el);
//     });
//     iterArr = iterArr.filter(el => el);
//     console.log(iterArr);
//     let trueIter;
//     iterArr[0] > 0
//         ? trueIter = iterArr.reduce((acc, e) => acc > e ? e : acc)
//         : trueIter = iterArr.reduce((acc, e) => acc < e ? e : acc)
//     console.log(trueIter);
//     let goal = list.reduce((acc, el, index, array) => (el + trueIter !== array[index + 1]) && array[index + 1] ? el + trueIter : acc, 0);
//     return goal;
// }
const findMissing = function (list) {
    let iter = (list[list.length - 1] - list[0]) / list.length;
    return list.filter((el, index, array) => el + iter !== array[index + 1])[0] + iter;
}

function meeting(s) {
    return s.toUpperCase().split(';')
        .map(el => el.split(':'))
        .sort((a, b) => (a[1] < b[1]) ? -1 : (a[1] === b[1] && a[0] < b[0]) ? -1 : 1)
        .map(el => el.reverse())
        .map(el => `(${el.join(', ')})`)
        .join('');
}

function sum(a) {
    let acc = a;

    function inner(b) {
        acc += b;
        return inner;
    }

    inner.toString = function () {
        return acc;
    }

    return inner;
}

const multiplicationTable = function (size) {
    return [...Array(size)].map((el, index) => [...Array(size)].map((e, i) => (index + 1) * (i + 1)));
}

const encryptThis = function (text) {
    let temp = '';
    let textArr = text.split(' ')
        .map(word => word.split('')
            .map((el, index, array) => {
                if (index === 0) return el.charCodeAt(0);
                if (index === 1) {
                    temp = el;
                    return array[array.length - 1];
                }
                if (index === array.length - 1) return temp;
                return el;
            })
            .join(''))
        .join(' ')
    return textArr;
}

function dataReverse(data) {
    let arr = [...Array(data.length / 8)]
        .map((el, index) => data.slice(index * 8, (index + 1) * 8))
        .reverse()
        .flat()
    return arr
}

function thirt(n) {

    let result = NaN;
    let preResult = 0;

    while (result !== preResult) {
        if (!result) {
            result = n;
        } else {
            result = preResult;
        }
        preResult = String(result).split('')
            .reverse()
            .map((el, index) => +el * ((10 ** index) % 13))
            .reduce((acc, el) => acc + el)
    }
    return result;
}

function cleanString(s) {

    let sArr = s.split('');
    let symbolsNum = sArr.filter(el => el !== '#').length;
    let backspaces = s.length - symbolsNum;

    if (!symbolsNum) return '';

    while (symbolsNum && backspaces) {
        let bsIndex = sArr.indexOf('#');
        if (bsIndex) {
            sArr.splice(bsIndex - 1, 2);
            symbolsNum--;
            backspaces--;
        } else {
            sArr.splice(bsIndex, 1);
            backspaces--;
        }
    }
    return sArr.join('');
}

function solve(s) {
    let arr = s.replace(/[aeiou]/g, '-').split('-').filter(el => el);
    let sumArr = arr.map(el => el.split('').reduce((acc, el) => acc + (el.charCodeAt(0) - 96), 0)).sort((a, b) => b - a)
    return sumArr[0];
}

function wordValue(a) {
    return a
        .map((el, index) => (el
                .split(' ')
                .reduce((acc, el) => acc + el
                    .split('')
                    .reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0), 0)
        ) * (index + 1));
}

function getCount(str) {
    let vowelsArr = 'aeiou'.split('');
    let count = str.split('').filter(el => vowelsArr.includes(el)).length
    return count;
}

function race(v1, v2, g) {
    console.log(v1, v2, g);
    if (v1 >= v2) return null;
    let time = Math.floor(g / (v2 - v1) * 3600);
    let hour = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60) - hour * 60;
    let seconds = time - hour * 3600 - minutes * 60;
    return [hour, minutes, seconds];
}

function validPhoneNumber(phoneNumber) {
    let format = '(xxx) xxx-xxxx';
    let result = phoneNumber.split('').map(el => (isFinite(+el) && el !== ' ') ? 'x' : el).join('');
    return format === result;
}

function encode(str) {

    let vowelsArr = 'aeiou'.split('');
    return str.split('').map(el => vowelsArr.includes(el.toLowerCase()) ? vowelsArr.indexOf(el.toLowerCase()) + 1 : el).join('');
}

function decode(string) {
    const decoderArr = {
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
        '5': 'u',
    };
    return string.split('').map(el => Object.keys(decoderArr).includes(el) ? decoderArr[el] : el).join('');
}

function tripledouble(num1, num2) {
    let treeLetterArr = [];
    String(num1).split('').forEach(el => {
        String(num1).includes(el.repeat(3)) && !treeLetterArr.includes(el) && treeLetterArr.push(el);
    })
    if (treeLetterArr.length) {
        for (const el of treeLetterArr) {
            if (String(num2).includes(el.repeat(2))) return 1;
        }
    }
    return 0;
}

// function foldArray(array, runs) {
//     console.log(array, runs);
//     if (runs > 0) {
//         let newArr
//         if (array.length % 2) {
//             newArr = array.slice(0, Math.ceil(array.length / 2));
//             for (let i = 0; i < newArr.length - 1; i++) {
//                 newArr[i] += array[array.length - 1 - i];
//             }
//         } else {
//             newArr = array.slice(0, array.length / 2);
//             for (let i = 0; i < newArr.length; i++) {
//                 newArr[i] += array[array.length - 1 - i];
//             }
//         }
//         return foldArray(newArr, runs - 1);
//     }
//     return array;
// }

function foldArray(array, runs) {
    if (!runs) return array;
    let newArr = [];
    for (let i = 0; i < Math.ceil(array.length / 2); i++) {
        newArr[i] = array.length - 1 - i === i ? array[i] : array[i] + array[array.length - 1 - i];
    }
    return foldArray(newArr, runs - 1);
}

const uniqueArrayElements = array => Array.from(new Set(array));


const aClean = (arr) => {
    let map = new Map();
    for (const arrElement of arr) {
        map.set(arrElement.toLowerCase().split('').sort().join(''), arrElement);
    }
    return Array.from(map.values());
};

function validate(n) {
    let numArr = String(n).split('');
    for (let i = numArr.length - 1; i >= 0; i--) {
        if ((numArr.length - 1 - i) % 2) {
            numArr[i] = +numArr[i] * 2 > 9
                ? String(numArr[i] * 2).split('').reduce((acc, el) => acc + +el, 0)
                : +numArr[i] * 2;
        } else {
            numArr[i] = +numArr[i];
        }
    }
    let sumElArr = numArr.reduce((acc, el) => acc + el);
    return !(sumElArr % 10);
}

function upArray(arr) {
    if (!arr.length || arr.some(el => el < 0 || String(el).length > 1)) return null;

    const iterWorker = (arr, index) => {
        if (arr[index] + 1 < 10) {
            arr[index]++;
            return arr;
        } else {
            arr[index] = 0;
            if (index === 0) {
                arr.unshift(0);
                return iterWorker(arr, 0);
            }
            return iterWorker(arr, index - 1);
        }
    }
    return iterWorker(arr, arr.length - 1);
}

function Xbonacci(signature, n) {
    if (signature.length > n) signature.length = n;
    let x = signature.length;
    while (signature.length < n) {
        let newElement = signature.slice(signature.length - x).reduce((acc, el) => acc + el);
        signature.push(newElement);
    }
    return signature;
}

function calc(expr) {
    if (!expr) return 0;
    let triggers = ['+', '-', '*', '/'];
    let exprArr = expr.split(' ');
    while (exprArr.some(el => triggers.includes(el))) {
        let triggerIndex;
        let firstTrigger = exprArr.find((el, index) => {
            if (triggers.includes(el)) {
                triggerIndex = index;
                return true;
            } else return false;
        });
        console.log(firstTrigger, triggerIndex);
        let newNum;
        switch (firstTrigger) {
            case '+':
                newNum = (+exprArr[triggerIndex - 2]) + (+exprArr[triggerIndex - 1]);
                break
            case '-':
                newNum = (+exprArr[triggerIndex - 2]) - (+exprArr[triggerIndex - 1]);
                break
            case '*':
                newNum = (+exprArr[triggerIndex - 2]) * (+exprArr[triggerIndex - 1]);
                break
            case '/':
                newNum = (+exprArr[triggerIndex - 2]) / (+exprArr[triggerIndex - 1]);
                break
        }
        exprArr.splice(triggerIndex - 2, 3, newNum);
        console.log(exprArr);
    }
    return +exprArr[0];
}

// function pyramid(n) {
//     if (n >= 0) {
//        return [...Array(n)].map((el, index) => new Array(index + 1).fill(1))
//     }
// }
const pyramid = n => n >= 0 ? [...Array(n)].map((el, index) => new Array(index + 1).fill(1)) : null;

const disemvowel = str => str.replace(/[aeiouAEIOU]/g, '');

const squareDigits = (num) => +String(num).split('').map(el => (+el) ** 2).join('');

function highestRank(arr) {
    let set = Array.from(new Set(arr));
    let countArr = [...Array(set.length)].map((el, index) => ({num: set[index], count: 0}));
    arr.forEach(el => {
        countArr.find(e => e.num === el).count++;
    });
    countArr.sort((a, b) => b.count - a.count);
    let maxValue = countArr[0].count;
    let answer = countArr.filter(el => el.count === maxValue).sort((a, b) => b.num - a.num)[0].num;
    return answer;
}

function dashatize(num) {
    return String(Math.abs(num)).split('').map((el, index, array) => (el % 2 && array.length > 1) ? (index === 0 ? `${el}-` : index === array.length - 1 ? `-${el}` : `-${el}-`) : el).join('').replace(/--/g, '-');
}

function moveZeros(arr) {
    console.log(arr);
    let arrWithout = arr.filter(el => typeof el !== 'number' || String(el)[String(el).length - 1] !== '0');
    let arrWith = arr.filter(el => typeof el === 'number' && String(el)[String(el).length - 1] === '0');
    return [...arrWithout, ...arrWith];
}

function humanReadable(seconds) {

    let mask = 'HH:MM:SS';

    const pad = num => num < 10 ? '0' + num : num;
    let hour = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - 3600 * hour) / 60);
    let secondsRes = seconds - (hour * 60 + minutes) * 60;

    return mask
        .replace('HH', pad(hour))
        .replace('MM', pad(minutes))
        .replace('SS', pad(secondsRes));
}

function rgb(r, g, b) {
    const numValidator = (num) => num < 0 ? 0 : num > 255 ? 255 : num;
    const twoNumCorrector = (num16) => num16.length < 2 ? 0 + num16 : num16;
    const hexColorMaker = (num) => twoNumCorrector(numValidator(num).toString(16)).toUpperCase();

    let hexColor = hexColorMaker(r) + hexColorMaker(g) + hexColorMaker(b);
    return hexColor;
}

function dirReduc(arr) {
    const apposite = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'WEST': 'EAST',
        'EAST': 'WEST',
    };
    let trigger = true;
    while (trigger) {
        outer:
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === apposite[arr[i + 1]]) {
                    arr.splice(i, 2);
                    break outer;
                }
                if (i === arr.length - 1) trigger = false;
            }
            if (!arr.length) trigger = false;
    }
    return arr;
}

const superSum = (num) => {
    let acc = num;
    function sumWorker(nextNum) {
        acc += nextNum;
        return sumWorker;
    }

    sumWorker.toString = function () {
        return acc
    }

    return sumWorker;
}

function addressCor(country) {
    return function(city) {
        return function (street) {
            return function (home) {
                return {country, city, street, home}
            }
        }
    }
}

let polandAddress = addressCor('Poland');
let belarusAddress = addressCor('Belarus');

let kiev = addressCor('Ukrain')('Kiev');

let me = belarusAddress('Brest')('Rokossovskogo')(2);
let friend = kiev('Street')(3);
let work = polandAddress('Gdansk')('Sea')(10);


// function resultMaker(num, arg) {
//     let result
//     switch (arg[0]) {
//         case '+':
//             result = num + +arg[1];
//             break;
//         case '-':
//             result = num - arg[1];
//             break;
//         case '*':
//             result = num * arg[1];
//             break;
//         case '/':
//             result = num / arg[1];
//             break;
//     }
//     return Math.floor(result);
// }
// function zero(arg) {
//     let num = 0;
//     if (arg === undefined) return num;
//     return resultMaker(num, arg);
// }
// function one(arg) {
//     let num = 1;
//     if (arg === undefined) return num;
//     return resultMaker(num, arg);
// }
// function two(arg) {
//     let num = 2;
//     if (arg === undefined) return num;
//     return resultMaker(num, arg);
// }
// function three(arg) {
//     let num = 3;
//     if (arg === undefined) return num;
//     return resultMaker(num, arg);
// }
// function four(arg) {
//     let num = 4;
//     if (arg === undefined) return num;
//     return resultMaker(num, arg);
// }
// function five(arg) {
//     let num = 5;
//     if (arg === undefined) return num;
//     return resultMaker(num, arg);
// }
// function six(arg) {
//     let num = 6;
//     if (arg === undefined) return num;
//     return resultMaker(num, arg);
// }
// function seven(arg) {
//     let num = 7;
//     if (arg === undefined) return num;
//     return resultMaker(num, arg);
// }
// function eight(arg) {
//     let num = 8;
//     if (arg === undefined) return num;
//     return resultMaker(num, arg);
// }
// function nine(arg) {
//     let num = 9;
//     if (arg === undefined) return num;
//     return resultMaker(num, arg);
// }
//
// function plus(arg) {
//     return `+${arg}`;
// }
// function minus(arg) {
//     return `-${arg}`;
// }
// function times(arg) {
//     return `*${arg}`;
// }
// function dividedBy(arg) {
//     return `/${arg}`;
// }

function rot13(message){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shaker = (letter) => {
        let isUpperCase = letter === letter.toUpperCase();
        let alphabetIndex = letter.toLowerCase().charCodeAt(0) - 96;
        let newIndex = alphabetIndex + 13 > 26 ? alphabetIndex - 13 : alphabetIndex + 13;
        let newLetter = alphabet[newIndex - 1];
        return isUpperCase ? newLetter.toUpperCase() : newLetter;
    }
    return message.split('').map(el => alphabet.includes(el.toLowerCase()) ? shaker(el) : el).join('');
}

console.log(rot13("Test"));