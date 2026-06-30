import React from 'react';
import '../styles/TopPanel.css';
import { useTheme } from './Theme.jsx';

import { MoonIcon as MoonIconOutlined } from '@heroicons/react/24/outline';
import { SunIcon as SunIconOutlined } from '@heroicons/react/24/outline';
import { MoonIcon as MoonIconFilled } from '@heroicons/react/24/solid';
import { SunIcon as SunIconFilled } from '@heroicons/react/24/solid';

export default function TopPanel() {

    const {theme, toggleTheme, setTheme } = useTheme();
    const themeBtn = [
        { id: 1, label: 'dark' },
        { id: 2, label: 'light' },
    ];
    const [activeTheme, setActiveTheme] = React.useState(() => {
        return themeBtn.find(btn => btn.label === theme)?.id || 1;
    });

    const [currentTime, setCurrentTime] = React.useState(new Date());

    const weekday = currentTime.toLocaleString('en-US', { weekday: 'short' });


    const date = currentTime.toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
    });

    const time = currentTime.toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        
        return () => clearInterval(timer);
    }, []);

    const [settingIsOpened, setSettingIsOpened] = React.useState(false);

    return (
        <>
            <div className='top-panel'>
                <h2>Graice's space</h2>
                <div id='date-time'>
                    <h2>{weekday} {date}</h2>
                    <h2>{time}</h2>
                    <div 
                    id='settings'
                    onClick={() => setSettingIsOpened(!settingIsOpened)}
                    >
                        <i className="fa-solid fa-gear"></i>
                    </div>
                </div>
                {settingIsOpened && (
                    <div id='settings-window'>
                        <div className='window-title'>
                            <p>settings</p>
                        </div>
                        <div className='setting-contents'>
                            <div className='theme-container'>
                                <p>Theme</p>
                                <div className='theme-btn-container'>
                                    {themeBtn.map((btn) => {
                                        const activeBtn = activeTheme === btn.id;
                                    
                                        return (
                                            <div 
                                            className={`btn ${activeTheme === btn.id ? 'active' : ''}`} 
                                            id={`${btn.label}-btn`} 
                                            onClick={() => {
                                                setTheme(btn.label); 
                                                setActiveTheme(btn.id);
                                                }}>
                                                {btn.label === 'dark' ? (
                                                    activeBtn ? <MoonIconFilled width={14} height={14} /> : <MoonIconOutlined width={14} height={14} strokeWidth={2}/>
                                                    ) : (
                                                    activeBtn ? <SunIconFilled width={14} height={14} /> : <SunIconOutlined width={14} height={14} strokeWidth={2}/>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}