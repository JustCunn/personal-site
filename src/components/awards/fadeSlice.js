import { createSlice } from '@reduxjs/toolkit'

export const fadeSlice = createSlice({
  name: 'fade',
  initialState: {
    value: false
  },
  reducers: {
    flip: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value
    },
  }
})

export const { flip } = fadeSlice.actions

export default fadeSlice.reducer