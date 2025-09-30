const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()
const PORT = 3000
const JWT_SECRET = 'secret123'

app.use(cors())
app.use(express.json())

const users = [
  { id: 1, username: 'admin', password: 'admin123', name: 'Admin' },
  { id: 2, username: 'user', password: 'user123', name: 'User' }
]

app.post('/login', (req, res) => {
  const { username, password } = req.body
  
  const user = users.find(u => u.username === username && u.password === password)
  
  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username, name: user.name }, JWT_SECRET, { expiresIn: '1h' })
    res.json({ token, user })
  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
})

app.get('/verify', (req, res) => {
  const token = req.headers.authorization
  
  if (!token) {
    return res.status(401).json({ error: 'No token' })
  }
  
  try {
    const user = jwt.verify(token, JWT_SECRET)
    res.json({ user })
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})