module.exports = function reverse(n) {
	n = n + '';
	let result = [];
	for(let i = n.length - 1; i >= 0; i--) {
		if(n[i] != '-') {
            result.push(n[i]);
        }
	};
	result = result.join('');
	return +result;
}
