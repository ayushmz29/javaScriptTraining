let nums = [];
// arrays are also treated as Objects in JS

nums[0] = 2;
nums[5] = 15;

console.log(nums);

// ! DIFF B/W for-of and for-in

// for-of loop
// here 'value' refers to values directly from the array
for (let value of nums) {
    console.log(value);
}

// for-in loop can also be used
// here the 'key' is referring to keys of the Array object(ie index values)
for (let key in nums) {
    console.log(nums[key]);
}

console.log();
