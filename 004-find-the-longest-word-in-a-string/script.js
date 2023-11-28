// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
	const arr = str.split(" ");

	let max = 0;

	for (let i = 0; i < arr.length; i++) {
		max = arr[i].length > max ? arr[i].length : max;
	}

	return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
