# AI Agent Instructions for Portfolio Website Project

## Project Overview
This is a React-based portfolio website built with Vite. The project follows a component-based architecture with a focus on responsive design and modern React practices.

## Key Technologies & Dependencies
- React 19.x with Vite build tool
- React Router DOM for navigation
- React Icons for UI elements
- CSS modules for styling
- ESLint for code quality

## Project Structure
```
src/
├── components/    # Reusable UI components
├── pages/        # Route-based page components
├── Styles/       # CSS modules for styling
└── assets/       # Static assets
```

## Architecture Patterns
1. **Component Organization**
   - Presentational components in `components/`
   - Page components in `pages/`
   - Each component has a corresponding CSS file in `Styles/`

2. **Navigation**
   - Responsive navbar implementation in `Nav.jsx`
   - Uses React Router for client-side routing
   - Mobile-friendly hamburger menu with state management

3. **Styling Conventions**
   - CSS files follow component naming (e.g., `Nav.css` for `Nav.jsx`)
   - Mobile-first responsive design with media queries
   - CSS classes use kebab-case naming (e.g., `navbar-main`, `nav-ultag`)

## Development Workflow
1. **Running the Project**
   ```bash
   npm run dev     # Start development server
   npm run build   # Build for production
   npm run preview # Preview production build
   ```

2. **Code Style**
   - ESLint enforces code quality
   - React hooks for state management
   - Functional components with hooks preferred over class components

## Common Patterns
1. **Component Structure**
   ```jsx
   import React, { useState } from 'react';
   import '../Styles/ComponentName.css';
   
   export default function ComponentName() {
     // State hooks at the top
     const [state, setState] = useState(initialValue);
     
     // Event handlers as named functions
     const handleEvent = () => {
       // Logic here
     };
     
     return (
       // JSX with className following CSS naming convention
     );
   }
   ```

2. **Responsive Design**
   - Breakpoint at 768px for mobile layouts
   - Use flexbox for layouts
   - CSS variables for consistent theming

## Integration Points
- React Router for navigation state
- React Icons for UI elements
- Vite's dev server for HMR (Hot Module Replacement)

## Known Conventions
- Component files use `.jsx` extension
- Style files use `.css` extension
- Page components automatically map to routes
- Icons are imported from react-icons library

## Documentation & Resources
- Vite configuration in `vite.config.js`
- ESLint configuration in `eslint.config.js`
- Package dependencies in `package.json`