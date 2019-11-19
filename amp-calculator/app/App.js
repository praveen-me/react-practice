import { h } from 'preact';
import Screen from './components/Screen';
import Keypad from './components/Keypad';

const App = () => {
	return (
		<main className='calculator'>
			<div className='wrapper'>
				<Screen />
				<Keypad />
			</div>
		</main>
	);
};

export default App;
