import { useState } from 'react'

function App() {
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

      {todos.map((todolar) => {
        return (

          <ul>
            <li> {todolar} </li>
          </ul>

        )

      })
      }
    </>
  )
}

export default App
