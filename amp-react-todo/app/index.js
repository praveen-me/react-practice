import { h, render } from 'preact';
import App from './App';

const btn = document.getElementById('btn');
btn.style.display = 'none';
const root = document.getElementById('root');

render(<App />, root);
