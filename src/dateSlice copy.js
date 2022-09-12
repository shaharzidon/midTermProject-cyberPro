import { createSlice } from '@reduxjs/toolkit'
export const dateSlice = createSlice({
name: 'date',
initialState: {
 dateValue: " no date was picked",
},
reducers: {

 pickDate( state, dateChoise){
    dateValue =state;
    console.log(dateChoise)
 },

}
})

export const {pickDate}
= dateSlice.actions
export const dateValue = (state)=> state.date.dateValue
export default dateSlice.reducer
