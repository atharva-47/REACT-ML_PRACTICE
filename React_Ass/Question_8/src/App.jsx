import useInput from './hooks/useInput'

function App() {
  const validateEmail = (v) => (/.+@.+\..+/.test(v) ? '' : 'Invalid email')
  const email = useInput('', validateEmail)

  const onSubmit = (e) => {
    e.preventDefault()
    if (email.error) return
    alert(`Email: ${email.value}`)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="email" placeholder="you@example.com" value={email.value} onChange={email.onChange} />
      {email.error && <span style={{ color: 'red' }}>{email.error}</span>}
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
