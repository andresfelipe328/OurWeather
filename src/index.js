import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './static/style/style.css'
import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render (
  <StrictMode>
    <Router>
      <Routes>
        <Route path='*' element={<App/>}/>
      </Routes>
    </Router>
  </StrictMode>
)