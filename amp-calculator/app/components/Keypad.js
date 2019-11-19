import { h } from 'preact';
import { keys, operations } from './../utils';

const Keypad = ({ setExpression, handleResult, handleReset }) => {
	return (
		<div className='keypad'>
			<button className='keypad_top_btn btn' onClick={handleReset}>
				AC
			</button>
			<div className='keypad_btn_wrapper'>
				{keys.map(key => (
					<button
						key={key}
						id={key}
						className={`btn ${operations.includes(key) ? 'keypad_operation' : 'keypad_numeric'}`}
						onClick={key === '=' ? handleResult : setExpression}>
						{key}
					</button>
				))}
			</div>
		</div>
	);
};

export default Keypad;
