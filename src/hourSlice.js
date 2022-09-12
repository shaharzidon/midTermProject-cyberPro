import { createSlice } from '@reduxjs/toolkit'
export const hourSlice = createSlice({
name: 'hour',
initialState: {
 hourValue: " choose time to kiak",
},
reducers: {

//  pickDate( state, dateChoise){
//     dateValue =state;
//     console.log(dateChoise)
 },

}
)

// export const {pickDate}
// = dateSlice.actions
export const hourValue = (state)=> state.hour.hourValue
export default hourSlice.reducer
