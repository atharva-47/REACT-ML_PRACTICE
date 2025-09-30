import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, logout } from '../store/authSlice'

function Q2() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { user, token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  function handleLogin(e) {
    e.preventDefault()
    dispatch(loginUser({ username, password }))
  }

  if (user) {
    return (
      <div>
        <h2>Q2: JWT Login</h2>
        <p>Welcome {user.name}!</p>
        <p>JWT Token:</p>
        <textarea value={token} readOnly rows="3" cols="50" />
        <br />
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    )
  }

  return (
    <div>
      <h2>Q2: JWT Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>admin/admin123 or user/user123</p>
    </div>
  )
}

export default Q2