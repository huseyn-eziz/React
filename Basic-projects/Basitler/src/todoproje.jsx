import { useState } from 'react'

function Todoproje() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => todo.trim() !== '' && setTodos([...todos, todo], setTodo(''))}> ButtonAdd </button>

      {todos.map((todolar,index) => {
        return (

            <li key={index} > {todolar} </li>

        )

      })
      }
    </>
  )
}

export default Todoproje
