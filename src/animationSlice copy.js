import { createSlice } from '@reduxjs/toolkit'
export const animationSlice = createSlice({
name: 'animation',
initialState: {
 animationValue: "up",
},
reducers: {


}
})

// export const {pickDate}
// = animationSlice.actions
export const animationValue = (state)=> state.animation.animationValue
export default animationSlice.reducer
