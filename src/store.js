import { configureStore } from '@reduxjs/toolkit'
import fadeReducer from './components/awards/fadeSlice';

export default configureStore({
  reducer: {
    fade: fadeReducer
  }
})