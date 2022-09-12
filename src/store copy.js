import { configureStore } from '@reduxjs/toolkit'
import animationSlice from './animationSlice'
import citySlice from './citySlice'
import dateSlice from './dateSlice'
import hourSlice from './hourSlice'


export default configureStore({
reducer: {
    city: citySlice,
    date: dateSlice,
    hour:hourSlice,
    animation:animationSlice
},

})
