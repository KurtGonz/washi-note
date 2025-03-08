import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
`

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  )
}

export default Layout 