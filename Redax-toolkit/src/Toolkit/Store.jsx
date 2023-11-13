import { configureStore } from "@reduxjs/toolkit/dist"
import Slicers from "./Slicers"

const Store = configureStore({
  reducer :  {
     sozsil: Slicers.reducer
  }
})


 

export default Store