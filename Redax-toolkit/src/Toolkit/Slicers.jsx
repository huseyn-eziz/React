import { createSlice } from '@reduxjs/toolkit/dist'


const Slicers = createSlice({
    name: 'Sozsilmek',
    initialState: {
        value: 'Ali Muellim',
        sozunozu: 'Ali Muellim'
    },
    reducers: {
        Alisil: (state) => {
            state.value = state.value.slice(0, 3)
        },
        Muellimsil: (state) => {
            state.value = state.value.slice(3)
        },
        Sozeqayit: (state) => {
            state.value = state.sozunozu
        }
    }
})

export default Slicers
export const { Alisil, Muellimsil, Sozeqayit } = Slicers.actions