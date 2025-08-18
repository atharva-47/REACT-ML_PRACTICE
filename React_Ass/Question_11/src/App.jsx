function App() {
  const handleClick = (e) => {
    console.log('Single click:', {
      type: e.type,
      timeStamp: e.timeStamp,
      clientX: e.clientX,
      clientY: e.clientY,
    })
  }

  const handleDoubleClick = (e) => {
    console.log('Double click:', {
      type: e.type,
      detail: e.detail,
      timeStamp: e.timeStamp,
    })
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Synthetic Events: Click vs Double-Click</h2>
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        Click or Double-Click me
      </button>
      <p>Open the browser console to see different logs.</p>
    </div>
  )
}

export default App
