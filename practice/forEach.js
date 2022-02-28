// arrays have an method called 'forEach' which will give us
// one by one value, and then we need to perform some operation
// on these single values by using functions(can use arrow fn)

let nums = [42, 87, 54, 23, 244, 313];
let nums2 = [34, 34, 89, 12, 193, 47];

// each value from array is assigned to the 'value' then we run our
// anon function
nums.forEach((value, index) => {
    console.log(`value : ${value}, index ${index}`);
});

// 3RD PARAMETER OF forEach:-
// forEach can also have 3rd parameter which can be used in the following scenario
// If your callback function were declared elsewhere:

function forEachCallback(value, index, nums2) {
    // console.log(`value : ${value}, index ${index}`);
}
// Then it has no idea what array it's being used for:

nums2.forEach(forEachCallback);
// Because the array is passed as the last argument, such a callback has access to it.

// The callback need not be in the same scope as the forEach call. In a case like this,
// the third parameter would ensure that the callback has some reference to that array.
