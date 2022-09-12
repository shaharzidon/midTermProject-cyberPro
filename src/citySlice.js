import { createSlice } from '@reduxjs/toolkit'
export const citySlice = createSlice({
name: 'city',
initialState: {
 value: " no city was picked",
},
reducers: {
 setTelAviv: (state) => {
 state.value ="תל אביב"
 },
 setHeifa: (state) => {
 state.value ="חיפה"
 },
 setTveria: (state) => {
 state.value ="כינרת"
 },
 setEylat: (state) => {
    state.value ="אילת"
    },
},
})

export const { setTelAviv, setHeifa, setTveria,setEylat}
= citySlice.actions
export const value = (state)=> state.city.value
export default citySlice.reducer
