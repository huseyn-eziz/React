import { useDispatch, useSelector } from "react-redux"
import { Alisil, Muellimsil, Sozeqayit } from "./Toolkit/Slicers"

const button = {
  padding: '10px 20px',  
  backgroundColor: 'yellow', 
  color:'blue', 
  'border-radius': '10px'}


const App = () => {
  const sozsilmek = useSelector(soz => soz.sozsil.value)
  const dispatch = useDispatch()

  return (
    <div style={ {display : 'flex' , 'flex-direction' : 'column' ,  gap: '30px'}} >
      <h1 style={{textAlign:'center'}}>Soz : {sozsilmek}</h1>
      <div  style={ {display : 'flex', gap: '20px'}} className="buttons">
      <button style={button} onClick={() => dispatch(Alisil())}>jedsozunusil</button>
      <button style={button} onClick={() => dispatch(Muellimsil())}>academysozunusil </button>
      <button style={button} onClick={() => dispatch(Sozeqayit())}>Sozeqayit </button>
      </div>
    </div>
  )
}

export default App