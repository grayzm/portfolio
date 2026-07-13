import React from 'react';
import '../styles/MusicPlayer.css';

import { ListMusic } from 'lucide-react';
import { SkipBack } from 'lucide-react';
import { SkipForward } from 'lucide-react';
import { Play } from 'lucide-react';
import { Shuffle } from 'lucide-react';

import soonMainMenu from '../assets/music/soon-main-menu.mp3';
import soonEnding from '../assets/music/soon-ending.mp3';
import streetSwipe from '../assets/music/street-swipe.mp3';
import birdBoxLobby from '../assets/music/birdbox-lobby.mp3';
import birdBoxBattle from '../assets/music/birdbox-battle.mp3';

export default function MusicPlayer() {
    const projectsPlaylist = [
        { 
            id: 'soon1', 
            title: 'Soon Main Menu',
            src: soonMainMenu,
            duration: '2:13',
         },
        { 
            id: 'soon2', 
            title: 'Soon Ending', 
            src: soonEnding,
            duration: '2:18',
        },
        { 
            id: 'ss', 
            title: 'Street Swipe', 
            src: streetSwipe,
            duration: '2:47',
        },
        { 
            id: 'bb1', 
            title: 'Birdbox Lobby', 
            src: birdBoxLobby,
            duration: '1:06',
        },
        { 
            id: 'bb2', 
            title: 'Birdbox Battle', 
            src: birdBoxBattle,
            duration: '0:54',
        },
    ]
    
    const containerRef = React.useRef(null);
    const textRef = React.useRef(null);
    const [isOverflowing, setIsOverflowing] = React.useState(false);
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [isShuffled, setIsShuffled] = React.useState(false);
    
    const currentTrack = projectsPlaylist[currentIndex];

    React.useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current && textRef.current) {
                const hasOverflow = textRef.current.offsetWidth > containerRef.current.clientWidth;
                setIsOverflowing(hasOverflow);
            }
        };

        const timeoutId = setTimeout(checkOverflow, 50);
        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', checkOverflow)
        };
    }, [currentTrack.title]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projectsPlaylist.length);
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projectsPlaylist.length) % projectsPlaylist.length);
    }

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    }

    return (
        <>
            <div className='music-player'>
                <div className='music-title' ref={containerRef}>
                    <div className='flex full hidden just-c' style={{ padding: '0 2px' }}>
                        <div className={`ticker-content ${isOverflowing ? 'animate' : ''}`}>
                            <p ref={textRef}>{currentTrack.title}</p>
                            {isOverflowing && (
                                <p>{currentTrack.title}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className='progress-bar'>
                    <p>00.00</p>
                    <div className='slider-container'>
                        <hr className='timeline'></hr>
                        <div className='slider'></div>
                    </div>
                    <p>00.00</p>
                </div>
                <div className='button-container'>
                    <div className='music-btn'>
                        <Shuffle strokeWidth={1.8} style={{ width: '16px', height: '16px' }}/>
                    </div>
                    <div className='vertical-line'></div>
                    <div className='music-btn'>
                        <SkipBack strokeWidth={1.8} style={{ width: '16px', height: '16px' }}/>
                    </div>
                    <div className='vertical-line'></div>
                    <div 
                        className='music-btn'
                        onClick={() => {
                            togglePlay()
                        }}
                    >
                        <Play strokeWidth={1.8} style={{ width: '16px', height: '16px' }}/>
                    </div>
                    <div className='vertical-line'></div>
                    <div className='music-btn'>
                        <SkipForward strokeWidth={1.8} style={{ width: '16px', height: '16px' }}/>
                    </div>
                    <div className='vertical-line'></div>
                    <div className='music-btn'>
                        <ListMusic strokeWidth={1.8} style={{ width: '16px', height: '16px' }}/>
                    </div>
                </div>
            </div>
        </>
    )
}