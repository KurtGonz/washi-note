import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import NoteCard from '../components/notes/NoteCard'

const HomeContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
`

const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
`

const Home: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes)
  const searchQuery = useSelector((state: RootState) => state.notes.searchQuery)
  const selectedTags = useSelector((state: RootState) => state.notes.selectedTags)

  const filteredNotes = notes
    .filter(note => 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(note => 
      selectedTags.length === 0 || 
      note.tags.some(tag => selectedTags.includes(tag))
    )
    .sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1
      if (!a.isPinned && b.isPinned) return 1
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    })

  return (
    <HomeContainer>
      <Header>
        <Title>My Notes</Title>
      </Header>
      {filteredNotes.length > 0 ? (
        <NotesGrid>
          {filteredNotes.map(note => (
            <NoteCard key={note.id} note={note} />
          ))}
        </NotesGrid>
      ) : (
        <EmptyState>
          <h2>No notes found</h2>
          <p>Create a new note to get started!</p>
        </EmptyState>
      )}
    </HomeContainer>
  )
}

export default Home 