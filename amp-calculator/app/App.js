import { h } from 'preact';
import { useState } from 'preact/compat';
import Screen from './components/Screen/index';
import Keypad from './components/Keypad';
import { operations } from './utils';

const App = () => {
	const [expression, setExpression] = useState([]);
	const [result, setResult] = useState(0);

	// Solutions for evaluating expression:
	// 1 - eval (can't use this inside the web worker);
	// 2 - Write a manual function for that
	// 	 - First make an array out of it i.e [1, +, 12, -, 13, + 14]
	//   - For achieving this:
	//     - Check that if the pressed value is present in the operation's array then directly pushed in the expression array else take the value and take last value in the array then make a newValue with them and after that replace new value from the last value in the array
	//     - Get the sum from the expression/

	const handleExpression = event => {
		const value = event.target.id;
		let newExpression = [...expression];

		if (operations.includes(value)) {
			newExpression.push(value);
		} else {
			let lastValue = newExpression[newExpression.length - 1];
			// If the current value is not an operation
			// 1 - If the last value in the array is an operation
			//   - Then directly push the value in the array
			// 2 - If the last value is number
			//   - Then merge the current value with last value

			if (newExpression.length) {
				if (operations.includes(lastValue)) {
					newExpression.push(value);
				} else {
					let getLastValue = lastValue + value;
					newExpression.splice(-1, 1, getLastValue);
				}
			} else {
				newExpression.push(value);
			}
		}
		setExpression(newExpression);
	};

	const handleResult = () => {
		let result;

		for (let i = 0; i < expression.length; i++) {
			console.log(expression[i]);
		}
	};

	return (
		<main className='calculator'>
			<div className='wrapper'>
				<Screen expression={expression.join(' ')} />
				<Keypad setExpression={handleExpression} handleResult={handleResult} />
			</div>
		</main>
	);
};

export default App;
