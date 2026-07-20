import React from 'react';
import '../styles/ProjectsDesktop.css'
import { useSoundFX } from './useSoundFX.jsx';
import { AnimatePresence } from 'motion/react';

import randrumIcon from '../assets/icons/randrum.png';
import soonIcon from '../assets/icons/soon.png';
import ubookIcon from '../assets/icons/ubook.png';
import streetSwipeIcon from '../assets/icons/street-swipe2.png';
import birdboxIcon from '../assets/icons/birdbox.png';
import rhysleepIcon from '../assets/icons/rhysleep.png';
import { FileCode, LucideVolumeOff, FolderClosed } from 'lucide-react';

import RandrumContents from '../components/project-components/Randrum.jsx';
import SoonContents from '../components/project-components/Soon.jsx';
import UBookContents from '../components/project-components/UBook.jsx';
import StreetSwipeContents from '../components/project-components/StreetSwipe.jsx';
import BirdboxContents from '../components/project-components/Birdbox.jsx';
import RhysleepContents from '../components/project-components/Rhysleep.jsx';

export default function ProjectsDesktop() {

    const sounds = useSoundFX();

    const folderContents = {
        randrum: RandrumContents,
        soon: SoonContents,
        ubook: UBookContents,
        'street-swipe': StreetSwipeContents,
        birdbox: BirdboxContents,
        rhysleep: RhysleepContents,
    };

    const folders = [
        { 
            id: 'randrum', 
            name: 'randrum', 
            type: 'app', 
            iconType: 'img', 
            icon: randrumIcon, 
            defaultPosition: { top: '3%', left: '5%' },
            defaultSize: { width: '80vw', height: '80vh' },
        },
        { 
            id: 'soon', 
            name: 'soon', 
            type: 'game', 
            iconType: 'img', 
            icon: soonIcon,
            defaultPosition: { top: '5%', left: '8%' },
            defaultSize: { width: '80vw', height: '80vh' },
        },
        { 
            id: 'ubook', 
            name: 'ubook', 
            type: 'app', 
            iconType: 'img', 
            icon: ubookIcon,
            defaultPosition: { top: '8%', left: '6%' },
            defaultSize: { width: '80vw', height: '80vh' },
        },
        { 
            id: 'streetswipe', 
            name: 'street-swipe', 
            type: 'game', 
            iconType: 'img', 
            icon: streetSwipeIcon, 
            defaultPosition: { top: '4%', left: '10%' },
            defaultSize: { width: '80vw', height: '80vh' },
        },
        { 
            id: 'birdbox', 
            name: 'birdbox', 
            type: 'game', 
            iconType: 'img', 
            icon: birdboxIcon, 
            defaultPosition: { top: '6%', left: '12%' },
            defaultSize: { width: '80vw', height: '80vh' },
        },
        { 
            id: 'rhysleep', 
            name: 'rhysleep', 
            type: 'app', 
            iconType: 'img', 
            icon: rhysleepIcon, 
            defaultPosition: { top: '7%', left: '9%' },
            defaultSize: { width: '80vw', height: '80vh' },
        },
        // { id: 7, name: 'personal-website', type: 'web', iconType: 'code', icon: FileCode },
    ]

    const [openFolders, setOpenFolders] = React.useState([]);

    const highestZIndex = React.useRef(5);

    const openFolder = (folder) => {
        highestZIndex.current += 1;
        
        setOpenFolders((prev) => {
            const isOpened = prev.some((f) => f.name === folder.name);

            if (!isOpened) {
                sounds.playClick();
                return [...prev, {...folder, zIndex: highestZIndex.current }];
            }

            return prev.map((f) =>
                f.name === folder.name
                    ? { ...f, zIndex: highestZIndex.current }
                    : f
            );
        });
    };

    const bringToFront = (folderName) => {
        highestZIndex.current += 1;
        setOpenFolders((prev) =>
            prev.map((folder) =>
                folder.name === folderName
                    ? { ...folder, zIndex: highestZIndex.current }
                    : folder
            )
        )
    }

    const closeFolder = (folderName) => {
        setOpenFolders((prev) => prev.filter((folder) => folder.name !== folderName));
    };

    React.useEffect(() => {
        console.log("State updated successfully:", openFolders);
    }, [openFolders]);

    return (
        <div className='projects-desktop'>
            <div className='folder-container'>
                {folders.map((folder) => (
                    <div 
                        className='hover-container'
                        key={folder.id}
                        onClick={() => {
                            openFolder(folder);
                        }}
                    >
                        <div className='flex flex-column' style={{ height: '56px', justifyContent: 'center' }}>
                            {folder.iconType === 'img' ? (
                                    <img src={folder.icon} alt={folder.icon}></img>
                                ) : (
                                    <folder.icon className='folder-icon' size={56} strokeWidth={0.8} />
                                )
                            }
                        </div>
                        <p>{folder.name}</p>
                    </div>
                ))}
            </div>

            <div className='window-container'>
                <AnimatePresence>
                    {openFolders.map((folder) => {
                        const SelectedContent = folderContents[folder.name];

                        if (!SelectedContent) return null;

                        return (
                            <SelectedContent 
                                key={folder.id} 
                                folderid={folder.id} 
                                folderName={folder.name} 
                                closeFolder={closeFolder}
                                defaultPosition={folder.defaultPosition}
                                defaultSize={folder.defaultSize}
                                localZIndex={folder.zIndex || 5}
                                bringToFront={() => bringToFront(folder.name)}
                            />
                        )
                    })}
                </AnimatePresence>
            </div>

        </div>
    )
}