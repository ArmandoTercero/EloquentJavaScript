function reverseArray(array) {
    let newArray = [];
    for (let element of array)
        newArray.unshift(element);
    return newArray;
}

function reverseArrayInPlace(array) {
    let reversedArray = reverseArray(array);
    for (let i = 0; i < array.length; i++)
        array[i] = reversedArray[i];
}

array = [1, 2, 3, 4, 5]
console.log(array);
console.log(reverseArray(array));
console.log(array);
reverseArrayInPlace(array);
console.log(array);
