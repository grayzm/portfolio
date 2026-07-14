import React from 'react';
import '../styles/MusicPlayer.css';
import { useSoundFX } from './useSoundFX.jsx';
import { useAudio } from './AudioContext.jsx';

import { ListMusic } from 'lucide-react';
import { SkipBack } from 'lucide-react';
import { SkipForward } from 'lucide-react';
import { Play } from 'lucide-react';
import { Pause } from 'lucide-react';
import { Shuffle } from 'lucide-react';

export default function MusicPlayer() {
    const sounds = useSoundFX();
    const { currentTrack, isPlaying, handlePrev, togglePlay, handleNext } = useAudio();

    const containerRef = React.useRef(null);
    const textRef = React.useRef(null);
    const [isOverflowing, setIsOverflowing] = React.useState(false);
    const [currentProgress, setCurrentProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
          setCurrentProgress(new Date());
        }, 60000);
    
        return () => clearInterval(timer);
      }, []);

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
                    <p>{currentTrack.duration}</p>
                </div>
                <div className='button-container'>
                    <div className='music-btn'>
                        <Shuffle strokeWidth={1.8} className='music-icons' />
                    </div>
                    <div className='vertical-line'></div>
                    <div 
                        className='music-btn'
                        onClick={() => {
                            handlePrev();
                            sounds.playTok();
                        }}
                    >
                        <SkipBack strokeWidth={1.8} className='music-icons' />
                    </div>
                    <div className='vertical-line'></div>
                    <div 
                        className='music-btn'
                        onClick={() => {
                            togglePlay();
                            sounds.playTok();
                        }}
                    >
                        {isPlaying ? (
                            <Pause strokeWidth={1.8} className='music-icons' />
                        ) : (
                            <Play strokeWidth={1.8} className='music-icons' />
                        )}
                    </div>
                    <div className='vertical-line'></div>
                    <div 
                        className='music-btn'
                        onClick={() => {
                            handleNext();
                            sounds.playTok();
                        }}
                    >
                        <SkipForward strokeWidth={1.8} className='music-icons' />
                    </div>
                    <div className='vertical-line'></div>
                    <div className='music-btn'>
                        <ListMusic strokeWidth={1.8} className='music-icons' />
                    </div>
                </div>
            </div>
        </>
    )
}