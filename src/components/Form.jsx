import { useState } from "react";
import styles from "../components/custom.module.css"

export default function Form({todos, setTodos}) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name: "", done: false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "", done: false});
    // console.log("todos")
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.todoform}>
        <div className={styles.inputContainer}>
        <input
          onChange={(e) => setTodo({name:e.target.value, done: false})}
          value={todo.name}
          type="text"
          placeholder="Enter TodoItem"
          className={styles.modernInput}
        />
        <button type="submit" className={styles.modernButton}>Add</button>
        </div>
      </form>
    </div>
  );
}
