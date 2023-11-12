import { useState } from 'react'
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  const [inputText, setInputText] = useState("")
  const [ todos, setTodos ] = useState([])


  return (
    <>
      <div className="App">
        <header>
          <h1>Aziz's todo list</h1>
        </header>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <Todolist 
        todos={todos}
        setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App
