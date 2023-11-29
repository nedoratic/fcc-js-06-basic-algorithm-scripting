// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

const bouncer = (arr) => arr.filter(Boolean); // Filter the array to remove falsy values

console.log(bouncer([7, "ate", "", false, 9]));
