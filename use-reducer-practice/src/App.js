import React, { useReducer } from 'react';
import './App.css';
import AddTodo from './AddTodo';

const initState = {
  todos: []
}


const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case "ADD_TODO" : {
      return {
        todos: [...state.todos, action.todo]
      }
    }
    
    default: return state
  }
} 

function App () {
  const [state, dispatch] = useReducer(rootReducer, initState) 
  console.log(state);
  const { todos } = state;
  
  return (
    <div className="App">
      {
        todos && todos.map((todo, i) => <p key={todo}>{i + 1} {todo}</p> )
      }
  
      <AddTodo dispatch={dispatch}/>
    </div>
  );
}

export default App;
