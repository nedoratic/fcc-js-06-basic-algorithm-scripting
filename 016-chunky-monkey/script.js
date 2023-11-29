// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
	let result = [];
	let index = 0;
	while (index < arr.length) {
		result.push(arr.slice(index, index + size));
		index += size;
	}
	return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
