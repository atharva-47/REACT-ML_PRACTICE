import { createSlice } from '@reduxjs/toolkit'

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: []
  },
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: Date.now(),
        title: action.payload.title,
        content: action.payload.content,
        completed: false
      }
      state.notes.push(newNote)
    },
    deleteNote: (state, action) => {
      const id = action.payload
      state.notes = state.notes.filter(note => note.id !== id)
    },
    toggleComplete: (state, action) => {
      const id = action.payload
      for (let i = 0; i < state.notes.length; i++) {
        if (state.notes[i].id === id) {
          state.notes[i].completed = !state.notes[i].completed
          break
        }
      }
    }
  }
})

export const { addNote, deleteNote, toggleComplete } = notesSlice.actions
export default notesSlice.reducer