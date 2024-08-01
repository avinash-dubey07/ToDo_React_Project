import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./Store";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css"
import { TodoList } from "./TodoList"


export default function App() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  function handleAddTodo(title) {
    dispatch(addTodo({ id: crypto.randomUUID(), title, completed: false }));
  }

  function handleToggleTodo(id, completed) {
    dispatch(toggleTodo({ id, completed}));
  }

  function handleDeleteTodo(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <>
     <NewTodoForm onSubmit={handleAddTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo} />
    </>
  );
}
