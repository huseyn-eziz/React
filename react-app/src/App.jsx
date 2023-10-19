import axios from "axios";
import { useEffect, useState } from "react"


function App() {

  const url="...//"
  const [ users, setUsers ] = useState([])

useEffect(() => { 
  axios.get(url).then(({data})=> {
    setUsers(data)
  })
 },[]);


  return (
    <>
        {users.map(({id,name,surname})=>{
          return (
            <div key={id}>
            {name}
            {surname}
            </div>
            );
        }
      )}
    </>
  )
}

export default App
