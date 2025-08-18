import { useTheme } from './ThemeContext'

function App() {
  const { theme, toggleTheme } = useTheme()
  const styles = theme === 'dark'
    ? { background: '#111', color: '#eee', minHeight: '100vh', padding: 16 }
    : { background: '#fff', color: '#111', minHeight: '100vh', padding: 16 }

  return (
    <div style={styles}>
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>This is a simple theme toggler using useContext.</p>
    </div>
  )
}

export default App
