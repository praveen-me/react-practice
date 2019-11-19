import { h } from 'preact';
import ExpressionScreen from './ExpressionScreen';
import ResultScreen from './ResultScreen';

const Screen = ({ expression, result }) => {
	return (
		<div className='screen'>
			<ExpressionScreen expression={expression} />
			<ResultScreen result={result} />
			<hr />
		</div>
	);
};

export default Screen;
