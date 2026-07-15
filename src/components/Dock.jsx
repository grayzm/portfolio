import { act } from "react";
import "../styles/Dock.css";
import { useSoundFX } from "./useSoundFX.jsx";

export default function Dock({ desktopList, activeDesktop, setActiveDesktop }) {
  const sounds = useSoundFX();

  const desktops = desktopList.filter(desktop => !desktop.isLocked);
  const lockedDesktop = desktopList.find(desktop => desktop.name === 'locked');
  const LockedIcon = lockedDesktop?.icon;

  return (
    <div className="dock">
      <div className="navigation-stack">
        {desktops.map((desktop, index) => {
            const isActive = activeDesktop === desktop.name;
            return (
              <div key={index} className='flex g-6' style={{ alignItems: 'center' }}>
                <div
                    className={`nav ${isActive ? 'active' : ''}`}
                    key={index}
                    onClick={() => {
                        if (activeDesktop !== desktop.name) {
                          sounds.playTok();
                        }
                        setActiveDesktop(desktop.name);
                        console.log(`active desktop: ${activeDesktop}`);
                    }}
                >
                    <desktop.icon strokeWidth={1.3} style={{ width: '24px', height: '24px' }} />
                </div>
                <div className='hover-overlay'>
                  <p>{desktop.name}</p>
                </div>
              </div>
            )
        })}
      </div>
      {LockedIcon && (
        <div className='flex g-6' style={{ alignItems: 'center'}}>
          <div 
              className={`nav ${activeDesktop === 'locked' ? 'active' : ''}`} 
              onClick={() => {
                if (activeDesktop !== 'locked') {
                  sounds.playTok();
                }
                setActiveDesktop(lockedDesktop.name);
                console.log(`active desktop: ${activeDesktop}`);
              }}
          >
            <LockedIcon size={24} strokeWidth={1.3} />
          </div>
          <div className='hover-overlay'>
            <p>?</p>
          </div>
        </div>
      )}
    </div>
  );
}
