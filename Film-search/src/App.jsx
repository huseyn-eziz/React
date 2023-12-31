import { useState } from "react"
import Search from "./components/Search"
import axios from "axios"
import Movie from "./components/Movie"

function setUrl(kinoadi) {
  return `https://omdbapi.com/?s=${kinoadi}&apikey=d0049fb9`
}



function App() {
  const [search, setSearch] = useState('')
  const [kinolar, setKinolar] = useState([])



  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(setUrl(search)).then(({ data }) => setKinolar(data?.Search ?? []))

  }

  return (
    <div className="flex h-full w-full items-center justify-center flex-col">

      <Search value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSubmit}
      />
      {kinolar.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4">
         { kinolar.map( (movie, key) => <Movie key={key} {...movie} /> ) }

      </div> : <p className="text-white py-6 text-lg "> Movie not found! </p>}

    </div>
  )
}

export default App
