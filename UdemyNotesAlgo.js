

Understand the problem
Explore Concrete Examples
Break It Down
Solve/Simplify
Look back and refactor

Section 4 CH 23
function charCount(str) {
    var obj = {};
    for (var i = 0; i <str.length; i++) {
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj
}

//use for of loop instead
//Use || instead of if/else
function charCount(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}

//using charCodeAt(0) and creating isAlphaNumeric

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 48) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha
    !(code > 96 && code < 123)) {//lower alpha 
        return false;
    }
    return true;
}

function charCount(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}


Section 5
Frequency CountQueuingStrategyUsed Objects or 
sets to collect values/frequencies of values
This can often avoid the need for nested loops or Object(N^2) operations 
with array/strings 

Squared with same 
Order can be mixed up, but want to have squared values 
same([1, 2, 3], [4, 1, 9]) //true
same([1, 2, 3], [1, 9]) //false
same([1, 2, 3], [4, 4, 1]) //false 

//naive solution with nested loops, indexOf is another loop
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //returns -1 if false
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

//Refactored
//2 separate loops is better than 1 nested loop
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}








