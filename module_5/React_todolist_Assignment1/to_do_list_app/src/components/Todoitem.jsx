import { useState } from 'react';

function Todoitem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border px-1 rounded"
          />
        ) : (
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <button onClick={handleEdit} className="text-blue-500">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todoitem;
