import React from 'react';
import '../styles/MusicPlayer.css';
import { useSoundFX } from './useSoundFX.jsx';
import { useAudio } from './AudioContext.jsx';

import { ListMusic, SkipBack, SkipForward, Play, Pause, Shuffle } from 'lucide-react';

export default function MusicPlayer() {
    const sounds = useSoundFX();
    const { currentTrack, duration, isPlaying, progress, percentage, handlePrev, togglePlay, handleNext } = useAudio();

    const containerRef = React.useRef(null);
    const textRef = React.useRef(null);
    const [isOverflowing, setIsOverflowing] = React.useState(false);

    const formatTime = (progress) => {
        if (isNaN(progress)) return '00:00';
        const mins = Math.floor(progress / 60);
        const secs = Math.floor(progress % 60);
        
        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const formatDuration = (duration) => {
        const mins = Math.floor(duration / 60);
        const secs = Math.floor(duration % 60);
        
        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

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
                    <p>{formatTime(progress)}</p>
                    <div className='slider-container'>
                        <hr className='timeline'></hr>
                        <div className='slider' style={{ left: `${percentage}%` }}></div>
                    </div>
                    <p>{formatDuration(duration)}</p>
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