import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { FiHome, FiSettings, FiPlus } from 'react-icons/fi'

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
`

const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavItem = styled.li<{ active?: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  a {
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme, active }) => active ? theme.colors.accent : theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
    
    svg {
      margin-right: ${({ theme }) => theme.spacing.sm};
    }
  }
`

const NewNoteButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.accent};
  }
  
  svg {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`

const Sidebar: React.FC = () => {
  const location = useLocation()
  
  return (
    <SidebarContainer>
      <Logo>和紙ノート</Logo>
      <NavList>
        <NavItem active={location.pathname === '/'}>
          <Link to="/">
            <FiHome />
            Home
          </Link>
        </NavItem>
        <NavItem active={location.pathname === '/settings'}>
          <Link to="/settings">
            <FiSettings />
            Settings
          </Link>
        </NavItem>
      </NavList>
      <NewNoteButton onClick={() => window.location.href = '/editor'}>
        <FiPlus />
        New Note
      </NewNoteButton>
    </SidebarContainer>
  )
}

export default Sidebar 