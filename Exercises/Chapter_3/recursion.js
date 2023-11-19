function isEven(number) {
    if (number < 0)
        number *= -1;

    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}

console.log(`Is 50 even? ${isEven(50)}`);
console.log(`Is 75 even? ${isEven(75)}`);
console.log(`Is -1 even? ${isEven(-1)}`);
console.log(`Is -50 even? ${isEven(-50)}`);
console.log(`Is -75 even? ${isEven(-75)}`);
