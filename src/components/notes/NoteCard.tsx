import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FiPin, FiTrash2 } from 'react-icons/fi'
import { format } from 'date-fns'
import { togglePinNote, deleteNote } from '../../store/notesSlice'

interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  tags: string[]
  isPinned: boolean
}

interface NoteCardProps {
  note: Note
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
`

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`

const IconButton = styled.button<{ pinned?: boolean }>`
  color: ${({ theme, pinned }) => pinned ? theme.colors.accent : theme.colors.text};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: 4px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const Content = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.md} 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
`

const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 12px;
  font-size: 0.8rem;
`

const DateText = styled.span`
  color: ${({ theme }) => theme.colors.border};
  font-size: 0.8rem;
`

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handlePinClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(togglePinNote(note.id))
  }

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (window.confirm('Are you sure you want to delete this note?')) {
      dispatch(deleteNote(note.id))
    }
  }

  return (
    <Card onClick={() => navigate(`/editor/${note.id}`)}>
      <CardHeader>
        <Title>{note.title || 'Untitled'}</Title>
        <Actions>
          <IconButton
            pinned={note.isPinned}
            onClick={handlePinClick}
            title={note.isPinned ? 'Unpin note' : 'Pin note'}
          >
            <FiPin />
          </IconButton>
          <IconButton onClick={handleDeleteClick} title="Delete note">
            <FiTrash2 />
          </IconButton>
        </Actions>
      </CardHeader>
      <Content>{note.content}</Content>
      {note.tags.length > 0 && (
        <TagsContainer>
          {note.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      )}
      <DateText>
        Updated {format(new Date(note.updatedAt), 'MMM d, yyyy')}
      </DateText>
    </Card>
  )
}

export default NoteCard 