function precedence(char) {
	// BODMAS
	if (char === '+' || char === '-') {
		return 1;
	}

	if (char === '/' || char === '*') {
		return 2;
	}

	if (char === '^') {
		return 3;
	}

	return -1;
}

function infixToPostFix(expre) {
	const operators = ['+', '-', '*', '/', '(', ')', '^'];

	const stack = [];
	let result = '';

	for (let i = 0; i < expre.length; i += 1) {
		if (!operators.includes(expre[i])) {
			result += expre[i];
		} else if (expre[i] === '(') {
			stack.push('(');
		} else if (expre[i] === ')') {
			while (stack.length !== 0 && stack[stack.length - 1] !== '(') {
				result += stack.pop();
			}
			stack.pop();
		} else {
			while (
				stack.length !== 0 &&
				precedence(expre[i]) <= precedence(stack[stack.length - 1])
			) {
				result += stack.pop();
			}
			stack.push(expre[i]);
		}
	}

	while (stack.length !== 0) {
		if (stack[stack.length - 1] === '(') {
			return 'Invalid expression';
		}

		result += stack.pop();
	}

	return result;
}

infixToPostFix('a+b*(c^d-e)^(f+g*h)-i');
