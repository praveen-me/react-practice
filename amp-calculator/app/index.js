import { h, render } from 'preact';
import App from './App';

const root = document.getElementById('root');

root.innerHTML = '';

render(<App />, root);
