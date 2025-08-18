import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    console.log('email:', e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    console.log('password:', e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted values =>', { email, password })
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320 }}>
      <h2>Login</h2>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="you@example.com" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="••••••" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
