import { useState } from 'react'
import './App.css'

function Sekilproje() {
const [ click, setClick ] = useState("./images/qarisiq.jpeg")

const srcs = [ "./images/qarisiq.jpeg",
"./images/lule.jpeg",
"./images/tike.jpeg",
"./images/toyuq.jpeg"]


  return (
    <>
      <div className='img'>
        <div className="imgesas">
        <img src={click} alt="" />
        </div>
        <div className="imgs">
        { srcs.map((click,index) => 
          <img onClick={()=> setClick(click)} key={index} src={click} alt="" />
        )}

        </div>
      </div>
    </>
  )
}

export default Sekilproje
