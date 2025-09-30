import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNote, deleteNote, toggleComplete } from '../store/notesSlice'

function Q3() {
  const [title, setTitle] = useState('')
  const notes = useSelector((state) => state.notes.notes)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    if (title) {
      dispatch(addNote({ title, content: '' }))
      setTitle('')
    }
  }

  return (
    <div>
      <h2>Q3: Notes (Redux Toolkit)</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {notes.map(note => (
        <div key={note.id} className="note">
          <p style={{ textDecoration: note.completed ? 'line-through' : 'none' }}>
            {note.title}
          </p>
          <button onClick={() => dispatch(toggleComplete(note.id))}>
            {note.completed ? 'Undo' : 'Done'}
          </button>
          <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Q3