function deepEqual(aObject, anotherObject) {
    // Checks for data type.
    if (typeof(aObject) !== typeof(anotherObject))
        return false;

    // Checks for null exception.
    if ((aObject === null & anotherObject !== null) || (aObject !== null & anotherObject === null))
        return false;

    // Checks for props in aObject and start comparing them.
    for (let prop of Object.keys(aObject))
        if (aObject[prop] !== anotherObject[prop])
            return false;

    return true;
}

console.log(deepEqual(1, "1"));
console.log(deepEqual(1, 1));
console.log(deepEqual(1, 5));
console.log(deepEqual(5, 5));
console.log(deepEqual("5", 5));
console.log(deepEqual([], []));
console.log(deepEqual([1], ["1"]));
console.log(deepEqual([1], [5]));
console.log(deepEqual([5], [5]));
console.log(deepEqual([], null));