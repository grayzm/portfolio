import React from 'react';
import { useSoundFX } from './useSoundFX.jsx';
import { motion, AnimatePresence } from 'motion/react';
import Window from '../components/Window.jsx';

import { FileCode, FolderClosed } from 'lucide-react';
import daduckIcon from '../assets/icons/daduck-icon.png';

export default function PlaygroundDesktop() {
    const sounds = useSoundFX();

    const projects = [
        {
            id: 'dd',
            name: 'da-duck',
            src: 'https://grayzm.github.io/Da-duck/',
            title: 'Da-duck word guess game',
            iconType: 'img',
            icon: daduckIcon,
            defaultPosition: { top: '8%', left: '6%' },
            defaultSize: { width: 'fit-content', height: 'fit-content' },
        },
    ];

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
        <div className='playground-desktop'>
            <div className='folder-container'>
                {projects.map((folder) => (
                    <div 
                        className='hover-container'
                        key={folder.id}
                        onClick={() => {
                            openFolder(folder);
                        }}
                    >
                        <div className='flex flex-column' style={{ height: '56px', justifyContent: 'center' }}>
                            {folder.iconType === 'img' ? (
                                    <img src={folder.icon} alt={folder.title}></img>
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

                    return (
                        <Window 
                            key={folder.name}
                            id={folder.id}
                            title={folder.name}
                            onClose={() => {
                                closeFolder(folder.name);
                                sounds.playClick();
                            }}
                            defaultPosition={folder.defaultPosition}
                            defaultSize={folder.defaultSize}
                            localZIndex={folder.zIndex || 5}
                            bringToFront={() => bringToFront(folder.name)}
                        >
                            <iframe className='full' src={folder.src} title={folder.title}></iframe>
                        </Window>
                    );
                    })}
                </AnimatePresence>
            </div>
        </div>
    )
}