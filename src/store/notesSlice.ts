import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  tags: string[]
  isPinned: boolean
}

interface NotesState {
  notes: Note[]
  selectedNote: Note | null
  searchQuery: string
  selectedTags: string[]
}

const initialState: NotesState = {
  notes: [],
  selectedNote: null,
  searchQuery: '',
  selectedTags: [],
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload)
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex(note => note.id === action.payload.id)
      if (index !== -1) {
        state.notes[index] = action.payload
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload)
    },
    setSelectedNote: (state, action: PayloadAction<Note | null>) => {
      state.selectedNote = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    toggleTag: (state, action: PayloadAction<string>) => {
      const tagIndex = state.selectedTags.indexOf(action.payload)
      if (tagIndex === -1) {
        state.selectedTags.push(action.payload)
      } else {
        state.selectedTags.splice(tagIndex, 1)
      }
    },
    togglePinNote: (state, action: PayloadAction<string>) => {
      const note = state.notes.find(note => note.id === action.payload)
      if (note) {
        note.isPinned = !note.isPinned
      }
    },
  },
})

export const {
  addNote,
  updateNote,
  deleteNote,
  setSelectedNote,
  setSearchQuery,
  toggleTag,
  togglePinNote,
} = notesSlice.actions

export default notesSlice.reducer 