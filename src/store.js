import { configureStore } from '@reduxjs/toolkit'
import weatherAppSliceReducer from './weatherAppSlice'
// import the needed slices
export const store = configureStore({
  reducer: (
      
      {weather:weatherAppSliceReducer}
    )
  },
)