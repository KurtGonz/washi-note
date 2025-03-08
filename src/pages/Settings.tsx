import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const SettingsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const StatsList = styled.ul`
  list-style: none;
  padding: 0;
`

const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`

const Settings: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes)
  
  const stats = {
    totalNotes: notes.length,
    pinnedNotes: notes.filter(note => note.isPinned).length,
    uniqueTags: [...new Set(notes.flatMap(note => note.tags))].length,
    lastUpdated: notes.length > 0 
      ? new Date(Math.max(...notes.map(note => new Date(note.updatedAt).getTime()))).toLocaleDateString()
      : 'No notes yet'
  }

  return (
    <SettingsContainer>
      <Title>Settings</Title>
      
      <Section>
        <SectionTitle>Statistics</SectionTitle>
        <StatsList>
          <StatItem>
            <span>Total Notes</span>
            <span>{stats.totalNotes}</span>
          </StatItem>
          <StatItem>
            <span>Pinned Notes</span>
            <span>{stats.pinnedNotes}</span>
          </StatItem>
          <StatItem>
            <span>Unique Tags</span>
            <span>{stats.uniqueTags}</span>
          </StatItem>
          <StatItem>
            <span>Last Updated</span>
            <span>{stats.lastUpdated}</span>
          </StatItem>
        </StatsList>
      </Section>

      <Section>
        <SectionTitle>About</SectionTitle>
        <p>和紙ノート (Washi Note) is a minimalist note-taking application inspired by traditional Japanese aesthetics.</p>
      </Section>
    </SettingsContainer>
  )
}

export default Settings 