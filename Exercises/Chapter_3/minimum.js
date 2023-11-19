// We could use Math.min(a, b), but that's no the purpose of this exercise
function minimum(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(`The smallest number between 5 and 7 is ${minimum(5, 7)}`);
console.log(`The smallest number between 8 and 3 is ${minimum(8, 3)}`);
console.log(`The smallest number between 12 and 4 is ${minimum(12, 4)}`);
console.log(`The smallest number between 1 and 6 is ${minimum(1, 6)}`);