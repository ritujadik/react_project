import { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState({
    Title: "",
    Description: "",
  });
  const [todos, setTodos] = useState([]);
  const InputhandleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  const addtodo = () => {
    if (todo.Title !== "" && todo.Description !== "") {
      setTodos([...todos, todo]);
      setTodo({ Title: "", Description: "" });
    }
  };

  const removetodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>To-do-list</h1>
      <input
        type="text"
        name="Title"
        value={todo.Title}
        onChange={InputhandleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="Description"
        value={todo.Description}
        onChange={InputhandleChange}
        placeholder="Description"
      />
      <button onClick={addtodo}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <h3>{item.Title}</h3>
            <p>{item.Description}</p>
            <button onClick={() => removetodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
// i have to add a button which work on onclick to add
