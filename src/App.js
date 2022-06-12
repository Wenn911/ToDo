import { useEffect, useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import { uniqueId } from 'lodash';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState(todos);

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: uniqueId(),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ]);
  };

    useEffect(() => {
        setFiltered(todos)
      }, [todos])
    
    const handleFilter = (status) => {
      if (status === 'All') { 
        setFiltered(todos);
      } else {
        let newTodo = [...todos].filter(item => item.complete === status);
        setFiltered(newTodo);
      }
    };

  return (
    <div className="App">
      <header>
        <h1>TODOS</h1>
      <button className='btn-filter' type='button' onClick={() => handleFilter('All')}>All</button>
      <button className='btn-filter' type='button' onClick={() => handleFilter(false)}>Active</button>
      <button className='btn-filter' type='button' onClick={() => handleFilter(true)}>Completed</button>
      </header>
      <ToDoForm addTask={addTask} />
      {filtered.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            />
        )
      })}
    </div>
  );
}

export default App;