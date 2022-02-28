let nums = [42, 87, 54, 23, 244, 313];
let nums2 = [34, 97, 91, 274, 17, 84];

//  imagine we have a very lage array(here nums), then
// if we use forEach then the call-back function needed to be called
// for all theses values which is resource hungry, to avoid this
// we can use first filter the values accn to needs
// for this we can use 'filter' method

// 1.FILTER() method
// filter Returns the elements of an array that meet the
//  condition specified in a callback function.
nums.filter((n) => {
    return n % 2 === 0; //filter out even values from the given array
}).forEach((value) => {
    console.log(value);
});

// 2. MAP() method
// Calls a defined callback function on each element of an array,
// and returns an array that contains the results.
nums.filter((n) => {
    return n % 2 === 0; //filter out even values from the given array
})
    .map((n) => {
        return n * 2; //multiply each value by 2
    })
    .forEach((value) => {
        console.log(value);
    });

// 3.REDUCE() Method:
// It is used to when WE NEED ONE VALUE.

// Calls the specified callback function for all the elements in an array.
// The return value of the callback function is the accumulated result,
//  and is provided as an argument in the next call to the callback function.

// @param callbackfn — A function that accepts up to four arguments.
// The reduce method calls the callbackfn function one time for each element in the array.

// @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation.
// The first call to the callbackfn function provides this value as an argument instead of an array value.

// we need to grab the returned value from the reduce() method
// hence using let result here

let result = nums
    .filter((n) => {
        return n % 2 === 0; //filter out even values from the given array
    })
    .map((n) => {
        return n * 2; //multiply each value by 2
    })
    .reduce((a, b) => {
        return a + b; //add values which returned by map function
    });

console.log(result);
