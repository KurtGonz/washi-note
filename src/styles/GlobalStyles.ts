import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    background-color: ${theme.colors.primary};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacing.md};
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  button {
    font-family: ${theme.fonts.body};
    cursor: pointer;
    border: none;
    background: none;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  input, textarea {
    font-family: ${theme.fonts.body};
    border: 1px solid ${theme.colors.border};
    border-radius: 4px;
    padding: ${theme.spacing.sm};
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.secondary};
    }
  }
` 