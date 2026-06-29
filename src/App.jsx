import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './components/Theme'
import TopPanel from './components/TopPanel'
import Dock from './components/Dock'
import ProfileDesktop from './components/ProfileDesktop'

function App() {

  return (
    <div className='app-container'>
      <ThemeProvider>
        <TopPanel />
        <div className='main'>
          <Dock />
          <div className='desktop-container'>
            <ProfileDesktop />
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
