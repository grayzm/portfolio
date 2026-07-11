import React from 'react'
import './App.css'
import { ThemeProvider } from './components/Theme.jsx';
import TopPanel from './components/TopPanel.jsx';
import Dock from './components/Dock.jsx';

import { IdCard } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { LibraryBig } from "lucide-react";
import { Lock } from "lucide-react";

import ProfileDesktop from './components/ProfileDesktop.jsx'
import ProjectsDesktop from './components/ProjectsDesktop.jsx'
import Locked from './components/Locked.jsx';
import UnderConstruction from './components/UnderConstruction.jsx'

function App() {

  const desktops = [
    { name: 'about', icon: IdCard, isLocked: false },
    { name: 'projects', icon: BriefcaseBusiness, isLocked: false },
    { name: 'playground', icon: Gamepad2, isLocked: false },
    { name: 'documentations', icon: LibraryBig, isLocked: false },
    { name: 'locked', icon: Lock, isLocked: true}
  ];

  const desktopComponents = {
    about: <ProfileDesktop />,
    projects: <ProjectsDesktop />,
    locked: <Locked />,
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
            {desktopComponents[activeDesktop] || <UnderConstruction />}
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
