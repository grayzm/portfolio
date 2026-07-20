import React from 'react'
import './App.css'
import { ThemeProvider } from './components/Theme.jsx';
import { AudioProvider } from './components/AudioContext.jsx';
import TopPanel from './components/TopPanel.jsx';
import Dock from './components/Dock.jsx';

import { IdCard, BriefcaseBusiness, Gamepad2, LibraryBig, Lock } from "lucide-react";

import ProfileDesktop from './components/ProfileDesktop.jsx'
import ProjectsDesktop from './components/ProjectsDesktop.jsx'
import Locked from './components/Locked.jsx';
import UnderConstruction from './components/UnderConstruction.jsx'
import PlaygroundDesktop from './components/PlaygroundDesktop.jsx';

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
    playground: <PlaygroundDesktop />,
    locked: <Locked />,
  }
  const [activeDesktop, setActiveDesktop] = React.useState('about');

  return (
    <div className='app-container'>
      <ThemeProvider>
        <AudioProvider>
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
        </AudioProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
