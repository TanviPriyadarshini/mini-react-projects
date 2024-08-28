import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import {ThemeProvider} from './contexts/useThemeContext'

const App = () => {
  return (
    <Router>
    <ThemeProvider>
      <Navbar/>
        <Routes>
          <Route element={<Home/>} path={'/'}/>
          <Route element={<About/>} path={'/about'}/>
          <Route element={<Blog/>} path={'/blog'}/>
        </Routes>
        </ThemeProvider>
    </Router>
  )
}

export default App