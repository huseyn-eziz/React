import React from 'react'
import searchbutton from '../assets/bx-search.svg'

const Search = ({value,onChange,onSubmit}) => {
    return (
        <form className='w-full max-w-lg py-10 relative' onSubmit={onSubmit}>
            <input 
            onChange={onChange}
            value={value}
            type="text" 
            className='w-full pl-4 pr-14 py-3 rounded-xl outline-none text-zinc-800 focus:shadow-white shadow-sm' 
            placeholder='Search' />
            <button type='sumbit' className='absolute right-4 h-full w-8 flex items-center justify-center top-0'>
                <img src={searchbutton} alt="Search icon" className='w-7 pr-1' />
            </button>
        </form>
    )
}

export default Search