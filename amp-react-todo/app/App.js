import {h} from 'preact';
import {useState} from 'preact/compat';

const App = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([]);

  const handleTodoChange = ({target: {value}}) => {
    
    setTodo(value);
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  return (
    <main className="main flex flex-wrap text-center my-8 mx-0">
      <input type="text" onChange={handleTodoChange}/>
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
      {
        todos && todos.map(todo => (
        <p key={todo}>{todo}</p>
        ))
      }
    </main>
  );
};

export default App;
