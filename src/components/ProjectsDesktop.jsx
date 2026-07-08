import React from 'react';
import '../styles/ProjectsDesktop.css'
import { useSoundFX } from './useSoundFX';
import { AnimatePresence } from 'motion/react';

import randrumIcon from '../assets/icons/randrum.png';
import soonIcon from '../assets/icons/soon.png';
import ubookIcon from '../assets/icons/ubook.png';
import streetSwipeIcon from '../assets/icons/street-swipe2.png';
import birdboxIcon from '../assets/icons/birdbox.png';
import rhysleepIcon from '../assets/icons/rhysleep.png';
import { FileCode } from 'lucide-react';

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
        // 'personal-website': PersonalWebsiteContents,
    };

    const folders = [
        { 
            id: 1, 
            name: 'randrum', 
            type: 'app', 
            iconType: 'img', 
            icon: randrumIcon, 
        },
        { 
            id: 2, 
            name: 'soon', 
            type: 'game', 
            iconType: 'img', 
            icon: soonIcon, 
        },
        { 
            id: 3, 
            name: 'ubook', 
            type: 'app', 
            iconType: 'img', 
            icon: ubookIcon, 
        },
        { 
            id: 4, 
            name: 'street-swipe', 
            type: 'game', 
            iconType: 'img', 
            icon: streetSwipeIcon, 
        },
        { 
            id: 5, 
            name: 'birdbox', 
            type: 'game', 
            iconType: 'img', 
            icon: birdboxIcon, 
        },
        { 
            id: 6, 
            name: 'rhysleep', 
            type: 'app', 
            iconType: 'img', 
            icon: rhysleepIcon, 
        },
        // { id: 7, name: 'personal-website', type: 'web', iconType: 'code', icon: FileCode },
    ]

    const [openFolders, setOpenFolders] = React.useState([]);

    const openFolder = (folder) => {
        if (!openFolders.includes(folder.name)) {
            setOpenFolders((prev) => [...prev, folder]);
            sounds.playClick();
        }
    };

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
                    {openFolders.map(({ name, id }) => {
                        const SelectedContent = folderContents[name];

                        if (!SelectedContent) return null;

                        return (
                            <SelectedContent folderName={name} key={id} folderid={id} closeFolder={closeFolder}/>
                        )
                    })}
                </AnimatePresence>
            </div>

        </div>
    )
}