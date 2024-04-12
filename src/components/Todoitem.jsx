export default function TodoItem({ item, todos, setTodos }) {
    function handleDelete(item){
       console.log("Delete button clicked for item", item) ;
       setTodos(todos.filter((todo) => todo !== item));
    }
    function handleClick(name){
    
        setTodos(todos.map((todo) => todo.name ===name? {...todo, done: !todo.done} : todo))
        
    }
    const classy = item.done ? "completed" : "";
    return (
      <div className="itemy">
        <div className="itemName">
            <span className={classy} onClick={() => handleClick(item.name)}>
            {item.name}
            </span>
            
            <span>
            <button onClick={() => handleDelete(item)} className="deleteButton">x</button>
        </span>
        
        </div>
        
        <hr className="line"/>
      </div>
    );
  }
  
