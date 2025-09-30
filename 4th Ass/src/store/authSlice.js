import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token')
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
    },
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    }
  }
})

export const { loginSuccess, logout } = authSlice.actions

export const loginUser = (data) => async (dispatch) => {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  
  const result = await response.json()
  if (response.ok) {
    dispatch(loginSuccess(result))
  }
}

export const checkToken = () => async (dispatch, getState) => {
  const token = getState().auth.token
  if (token) {
    const response = await fetch('http://localhost:3000/verify', {
      headers: { authorization: token }
    })
    const data = await response.json()
    if (data.user) {
      dispatch(loginSuccess({ user: data.user, token }))
    } else {
      dispatch(logout())
    }
  }
}

export default authSlice.reducer