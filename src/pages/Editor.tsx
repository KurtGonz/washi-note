import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FiSave, FiTag, FiX } from 'react-icons/fi'
import { RootState } from '../store/store'
import { addNote, updateNote } from '../store/notesSlice'

const EditorContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const TitleInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  background-color: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

const ContentTextarea = styled.textarea`
  width: 100%;
  min-height: 500px;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: transparent;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  resize: vertical;
  line-height: 1.6;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.md} 0;
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 12px;
  font-size: 0.9rem;

  button {
    margin-left: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.primary};
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`

const TagInput = styled.input`
  border: none;
  padding: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  width: 120px;

  &:focus {
    outline: none;
  }
`

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

const Editor: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const notes = useSelector((state: RootState) => state.notes.notes)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')

  useEffect(() => {
    if (id) {
      const note = notes.find(n => n.id === id)
      if (note) {
        setTitle(note.title)
        setContent(note.content)
        setTags(note.tags)
      }
    }
  }, [id, notes])

  const handleSave = () => {
    const note = {
      id: id || Date.now().toString(),
      title,
      content,
      tags,
      createdAt: id ? notes.find(n => n.id === id)?.createdAt || new Date().toISOString() : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isPinned: id ? notes.find(n => n.id === id)?.isPinned || false : false,
    }

    if (id) {
      dispatch(updateNote(note))
    } else {
      dispatch(addNote(note))
    }
    navigate('/')
  }

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <EditorContainer>
      <EditorHeader>
        <h1>{id ? 'Edit Note' : 'New Note'}</h1>
        <SaveButton onClick={handleSave}>
          <FiSave />
          Save
        </SaveButton>
      </EditorHeader>
      <TitleInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
      />
      <TagsContainer>
        {tags.map(tag => (
          <Tag key={tag}>
            <FiTag />
            {tag}
            <button onClick={() => handleRemoveTag(tag)}>
              <FiX />
            </button>
          </Tag>
        ))}
        <TagInput
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={handleAddTag}
          placeholder="Add tag..."
        />
      </TagsContainer>
      <ContentTextarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing..."
      />
    </EditorContainer>
  )
}

export default Editor 