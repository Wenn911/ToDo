// Создаём задачу
function ToDo({ todo, toggleTask, removeTask }) {
    return (
      <div key={todo.id} className="item-todo">
        <div className='checkAndTask'>
          <label className='checkContainer'>
            <input type="checkbox" onClick={() => toggleTask(todo.id)} />
              <span className="checkmark"></span>
          </label>
            <span>{todo.task}</span>
        </div>
      </div>
    )
}

export default ToDo;