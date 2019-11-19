import { h } from 'preact';
import { useState } from 'preact/compat';
import Screen from './components/Screen/index';
import Keypad from './components/Keypad';
import { operations } from './utils';

const App = () => {
	const [expression, setExpression] = useState([]);
	const [result, setResult] = useState('0');

	const handleExpression = event => {
		const value = event.target.id;
		let newExpression = [...expression];

		if (operations.includes(value)) {
			newExpression.push(value);
		} else {
			let lastValue = newExpression[newExpression.length - 1];

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

	console.log(expression);

	const handleResult = () => {
		let result = expression[0];
		let lastExpression;

		for (let i = 1; i < expression.length; i++) {
			let value = expression[i];

			if (operations.includes(value)) {
				lastExpression = value;
			} else {
				switch (lastExpression) {
					case '+':
						{
							result = Number(result) + Number(value);
						}
						break;

					case '-':
						{
							result = Number(result) - Number(value);
						}
						break;

					case '*':
						{
							result = Number(result) * Number(value);
						}
						break;

					case '÷':
						{
							result = Number(result) / Number(value);
						}
						break;

					default:
						console.log('This should never print');
				}
			}
		}

		setResult(result);
	};

	return (
		<main className='calculator'>
			<div className='wrapper'>
				<Screen expression={expression.join(' ')} result={result} />
				<Keypad setExpression={handleExpression} handleResult={handleResult} />
			</div>
		</main>
	);
};

export default App;
