/*
    I've done multiple list data structures. In Assembly, C, Pascal, Python, Java, Smalltalk.
    I couldn't come up with a solution since I was tackling the problem in a wrong way.
    The easiest asnwer when thinking about a solution would be a recursive one.

    It stinks but we can always try to improve ourselves a little bit :).
*/

function arrayToList(array) {
    let list = null;

    for (let i = 0; i < array.length; i++)
        list = { value: array[i], rest: list };

    return list;
}

function listToArray(aList) {
    let array = [], aux = 0;

    while (aList) {
        array[aux] = aList.value;
        aux++;

        aList = aList.rest;
    }

    return array;
}
anArray = [1, 2, 3];
console.log(anArray);
aList = arrayToList(anArray);
console.log(aList);
console.log(listToArray(aList));