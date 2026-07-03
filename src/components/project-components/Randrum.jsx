import React from 'react';
import '../../styles/project-styles/Projects.css';
import { useSoundFX } from '../useSoundFX';

import landingView from '../../assets/visuals/randrum/landing-dark.webp';
import practiceView from '../../assets/visuals/randrum/practice-sample-dark.webp';
import createView from '../../assets/visuals/randrum/create-sample-dark.webp';
import practiceBts from '../../assets/visuals/randrum/practice-bts.webp';
import createBts from '../../assets/visuals/randrum/create-bts.webp';
import demoVid from '../../assets/visuals/randrum/demo.mp4';

export default function Randrum({ infoPanelIsActive, logPanelIsActive }) {
    const sounds = useSoundFX();

    const tools = ['Swfit', 'SwiftUI', 'XCode', 'Git', 'GitHub', 'Logic Pro'];

    const [productIsActive, setProductIsActive] = React.useState(true);
    const [processIsActive, setProcessIsActive] = React.useState(false);
    const [activeDocumentations, setActiveDocumentations] = React.useState('product');

    const documentations = ['product', 'process'];

    return (
        <>
            <div className={`project-container ${infoPanelIsActive ? 'info-panel-active' : ''}`}>
                {infoPanelIsActive && (
                    <div className='info-panel'>
                        <div className='scroll-container flex-column g-16'>
                            <div className='flex flex-column g-4'>
                                <h1>Randrum</h1>
                                <p>Swift Student Challenge 2026 submission</p>
                            </div>
                             <div className='flex flex-column g-4'>
                                <h2>Tools</h2>
                                <div className='tools-container'>
                                    {tools.map((tool, index) => (
                                        <div className='tools' key={index}>
                                            <p>{tool}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-column g-4'>
                                <h2>Overview</h2>
                                <p className='text-s'>A simple drum practice app developed to help beginner drummers train their ears to deconstruct drum patterns that are randomly generated. Users can recreate the given pattern and check to reveal the correct pattern visually.</p>
                            </div>
                            <div className='flex flex-column'>
                                <h2>Key decisions</h2>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>Adding constraints to the random pattern generation to produce rhythmically realistic patterns.</li>
                                    <li>Procedural visuals over static graphics to reduce asset's size and support responsiveness.</li>
                                    <li>Separating UIs into components for easier maintenance and iteration, and reusability.</li>
                                </ul>
                            </div>
                            <div className='flex flex-column'>
                                <h2>Postmortem</h2>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>On-boarding could be improved with guided tutorials, especially for non-musicians.</li>
                                    <li>The 1/1 aspect-ratio for the pads prevents the UI to be fully responsive. Either the layout should be evaluated, or ignore the 1/1 aspect-ratio idealism.</li>
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
                                            sounds.playSwitch();
                                        }
                                    }}
                                ><p style={{ fontSize: '10px'}}>product</p></div>
                                <div 
                                    className={`process-btn ${activeDocumentations === 'process' ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveDocumentations('process');
                                        if (activeDocumentations !== 'process') {
                                            sounds.playSwitch();
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
                            <div className='window-title'><p>logs</p></div>
                            <div className='log-contents'>
                                <div className='scroll-container'>
                                    <p style={{ fontSize: '12px' }}>
                                        My first solo project after graduating from the Apple Developer Academy. I was still just a designer then, so building it was a huge challenge.
                                        <br></br><br></br>The project ended up taking around 3 weeks to complete with 8+ hours of work a day, and a few all-nighters here and there.
                                        <br></br><br></br>I thoroughly enjoyed the whole process of building this app. This was what sparked my interest into exploring the world of coding. The joy of building something functional completely from scratch as well as debugging felt triumphant. This was the start of the rest of my personal projects and explorations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}