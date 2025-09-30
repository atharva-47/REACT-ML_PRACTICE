import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import authSlice from './authSlice'
import notesSlice from './notesSlice'
import { postsApi } from './postsApi'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    notes: notesSlice,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})