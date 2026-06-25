import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import SearchBar  from './SearchBar.jsx'
import FilterBar from './FilterBar.jsx'
import PostCard from "./PostCard";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
