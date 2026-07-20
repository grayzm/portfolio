import React from "react";
import "../styles/TopPanel.css";
import { useTheme } from "./Theme.jsx";
import { useSoundFX } from "./useSoundFX.jsx";
import { useClickOutside } from "./useClickOutside.js";
import MusicPlayer from "./MusicPlayer.jsx";

import { Disc, Disc3 } from 'lucide-react';
import { MoonIcon as MoonIconOutlined } from "@heroicons/react/24/outline";
import { SunIcon as SunIconOutlined } from "@heroicons/react/24/outline";
import { MoonIcon as MoonIconFilled } from "@heroicons/react/24/solid";
import { SunIcon as SunIconFilled } from "@heroicons/react/24/solid";

export default function TopPanel() {
  const sounds = useSoundFX();
  const { theme, toggleTheme, setTheme } = useTheme();

  const windowRef = React.useRef(null);

  const themeBtn = [
    { id: 1, label: "dark" },
    { id: 2, label: "light" },
  ];
  const [activeTheme, setActiveTheme] = React.useState(() => {
    return themeBtn.find((btn) => btn.label === theme)?.id || 1;
  });

  const [currentTime, setCurrentTime] = React.useState(new Date());
  const weekday = currentTime.toLocaleString("en-US", { weekday: "short" });
  const date = currentTime.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
  });
  const time = currentTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const [activeWindow, setActiveWindow] = React.useState([]);

  useClickOutside(windowRef, () => {
    setActiveWindow((prev) => prev.filter((window) => window !== 'settings'));
  });

  React.useEffect(() => {
    console.log(`activeWindow: ${activeWindow}`);
  }, [activeWindow]);

  return (
    <>
        <div className="top-panel">
            <h2>Graicella Michelle S</h2>
            <div id="date-time">
                <div className={`panel-btn-container ${activeWindow.includes('music') ? 'active' : ''}`}
                    onMouseDown={(e) => {
                        e.stopPropagation();
                        setActiveWindow((prev) => 
                            prev.includes('music')
                            ? prev.filter((window) => window !== 'music')
                            : [...prev, 'music']
                        );
                        sounds.playClick();
                    }}
                > 
                    <i className="fa-solid fa-compact-disc" style={{ fontSize: '14px' }}></i>
                </div>
                <h2>{weekday} {date}</h2>
                <h2>{time}</h2>
                <div
                    id='settings'
                    className={`panel-btn-container ${activeWindow.includes('settings') ? 'active' : ''}`}
                    onMouseDown={(e) => {
                        e.stopPropagation();
                        setActiveWindow((prev) => 
                            prev.includes('settings')
                            ? prev.filter((window) => window !== 'settings')
                            : [...prev, 'settings']
                        );
                        sounds.playClick();
                    }}
                > 
                    <i className="fa-solid fa-gear" style={{ fontSize: '14px' }}></i>
                </div>
            </div>

            {(activeWindow.includes('music')) && (
                <div className='music-player-wrapper'>
                    <MusicPlayer />
                </div>
            )}

            {(activeWindow.includes('settings')) && (
                <div id="settings-window" ref={windowRef}>
                    <div className="window-title">
                    <p>settings</p>
                    </div>
                    <div className="setting-contents">
                        <div className="theme-container">
                            <p>Theme</p>
                            <div className="theme-btn-container">
                                {themeBtn.map((btn) => {
                                    const activeBtn = activeTheme === btn.id;

                                    return (
                                    <div
                                        className={`theme-btn ${activeTheme === btn.id ? "active" : ""}`}
                                        key={`${btn.label}-btn`}
                                        onClick={() => {
                                            if (!activeBtn) {
                                                setTheme(btn.label);
                                                setActiveTheme(btn.id);
                                                sounds.playSwitch();
                                                console.log(`current theme: ${theme}`)
                                            }
                                        }}
                                    >
                                        {btn.label === "dark" ? (
                                        activeBtn ? (
                                            <MoonIconFilled width={14} height={14} />
                                        ) : (
                                            <MoonIconOutlined
                                            width={14}
                                            height={14}
                                            strokeWidth={2}
                                            />
                                        )
                                        ) : activeBtn ? (
                                        <SunIconFilled width={14} height={14} />
                                        ) : (
                                        <SunIconOutlined
                                            width={14}
                                            height={14}
                                            strokeWidth={2}
                                        />
                                        )}
                                    </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
  );
}
