import React from 'react'
import './App.css'
import { ThemeProvider } from './components/Theme'
import TopPanel from './components/TopPanel'
import Dock from './components/Dock'
import ProfileDesktop from './components/ProfileDesktop'

import { IdCard } from "lucide-react";
import { FolderOpen } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { LibraryBig } from "lucide-react";
import { Lock } from "lucide-react";
import ProjectsDesktop from './components/ProjectsDesktop'

function App() {

  const desktops = [
    { name: 'about', icon: IdCard, isActive: false, isLocked: false },
    { name: 'projects', icon: FolderOpen, isActive: false, isLocked: false },
    { name: 'playground', icon: Gamepad2, isActive: false, isLocked: false },
    { name: 'documentations', icon: LibraryBig, isActive: false, isLocked: false },
    { name: 'locked', icon: Lock, isActive: false, isLocked: true}
  ];

  const desktopComponents = {
    about: <ProfileDesktop />,
    projects: <ProjectsDesktop />,
  }
  const [activeDesktop, setActiveDesktop] = React.useState('ProfileDesktop');

  return (
    <div className='app-container'>
      <ThemeProvider>
        <TopPanel />
        <div className='main'>
          <Dock 
            desktopList={desktops}
            activeDesktop={activeDesktop}
            setActiveDesktop={setActiveDesktop}
          />
          <div className='desktop-container'>
            {desktopComponents[activeDesktop] || <ProfileDesktop />}
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
