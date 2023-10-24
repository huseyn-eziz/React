import Todo from "./Todo"

const Todolist = ({todos,setTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo)=>(
                    <Todo 
                    text={todo.text}
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                    />

                ))


                }
            </ul>
        </div>
    )
}

export default Todolist
