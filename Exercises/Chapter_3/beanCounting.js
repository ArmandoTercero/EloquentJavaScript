
function countChars(text, character) {
    let total = 0;
    for (let i = 0; i < text.length - 1; i++)
        if (text[i] === character)
            total++;
    return total;
}

function countBs(text) {
    return countChars(text, 'b');
}


console.log(`The string 'blueberry' has a total of ${countBs('blueberry')} Bs`);
console.log(`The string 'hello world' has a total of ${countChars('Hello world', 'l')} Ls`);
console.log(`The string 'this book is neat!' has a total of ${countChars('this book is neat', 'i')} Is`);