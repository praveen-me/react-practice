import { h } from 'preact';
import { useState } from 'preact/compat';

const App = () => {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const handleTodoChange = ({ target: { value } }) => {
		setTodo(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setTodos([...todos, todo]);
	};

	return (
		<main className='main text-center my-8 mx-0'>
			<div class='w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto my-0'>
				<div class='mb-4'>
					<input
						class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='text'
						placeholder='Enter Todo'
						onChange={handleTodoChange}
					/>
				</div>
				<div class='flex items-center justify-between'>
					<button
						class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='button'
						onClick={handleSubmit}>
						Add Todo
					</button>
				</div>
			</div>
			<div className='todo-wrapper p-4'>
				{todos &&
					todos.map((todo, index) => (
						<div class='w-full rounded bg-orange-200 bg-gray-500 text-black my-4 py-2 text-left px-4'>
							{`${index + 1} - ${todo}`}
						</div>
					))}
			</div>
		</main>
	);
};

export default App;
