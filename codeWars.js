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
const stairsIn20 = s => s.reduce( (fullArr, arrItem) => fullArr.concat(arrItem) ).reduce( (sum, numItem) => sum + numItem ) * 20;

String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this;
}

const expressionMatter = (a, b, c) => {
    let combinationsArr = [a + b + c, a * b * c, a + b * c, a * b + c, (a + b) * c, a * (b + c)]
    return combinationsArr.sort( (a, b) => b - a)[0];
}