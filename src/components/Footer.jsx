export default function Footer({completedTodos, totalTodos}){
    return (
    <div className="footer">
        <span className="space">Completed Todos: {completedTodos}</span>
        <span className="space">Total Todos: {totalTodos}</span>
    </div>

    )
}