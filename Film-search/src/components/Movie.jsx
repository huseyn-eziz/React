import React from 'react'

const Movie = ({ Title, Year, Poster }) => {
    return (
        <div className='my-8 group relative rounded-xl overflow-hidden hover:scale-105 transition-all duration-100 ease-in hover:shadow-2xl hover:shadow-[rgba(255,255,255,0.5)] '>

            <img src={Poster == "N/A" ? "https://fakeimg.pl/300x433?text=Poster&font=museo" : Poster}
                alt={Title}
            />
            <div className=' bg-gradient-to-r from-zinc-950 to-transparent py-4 px-2 absolute bottom-[-100%] group-hover:bottom-0 left-0 w-full transition-all ease-linear duration-100'>
                <h2 className='text-white text-lg font-semibold'>{Title}</h2>
                <p className='text-white text-lg font-thin'>Year: {Year}</p>
            </div>
        </div>
    )
}

export default Movie