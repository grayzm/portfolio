import React from 'react';
import '../../styles/Projects.css';
import { useSoundFX } from '../useSoundFX';
import { motion } from 'motion/react';
import Window from '../Window.jsx';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { SquareArrowOutUpRight } from 'lucide-react';

import landingView from '../../assets/visuals/randrum/landing-dark.webp';
import practiceView from '../../assets/visuals/randrum/practice-sample-dark.webp';
import createView from '../../assets/visuals/randrum/create-sample-dark.webp';
import practiceBts from '../../assets/visuals/randrum/practice-bts.webp';
import createBts from '../../assets/visuals/randrum/create-bts.webp';
import demoVid from '../../assets/visuals/randrum/demo.mp4';

export default function Randrum({ folderName, key, closeFolder, defaultPosition, defaultSize }) {
    const sounds = useSoundFX();

    const tools = ['Swfit', 'SwiftUI', 'XCode', 'Git', 'GitHub', 'Logic Pro'];

    const [infoPanelIsActive, setInfoPanelIsActive] = React.useState(true);
    const [logPanelIsActive, setLogPanelIsActvie] = React.useState(false);
    const [activeDocumentations, setActiveDocumentations] = React.useState('product');

    const documentations = ['product', 'process'];

    const extraWindowButtons = (
        <>
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
        </>
    )

    return (
        <>
            <Window
                title={folderName}
                onClose={() => {
                    closeFolder(folderName);
                    sounds.playClick();
                }}
                windowButtons={extraWindowButtons}
                defaultPosition={defaultPosition}
                defaultSize={defaultSize}
            >
                <div className={`project-container p-4 title-bg ${infoPanelIsActive ? 'info-panel-active' : ''}`}>
                    {infoPanelIsActive && (
                        <div className='info-panel'>
                            <div className='scroll-container flex-column g-16'>
                                <div className='flex flex-column g-4'>
                                    <h1>Randrum</h1>
                                    <p className='text-m'>iPadOS application, Swift Student Challenge 2026 submission</p>
                                </div>
                                <a href='https://github.com/grayzm/Randrum' target='_blank' style={{ textDecoration: 'none', color: 'var(--text)' }}>
                                    <button  
                                        style={{ marginBottom: '8px' }}
                                        onClick={() => {
                                            sounds.playClick();
                                        }}
                                    >
                                        <p>GitHub</p>
                                        <SquareArrowOutUpRight style={{ width: '12px', height: '12px' }} />
                                    </button>
                                </a>
                                <div className='flex flex-column g-4'>
                                    <h2>Tools</h2>
                                    <div className='tools-container'>
                                        {tools.map((tool, index) => (
                                            <div className='tools' key={index}>
                                                <p className='text-m'>{tool}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex flex-column g-4'>
                                    <h2>Overview</h2>
                                    <p className='text-m'>Randrum is a drum practice app that helps beginner drummers develop their rhythmic listening skills through procedurally generated drum patterns. Players recreate each pattern by ear before revealing the correct answer visually.</p>
                                </div>
                                <div className='flex flex-column'>
                                    <h2>Key decisions</h2>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>Adding constraints to the random pattern generation to produce rhythmically realistic patterns.</li>
                                        <li>Generated visuals procedurally instead of relying on static assets, reducing application size while improving responsiveness.</li>
                                        <li>Separating UIs into components for easier maintenance and iteration, and reusability.</li>
                                    </ul>
                                </div>
                                <div className='flex flex-column'>
                                    <h2>Insights</h2>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>On-boarding could be improved with guided tutorials, especially for non-musicians.</li>
                                        <li>Designing perfectly square drum pads proved challenging across different device sizes, reinforcing the importance of responsive layouts from the beginning.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={`visuals-and-log-container ${logPanelIsActive ? 'log-panel-active' : ''}`}>
                        <div className='product-container'>
                            <div className='window-title'>
                                <p>documentations</p>
                                <div className='flex g-10' style={{ marginBottom: '2px'}}>
                                    <div 
                                        className={`product-btn ${activeDocumentations === 'product' ? 'active' : ''}`}
                                        onClick={() => {
                                            setActiveDocumentations('product');
                                            if (activeDocumentations !== 'product') {
                                                sounds.playTok();
                                            }
                                        }}
                                    ><p style={{ fontSize: '10px'}}>product</p></div>
                                    <div 
                                        className={`process-btn ${activeDocumentations === 'process' ? 'active' : ''}`}
                                        onClick={() => {
                                            setActiveDocumentations('process');
                                            if (activeDocumentations !== 'process') {
                                                sounds.playTok();
                                            }
                                        }}
                                    ><p style={{ fontSize: '10px'}}>process</p></div>
                                </div>
                            </div>
                            {(activeDocumentations === 'product') && (
                                <div className='product-contents'>
                                    <div className='scroll-container-x g-16'>
                                        <div className='product-img' style={{ backgroundImage: `url(${landingView})`, aspectRatio: '1100/844' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${practiceView})`, aspectRatio: '1100/844' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${createView})`, aspectRatio: '1100/844' }}></div>
                                    </div>
                                </div>
                            )}
                            {(activeDocumentations === 'process') && (
                                <div className='process-contents'>
                                    <div className='scroll-container-x g-16'>
                                        <div className='video-container' style={{ aspectRatio: '1078/838'}}>
                                            <video autoPlay loop muted playsInline className='video-demo' style={{ aspectRatio: '1078/838'}}>
                                                <source src={demoVid} type='video/mp4'></source>
                                            </video>
                                        </div>
                                        <div className='product-img' style={{ backgroundImage: `url(${practiceBts})`, aspectRatio: '1060/780' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${createBts})`, aspectRatio: '3024/1964' }}></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {logPanelIsActive && (
                            <div className='log-panel'>
                                <div className='window-title' style={{ padding: '6px 8px'}}><p>development log</p></div>
                                <div className='log-contents'>
                                    <div className='scroll-container'>
                                        <p className='text-m'>
                                            My first solo project after graduating from the Apple Developer Academy. I was still just a designer then, so building it was a huge challenge.
                                            <br></br><br></br>The project ended up taking around 3 weeks to complete with 8+ hours of work a day, and a few all-nighters here and there.
                                            <br></br><br></br>I thoroughly enjoyed the whole process of building this app. This project sparked my interest in programming. The joy of building something functional completely from scratch as well as solving bugs became surprisingly rewarding. This was the start of the rest of my personal projects and explorations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Window>
        </>
    )
}