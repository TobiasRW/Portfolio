import './index.css'
import React, { useEffect } from 'react'
import FrontPage from './pages/FrontPage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'


function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the pathname changes
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/projekter" element={<ProjectPage />} />
        <Route path="/om-mig" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
