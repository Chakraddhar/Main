import Todoitem from "./Todoitem";

function Todolist({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <Todoitem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default Todolist;
