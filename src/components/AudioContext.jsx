import React from 'react';

import soonMainMenu from '../assets/music/soon-main-menu.mp3';
import soonEnding from '../assets/music/soon-ending.mp3';
import streetSwipe from '../assets/music/street-swipe.mp3';
import birdBoxLobby from '../assets/music/birdbox-lobby.mp3';
import birdBoxBattle from '../assets/music/birdbox-battle.mp3';
import { audio } from 'motion/react-client';

const AudioContext = React.createContext();

export function AudioProvider({children}) {
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
    
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [isShuffled, setIsShuffled] = React.useState(false);
    
    const currentTrack = projectsPlaylist[currentIndex];

    React.useEffect(() => {
        console.log(currentTrack);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projectsPlaylist.length);
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projectsPlaylist.length) % projectsPlaylist.length);
    }

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    }

    const audioRef = React.useRef(new Audio(currentTrack.src));

    React.useEffect(() => {
        if (audioRef.current.src !== currentTrack.src) {
            audioRef.current.src = currentTrack.src;
            audioRef.current.loop = true;

            if (isPlaying) audioRef.current.play().catch(e => console.log(e));
        }

        if (isPlaying) {
            audioRef.current.play().catch(e => console.log(e));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentTrack.src]);

    React.useEffect(() => {
        return () => {
            audioRef.current.pause();
        };
    }, []);

    return (
        <AudioContext.Provider value={{ currentTrack, isPlaying, handlePrev, togglePlay, handleNext}}>
            {children}
        </AudioContext.Provider>
    )
}

export const useAudio = () => React.useContext(AudioContext);