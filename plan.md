# 和紙ノート (Washi Note) - Retro Japanese Style Note-Taking App

## Project Overview
A minimalist note-taking application inspired by traditional Japanese aesthetics, featuring a retro design that incorporates elements of washi paper, traditional patterns, and zen simplicity.

## Design Elements
### Color Palette
- Primary: Cream/Off-white (#F7F1E5) - Resembling washi paper
- Secondary: Deep Indigo (#2C4058) - Traditional Japanese indigo
- Accent: Vermillion Red (#D64F45) - For important elements
- Text: Charcoal (#333333) - For readability
- Borders: Soft Gray (#8B8178) - For subtle separations

### Typography
- Headings: "Yuji Syuku" - A Japanese font for titles
- Body: "M PLUS 1" - For better readability
- Fallback: sans-serif

### Visual Elements
- Washi paper texture background
- Traditional patterns (Seigaiha, Asanoha) as subtle decorative elements
- Ink brush stroke effects for highlights
- Wooden texture elements for UI components

## Features
### Core Functionality
1. Note Creation and Management
   - Create new notes
   - Edit existing notes
   - Delete notes
   - Pin important notes
   - Search functionality

2. Note Organization
   - Categories/Tags system
   - Date-based sorting
   - Favorites section

3. Rich Text Features
   - Basic text formatting (bold, italic)
   - Bullet points and numbered lists
   - Code blocks
   - Image insertion

### UI Components
1. Sidebar
   - Navigation menu
   - Category list
   - Recent notes
   - Traditional paper scroll design

2. Main Content Area
   - Notes grid/list view
   - Washi paper background
   - Subtle drop shadows

3. Note Editor
   - Minimalist toolbar
   - Distraction-free writing mode
   - Auto-save functionality

## Technical Stack
### Frontend
- React 18
- TypeScript
- Styled-components for styling
- React Router for navigation
- Redux Toolkit for state management

### Dependencies
- `@fontsource/yuji-syuku` - Japanese font
- `@fontsource/m-plus-1` - Body text font
- `react-icons` - For UI icons
- `react-markdown` - For markdown support
- `date-fns` - For date handling

## Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── notes/
│   │   ├── NoteCard.tsx
│   │   ├── NoteEditor.tsx
│   │   └── NoteList.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Icons.tsx
├── pages/
│   ├── Home.tsx
│   ├── Editor.tsx
│   └── Settings.tsx
├── styles/
│   ├── theme.ts
│   ├── GlobalStyles.ts
│   └── components/
├── store/
│   ├── notesSlice.ts
│   └── store.ts
└── utils/
    ├── localStorage.ts
    └── helpers.ts
```

## Implementation Phases
### Phase 1: Setup & Basic Structure
1. Initialize React project with TypeScript
2. Set up project structure
3. Install necessary dependencies
4. Create basic layout components
5. Implement global styles and theme

### Phase 2: Core Features
1. Implement note creation and storage
2. Create note editor component
3. Add note list view
4. Implement basic CRUD operations
5. Set up local storage

### Phase 3: UI & Styling
1. Add Japanese-style design elements
2. Implement responsive layout
3. Create custom UI components
4. Add animations and transitions
5. Implement dark/light theme

### Phase 4: Advanced Features
1. Add search functionality
2. Implement categories/tags
3. Add rich text features
4. Create settings page
5. Add keyboard shortcuts

### Phase 5: Polish & Optimization
1. Performance optimization
2. Error handling
3. Loading states
4. Browser testing
5. Final styling adjustments

## Future Enhancements
- Cloud sync functionality
- Export/Import notes
- Collaborative editing
- Custom themes
- Mobile app version

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build` 