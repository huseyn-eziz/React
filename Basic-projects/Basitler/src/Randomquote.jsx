import axios from 'axios'
import React, { useState } from 'react'

const Randomquote = () => {

  const [quotes, setQuotes] = useState('')
  const getQuote = () => {
        fetch('http://type.fit/api/quotes').then((res)=>res.json()).then(( data ) => {
        let randomNum = Math.floor(Math.random()* data.length)
        setQuotes(data[randomNum])
      })
    }



  return (
    <>
      {quotes.text}
      <button onClick={getQuote}> Get Quotes</button></>

  )
}

export default Randomquote