import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Editor from './pages/Editor'
import Settings from './pages/Settings'

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`

function App() {
  return (
    <AppContainer>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:id?" element={<Editor />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </AppContainer>
  )
}

export default App 