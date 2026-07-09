import { act } from "react";
import "../styles/Dock.css";
import { useSoundFX } from "./useSoundFX";

export default function Dock({ desktopList, activeDesktop, setActiveDesktop }) {
  const sounds = useSoundFX();

  const desktops = desktopList.filter(desktop => !desktop.isLocked);
  const lockedDesktop = desktopList.find(desktop => desktop.isLocked)
  const LockedIcon = lockedDesktop?.icon;

  return (
    <div className="dock">
      <div className="navigation-stack">
        {desktops.map((desktop, index) => {
            const isActive = activeDesktop === desktop.name;
            return (
                <div
                    className="nav"
                    key={index}
                    onClick={() => {
                        sounds.playClick();
                        setActiveDesktop(desktop.name);
                        console.log(`active desktop: ${activeDesktop}`);
                    }}
                >
                    <desktop.icon size={24} strokeWidth={1.3} />
                </div>
            )
        })}
      </div>
      {LockedIcon && (
        <div 
            className="nav" 
            onClick={() => {
                sounds.playClick();
                setActiveDesktop(lockedDesktop.name);
                console.log(`active desktop: ${activeDesktop}`);
            }}
        >
          <LockedIcon size={24} strokeWidth={1.3} />
        </div>
      )}
    </div>
  );
}
