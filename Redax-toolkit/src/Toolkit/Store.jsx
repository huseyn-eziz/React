import { configureStore } from '@reduxjs/toolkit'


const store =configureStore({
    
    reducer: {
      sayi : Slicers.reducer
    }

}
)
