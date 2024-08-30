// Utility function to determine if a collection is an array or an object
function isArray(collection) {
    return Array.isArray(collection);
}

// Utility function to convert an object to an array
function toArray(collection) {
    return isArray(collection) ? collection : Object.values(collection);
}

// myEach: Iterates over a collection and applies the callback to each element
function myEach(collection, callback) {
    const newCollection = toArray(collection);
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }
    return collection;
}

// myMap: Returns a new array with the results of applying the callback to each element
function myMap(collection, callback) {
    const newCollection = toArray(collection);
    const result = [];
    for (let i = 0; i < newCollection.length; i++) {
        result.push(callback(newCollection[i], i, collection));
    }
    return result;
}

// myReduce: Reduces a collection to a single value using the callback
function myReduce(collection, callback, acc) {
    const newCollection = toArray(collection);
    let accumulator = acc !== undefined ? acc : newCollection[0];
    let i = acc !== undefined ? 0 : 1;

    for (; i < newCollection.length; i++) {
        accumulator = callback(accumulator, newCollection[i], collection);
    }

    return accumulator;
}

// myFind: Returns the first element that passes the predicate test
function myFind(collection, predicate) {
    const newCollection = toArray(collection);
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            return newCollection[i];
        }
    }
    return undefined;
}

// myFilter: Returns an array of elements that pass the predicate test
function myFilter(collection, predicate) {
    const newCollection = toArray(collection);
    const result = [];
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            result.push(newCollection[i]);
        }
    }
    return result;
}

// mySize: Returns the number of elements in the collection
function mySize(collection) {
    const newCollection = toArray(collection);
    return newCollection.length;
}

// myFirst: Returns the first element or the first n elements of an array
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

// myLast: Returns the last element or the last n elements of an array
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(array.length - n);
}

// BONUS: mySortBy: Returns a sorted copy of the array based on the callback
function mySortBy(array, callback) {
    const newArray = [...array];
    return newArray.sort((a, b) => {
        let aValue = callback(a);
        let bValue = callback(b);

        if (aValue > bValue) return 1;
        if (aValue < bValue) return -1;
        return 0;
    });
}

// BONUS: myFlatten: Flattens a nested array to any depth
function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            if (shallow) {
                newArr.push(...array[i]);
            } else {
                myFlatten(array[i], shallow, newArr);
            }
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// myKeys: Returns an array of the object's keys
function myKeys(object) {
    return Object.keys(object);
}

// myValues: Returns an array of the object's values
function myValues(object) {
    return Object.values(object);
}

// Example usage:
console.log(myEach([1, 2, 3], alert)); // Alerts each number and returns the original array
console.log(myMap([1, 2, 3], num => num * 3)); // [3, 6, 9]
console.log(myReduce([1, 2, 3], (acc, val) => acc + val, 0)); // 6
console.log(myFind([1, 2, 3, 4], num => num % 2 === 0)); // 2
console.log(myFilter([1, 2, 3, 4], num => num % 2 === 0)); // [2, 4]
console.log(mySize({one: 1, two: 2, three: 3})); // 3
console.log(myFirst([5, 4, 3, 2, 1])); // 5
console.log(myLast([5, 4, 3, 2, 1], 3)); // [3, 2, 1]
console.log(mySortBy([1, 2, 3, 4, 5], num => Math.sin(num))); // Sorted array
console.log(myFlatten([1, [2], [3, [[4]]]], true)); // [1, 2, 3, [[4]]]
console.log(myKeys({one: 1, two: 2, three: 3})); // ["one", "two", "three"]
console.log(myValues({one: 1, two: 2, three: 3})); // [1, 2, 3]
