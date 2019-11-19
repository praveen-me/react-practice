import { h } from 'preact';

const keys = ['7', '8', '9', '÷', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

const operations = ['÷', '*', '-', '.', '=', '+'];

const Keypad = () => {
	return (
		<div className='keypad'>
			<button className='keypad_top_btn btn'>AC</button>
			<div className='keypad_btn_wrapper'>
				{keys.map(key => (
					<button class='btn keypad_'></button>
				))}
			</div>
		</div>
	);
};

export default Keypad;
