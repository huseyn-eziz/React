import { createSlice } from '@reduxjs/toolkit'


const Slicers = createSlice({
    name: 'sayi',
    initialState: 0,
    reducers:{
        artir: (reqem) => reqem + 1,
        azalt: (reqem) => reqem - 1
    }
})



export const { artir, azalt } = Slicers.actions ; 
export default Slicers.reducer ;