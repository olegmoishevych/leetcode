// 1
Array.prototype.last = function () {
    if (this.length === 0) return -1
    return this[this.length - 1]
};


// const arr = [1, 2, 3]; should return 3
// const arr = []; should return 0
// console.log(arr.last());

//2 Array Reduce Transformation

// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
// A reduced array is created by applying the following operation:
// val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
// If the length of the array is 0, it should return init.
// Please solve it without using the built-in Array.reduce method.

var reduce = function (nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

//3
//Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

var isPalindrome = function(x) {
    const str = x.toString();
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    // Compare original string with reversed string
    return str === reversedStr;
};

const a = 10
const b = 10