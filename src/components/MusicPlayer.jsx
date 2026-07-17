import React from 'react';
import '../styles/MusicPlayer.css';
import { useSoundFX } from './useSoundFX.jsx';
import { useAudio } from './AudioContext.jsx';
import { useTheme } from './Theme.jsx';

import { ListMusic, SkipBack, SkipForward, Play, Pause, Shuffle, AudioLines, ChevronRight } from 'lucide-react';
import { PlayIcon } from '@heroicons/react/24/solid';

import animationBlack from '../assets/pixel/music-black.gif';
import animationWhite from '../assets/pixel/music-white.gif';

export default function MusicPlayer() {
    const sounds = useSoundFX();
    const { theme } = useTheme();

    const { 
        currentPlaylist,
        currentTrack, 
        isSelected,
        duration, 
        isPlaying, 
        progress, 
        percentage, 
        handlePrev, 
        togglePlay, 
        handleNext,
        handleShuffle,
        isShuffled,
        handleSeekChange,
     } = useAudio();

    const containerRef = React.useRef(null);
    const textRef = React.useRef(null);
    const [isOverflowing, setIsOverflowing] = React.useState(false);
    const [playListIsOpened, setPlaylistIsOpened] = React.useState(false);

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
                    {!playListIsOpened && (
                        <div className='music-gif' style={{ backgroundImage: `url(${theme === 'dark' ? animationWhite : animationBlack})`}}></div>
                    )}
                    {playListIsOpened && (
                        <div className='flex-column hidden' style={{ width: '100%', height: '120px' }}>
                            <div className='scroll-container flex-column'>
                                {currentPlaylist.map((track) => (
                                    <div 
                                        className={`playlist-title ${isSelected === track.title ? 'selected' : ''}`}
                                    >
                                        <div className={`ticker-content ${isOverflowing ? 'animate' : ''}`}>
                                            <p ref={textRef}>{track.title}</p>
                                            {isOverflowing && (
                                                <p>{track.title}</p>
                                            )}
                                        </div>
                                        {/* {isSelected === track.title ? (
                                            <AudioLines strokeWidth={1.8} size={13}/>)
                                            : ( <PlayIcon width={14} height={14} style={{ cursor: 'pointer' }}/> )
                                        } */}
                                        <ChevronRight strokeWidth={1.8} size={13} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className='music-title' ref={containerRef}>
                    <div className='flex full hidden just-c' style={{ padding: '0 2px' }}>
                        <div className={`ticker-content ${isOverflowing ? 'animate' : 'center'}`}>
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
                        {/* <hr className='timeline'></hr>
                        <div className='slider' style={{ left: `${percentage}%` }}></div> */}
                        <input
                            type='range'
                            className='input-range'
                            min='0'
                            max={duration || 100}
                            value={progress}
                            onChange={handleSeekChange}
                            style={{ flexGrow: 1, cursor: "pointer" }}
                        />
                    </div>
                    <p>{formatDuration(duration)}</p>
                </div>

                <div className='button-container'>
                    <div 
                        className='music-btn'
                        onMouseDown={() => {
                            setPlaylistIsOpened(!playListIsOpened);
                            sounds.playType();
                        }}
                    >
                        <ListMusic strokeWidth={1.8} className='music-icons' />
                    </div>
                    <div className='vertical-line'></div>
                    <div 
                        className='music-btn'
                        onMouseDown={() => {
                            handlePrev();
                            sounds.playType();
                        }}
                    >
                        <SkipBack strokeWidth={1.8} className='music-icons' />
                    </div>
                    <div className='vertical-line'></div>
                    <div 
                        className='music-btn'
                        onMouseDown={() => {
                            togglePlay();
                            sounds.playType();
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
                        onMouseDown={() => {
                            handleNext();
                            sounds.playType();
                        }}
                    >
                        <SkipForward strokeWidth={1.8} className='music-icons' />
                    </div>
                    <div className='vertical-line'></div>
                    <div 
                        className='music-btn'
                        style={{ color: `${!isShuffled ? 'color-mix(in srgb, var(--text) 40%, transparent)' : 'var(--text)'}` }}
                        onMouseDown={() => {
                            handleShuffle();
                            sounds.playType();
                        }}
                    >
                        <Shuffle strokeWidth={1.8} className='music-icons' />
                    </div>
                </div>

            </div>
        </>
    )
}