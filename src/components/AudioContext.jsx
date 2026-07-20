import React from 'react';

import soonMainMenu from '../assets/music/soon-main-menu.mp3';
import soonEnding from '../assets/music/soon-ending.mp3';
import streetSwipe from '../assets/music/street-swipe.mp3';
import birdBoxLobby from '../assets/music/birdbox-lobby.mp3';
import birdBoxBattle from '../assets/music/birdbox-battle.mp3';
import { select } from 'motion/react-client';

const AudioContext = React.createContext();

export function AudioProvider({children}) {
    const projectsPlaylist = [
        { 
            id: 'soon1', 
            title: 'Soon Main Menu',
            src: soonMainMenu,
         },
        { 
            id: 'soon2', 
            title: 'Soon Ending', 
            src: soonEnding,
        },
        { 
            id: 'ss', 
            title: 'Street Swipe', 
            src: streetSwipe,
        },
        { 
            id: 'bb1', 
            title: 'Birdbox Lobby', 
            src: birdBoxLobby,
        },
        { 
            id: 'bb2', 
            title: 'Birdbox Battle', 
            src: birdBoxBattle,
        },
    ]
    
    const [currentPlaylist, setCurrentPlaylist] = React.useState(projectsPlaylist);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const currentTrack = currentPlaylist[currentIndex];
    const [isSelected, setIsSelected] = React.useState(currentTrack.title);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [duration, setDuation] = React.useState(0);
    const [isShuffled, setIsShuffled] = React.useState(false);
    const audioRef = React.useRef(new Audio());
    const percentage = audioRef.current.duration > 0 ? (progress / audioRef.current.duration) * 100 : 0;

    // React.useEffect(() => {
    //     console.log(`currentTrack: ${currentTrack}`);
    // }, [currentTrack]);

    const handlePrev = () => {
        if (progress <= 2) {
            setCurrentIndex((prev) => (prev - 1 + currentPlaylist.length) % currentPlaylist.length);
        } else {
            seek(0);
        }
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % currentPlaylist.length);
    };
    
    const handleShuffle = () => {
        setIsShuffled(!isShuffled);
    };

    const handleSeekChange = (e) => {
        const newTime = Number(e.target.value);
        audioRef.current.currentTime = newTime;
        setProgress(newTime);
    }

    const handleSelect = () => {
        
    }

    // PLAY AND PAUSE
    React.useEffect(() => {
        audioRef.current.src = currentTrack.src;
    }, [currentTrack.src]);

    React.useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.play().catch(console.error);
            audioRef.current.loop = true;
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentTrack.src]);


    // SEEK BAR
    React.useEffect(() => {
        if (!audioRef.current) return;

        const handleTimeUpdate = () => {
            setProgress(audioRef.current.currentTime);
        };

        const handleSeeked = () => {
            setProgress(audioRef.current.currentTime);
        };

        const handleLoadedMetadata = () => {
            setDuation(audioRef.current.duration);
        };

        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.addEventListener('seeked', handleSeeked);
        audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.removeEventListener('seeked', handleSeeked);
            audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [currentTrack.src]);

    const seek = (percent) => {
        if (!audioRef.current) return;

        audioRef.current.currentTime = (percent / 100) * audioRef.current.duration;
    };

    // SHUFFLE 
    React.useEffect(() => {
        if (isShuffled) {
            const shuffledPlaylist = shuffle(projectsPlaylist);
            const playingTrack = currentTrack.title;
            // console.log(`playingTrack: ${playingTrack}`);

            setCurrentPlaylist(shuffledPlaylist);
            setCurrentIndex(shuffledPlaylist.findIndex(track => track.title === playingTrack));
        } else {
            setCurrentPlaylist(projectsPlaylist);
        }
    }, [isShuffled]);
    
    function shuffle(playlist) {
        const shuffled = [...playlist];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        };

        return shuffled;
    };

    function selectTrack(trackTitle) {
        const trackIndex = currentPlaylist.findIndex(track => track.title === trackTitle);

        setCurrentIndex(trackIndex);
    };

    React.useEffect(() => {
        setIsSelected(currentTrack.title);
    }, [currentTrack]);

    return (
        <AudioContext.Provider value={{ 
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
                isShuffled,
                handleShuffle,
                handleSeekChange,
                selectTrack,
            }}
        >
            {children}
        </AudioContext.Provider>
    )
}

export const useAudio = () => React.useContext(AudioContext);