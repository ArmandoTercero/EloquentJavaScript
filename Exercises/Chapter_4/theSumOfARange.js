/*

Old behaviour

function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++)
        array.push(i);
    return array;
}

*/

function range(start, end, step = 1) {
    let array = [];

    if (start <= end) {
        for (let i = start; i <= end; i+= step)
                array.push(i);
    } else {
        for (let i = start; i >= end; i+= step)
                array.push(i);
    }

    return array;
}

function sum(...numbers) {
    let total = 0;
    for (let number of numbers)
        total += number;
    return total;
}


console.log(sum(...range(1, 10)));
console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));