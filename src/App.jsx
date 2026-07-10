import React from 'react'
import './App.css'
import { ThemeProvider } from './components/Theme'
import TopPanel from './components/TopPanel'
import Dock from './components/Dock'
import ProfileDesktop from './components/ProfileDesktop'

import { IdCard } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { LibraryBig } from "lucide-react";
import { Lock } from "lucide-react";
import ProjectsDesktop from './components/ProjectsDesktop'

function App() {

  const desktops = [
    { name: 'about', icon: IdCard, isLocked: false },
    { name: 'projects', icon: BriefcaseBusiness, isLocked: false },
    { name: 'playground', icon: Gamepad2, isLocked: false },
    { name: 'documentations', icon: LibraryBig, isLocked: false },
    { name: '?', icon: Lock, isLocked: true}
  ];

  const desktopComponents = {
    about: <ProfileDesktop />,
    projects: <ProjectsDesktop />,
  }
  const [activeDesktop, setActiveDesktop] = React.useState('about');

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
            {desktopComponents[activeDesktop] || <ProjectsDesktop />}
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
