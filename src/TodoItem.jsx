export function TodoItem({ completed, id, title, toggleTodo, deleteTodo  }) {
  return (
    <li style={{justifyContent:"space-between", minHeight:"50px"}}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Remove
      </button>
    </li>
  )
}
