import React from 'react';
import '../styles/ProjectsDesktop.css'
import { useSoundFX } from './useSoundFX';
import { motion, AnimatePresence } from 'motion/react';

import randrumIcon from '../assets/icons/randrum.png';
import soonIcon from '../assets/icons/soon.png';
import ubookIcon from '../assets/icons/ubook.png';
import streetSwipeIcon from '../assets/icons/street-swipe.png';
import birdboxIcon from '../assets/icons/birdbox.png';
import rhysleepIcon from '../assets/icons/rhysleep.png';
import { FileCode } from 'lucide-react';

import { XMarkIcon } from '@heroicons/react/24/outline';

import RandrumContents from '../components/project-components/Randrum.jsx'
import SoonContents from '../components/project-components/Soon.jsx'

export default function ProjectsDesktop() {

    const sounds = useSoundFX();

    const folderContents = {
        randrum: RandrumContents,
        soon: SoonContents,
        // ubook: UBookContents,
        // 'street-swipe': StreetSwipeContents,
        // birdbox: BirdboxContents,
        // rhysleep: RhysleepContents,
        // 'personal-website': PersonalWebsiteContents,
    };

    const folders = [
        { id: 1, name: 'randrum', type: 'app', iconType: 'img', icon: randrumIcon },
        { id: 2, name: 'soon', type: 'game', iconType: 'img', icon: soonIcon },
        { id: 3, name: 'ubook', type: 'app', iconType: 'img', icon: ubookIcon },
        { id: 4, name: 'street-swipe', type: 'game', iconType: 'img', icon: streetSwipeIcon },
        { id: 5, name: 'birdbox', type: 'game', iconType: 'img', icon: birdboxIcon },
        { id: 6, name: 'rhysleep', type: 'app', iconType: 'img', icon: rhysleepIcon },
        { id: 7, name: 'personal-website', type: 'web', iconType: 'code', icon: FileCode },
    ]

    const [openFolders, setOpenFolders] = React.useState([]);

    const openFolder = (folderName) => {
        if (!openFolders.includes(folderName)) {
            setOpenFolders((prev) => [...prev, folderName]);
            sounds.playClick();
        }
    };

    const closeFolder = (folderName) => {
        setOpenFolders((prev) => prev.filter((name) => name !== folderName));
    };

    const [infoPanelIsActive, setInfoPanelIsActive] = React.useState(true);
    const [logPanelIsActive, setLogPanelIsActvie] = React.useState(false);

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
                            openFolder(folder.name);
                        }}
                    >
                        {folder.iconType === 'img' ? (
                                <img src={folder.icon} alt={folder.icon}></img>
                            ) : (
                                <folder.icon className='folder-icon' size={56} strokeWidth={0.8} />
                            )
                        }
                        <p>{folder.name}</p>
                    </div>
                ))}
            </div>

            <div className='window-container'>
                {openFolders.map((folderName, index) => {
                    const SelectedContent = folderContents[folderName];

                    return (
                        <AnimatePresence>
                            <motion.div
                                className='window'
                                id={`${folderName}-window`}
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1}}
                                exit={{ opacity: 0, scale: 0 }}
                            >
                                <div className='window-title'>
                                    <p>{folderName}</p>
                                    <div className='window-btn-container'>
                                        <div 
                                            className='window-btn' 
                                            id='info-panel-btn'
                                            onClick={() => {
                                                setInfoPanelIsActive(!infoPanelIsActive);
                                                sounds.playClick();
                                            }}
                                        >
                                                <div className={`info-panel-fill ${infoPanelIsActive ? 'active' : ''}`}></div>
                                        </div>
                                        <div 
                                            className='window-btn' 
                                            id='log-panel-btn'
                                            onClick={() => {
                                                setLogPanelIsActvie(!logPanelIsActive);
                                                sounds.playClick();
                                            }}
                                        >
                                            <div className={`log-panel-fill ${logPanelIsActive ? 'active' : ''}`}></div>
                                        </div>
                                        <div
                                            className='window-btn'
                                            id="close-btn"
                                            onClick={() => {
                                            closeFolder(folderName);
                                            sounds.playClick();
                                            }}
                                        >
                                            <XMarkIcon width={14} height={14} strokeWidth={2} />
                                        </div>
                                    </div>
                                </div>
                                <div className='window-contents p-10'>
                                    <SelectedContent infoPanelIsActive={infoPanelIsActive} logPanelIsActive={logPanelIsActive} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )
                })}
            </div>

        </div>
    )
}