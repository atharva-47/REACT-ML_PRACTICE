import { Link, Route, Routes, useParams } from 'react-router-dom'

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Contact = () => <h2>Contact</h2>

function User() {
  const { id } = useParams()
  return (
    <div>
      <h2>User</h2>
      <p>ID: {id}</p>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/123">User 123</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  )
}
