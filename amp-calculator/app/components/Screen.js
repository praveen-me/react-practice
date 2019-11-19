import { h } from 'preact';
import { useState } from 'preact/compat';

const Screen = () => {
	return (
		<div className='screen'>
			<div className='screen_display expression'> 5 * 6</div>
			<div class='screen_display answer'> 30</div>
			<hr />
		</div>
	);
};

export default Screen;
