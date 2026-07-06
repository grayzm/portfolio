import React from 'react';
import '../../styles/Projects.css';
import { useSoundFX } from '../useSoundFX';
import { motion, AnimatePresence } from 'motion/react';

import { XMarkIcon } from '@heroicons/react/24/outline';

import mainMenu from '../../assets/visuals/street-swipe/product/main-menu.webp';
import redLight from '../../assets/visuals/street-swipe/product/red-light.webp';
import trafficLight from '../../assets/visuals/street-swipe/product/traffic-light.webp';
import police from '../../assets/visuals/street-swipe/product/police.webp';
import ambulance from '../../assets/visuals/street-swipe/product/ambulance.webp';
import gameOver from '../../assets/visuals/street-swipe/product/game-over.webp';
import leaderboard from '../../assets/visuals/street-swipe/product/leaderboard.webp';

import skin from '../../assets/visuals/street-swipe/assets/skin.webp';
import obstacle from '../../assets/visuals/street-swipe/assets/obstacle.webp';
import environment from '../../assets/visuals/street-swipe/assets/environment.webp';
import ui from '../../assets/visuals/street-swipe/assets/ui.webp';
import animations from '../../assets/visuals/street-swipe/assets/animations.mp4';

export default function StreetSwipe({ folderName, key, closeFolder }) {
    const sounds = useSoundFX();

    const contributions = ['Asset production', 'UI/UX design', 'Music composition', 'Concept Development', 'Quality assurance'];
    const tools = ['Aseprite', 'Logic Pro'];

    const [infoPanelIsActive, setInfoPanelIsActive] = React.useState(true);
    const [logPanelIsActive, setLogPanelIsActvie] = React.useState(false);
    const [productIsActive, setProductIsActive] = React.useState(true);
    const [processIsActive, setProcessIsActive] = React.useState(false);
    const [activeDocumentations, setActiveDocumentations] = React.useState('product');

    const documentations = ['product', 'assets'];

    return (
        <>
            <AnimatePresence>
                <motion.div
                    className='window'
                    id={`${folderName}-window`}
                    key={key}
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
                        <div className={`project-container ${infoPanelIsActive ? 'info-panel-active' : ''}`}>
                            {infoPanelIsActive && (
                                <div className='info-panel'>
                                    <div className='scroll-container flex-column g-16'>
                                        <div className='flex flex-column g-4'>
                                            <h1>Street Swipe</h1>
                                            <p className='text-m'>Hypercasual mobile game</p>
                                        </div>
                                        <div className='flex flex-column g-4'>
                                            <h2>Contributions</h2>
                                            <div className='tools-container'>
                                                {contributions.map((tool, index) => (
                                                    <div className='tools' key={index}>
                                                        <p className='text-m'>{tool}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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
                                            <p className='text-m'>A pseudo-3D driving game that flips traditional driving-game expectation. Instead of rewarding reckless speed, players are encouraged to obey traffic rules and avoid accidents.</p>
                                        </div>
                                        <div className='flex flex-column'>
                                            <h2>Key decisions</h2>
                                            <ul style={{ textAlign: 'left' }}>
                                                <li>Reversed genre expectations.</li>
                                                <li>Focused on traffic management rather than racing.</li>
                                                <li>Added leaderboard systems for replayability.</li>
                                                <li>Emphasized satisfying controls and visual feedback.</li>
                                            </ul>
                                        </div>
                                        <div className='flex flex-column'>
                                            <h2>Postmortem</h2>
                                            <ul style={{ textAlign: 'left' }}>
                                                <li>Learned to create a short but enjoyable game that also challenges genre conventions.</li>
                                                <li>Difficulty vaires among players. Some found it hard while others survived until they got bored.</li>
                                                <li>Players should be given a short tutorial that shows every features, or an introduction to a new feature mid-game should be clear.</li>
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
                                                className={`process-btn ${activeDocumentations === 'assets' ? 'active' : ''}`}
                                                onClick={() => {
                                                    setActiveDocumentations('assets');
                                                    if (activeDocumentations !== 'assets') {
                                                        sounds.playSwitch();
                                                    }
                                                }}
                                            ><p style={{ fontSize: '10px'}}>assets</p></div>
                                        </div>
                                    </div>
                                    {(activeDocumentations === 'product') && (
                                        <div className='product-contents'>
                                            <div className='scroll-container-x g-16'>
                                                <div className='product-img' style={{ backgroundImage: `url(${mainMenu})`, aspectRatio: '452/918' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${redLight})`, aspectRatio: '452/918' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${trafficLight})`, aspectRatio: '452/918' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${police})`, aspectRatio: '452/918' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${ambulance})`, aspectRatio: '452/918' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${gameOver})`, aspectRatio: '452/918' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${leaderboard})`, aspectRatio: '452/918' }}></div>
                                            </div>
                                        </div>
                                    )}
                                    {(activeDocumentations === 'assets') && (
                                        <div className='process-contents'>
                                            <div className='scroll-container-x g-16'>
                                                <div className='product-img' style={{ backgroundImage: `url(${skin})`, aspectRatio: '653/898' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${obstacle})`, aspectRatio: '503/898' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${environment})`, aspectRatio: '1517/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${ui})`, aspectRatio: '564/358' }}></div>
                                                <div className='video-container' style={{ aspectRatio: '1006/882'}}>
                                                    <video autoPlay loop muted playsInline className='video-demo' style={{ aspectRatio: '1006/882'}}>
                                                        <source src={animations} type='video/mp4'></source>
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {logPanelIsActive && (
                                    <div className='log-panel'>
                                        <div className='window-title'><p>logs</p></div>
                                        <div className='log-contents'>
                                            <div className='scroll-container'>
                                                <p className='text-m'>
                                                    Initially, we were torn between top-down view in 2D and front-view in 2.5D - pseudo 3D. The programming wouldv'e been way easier done in 2D. 2.5D however, looks enticing, especially our mentor showed us the possibility of it.
                                                    <br></br><br></br>According to the programmers I worked with, they had to cut the road, bring them up, then scale them as they go downwards bit by bit in a loop. However, since we're working with pixel art, scaling them created a whole other problem, which was eventually solved thankfully.
                                                    <br></br><br></br>During our first playtest, I haven't learned about game juices and the importance of feedbacks. Braking on a red light decreased the excitement stunned the flow of the game when it was supposed to be the point of the game. Having received this feedback, we created a point system which rewards players for their survival duration as well as how close they brake behind the line. The closer they are to the line, the greater the point. This was accompanied with visual and auditory feedback to add to the satisfaction.
                                                    <br></br><br></br>That addition changed our game entirely. The traffic light became an opportunity to farm points and a test of timing skills. The leaderboard addition was a cherry on top to increase competitiveness among players. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}