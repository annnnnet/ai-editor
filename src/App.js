import { useContext, useState } from 'react'
import { ThemeContext } from './contexts/theme'
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Crop from './components/Crop/Crop'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [mode, setMode] = useState('edit');

  const handleStartClick = () => {
    setMode('start');
  };

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main>
          {mode === 'edit' ? (
            <>
              <About />
              <Projects onStartClick={handleStartClick} />
              <Skills />
              <Contact />
            </>
          ) : (
            <>
              <Crop />
            </>
          )}
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>

  )
}

export default App
