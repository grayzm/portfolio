import React from 'react';
import '../../styles/Projects.css';
import { useSoundFX } from '../useSoundFX';
import { motion } from 'motion/react';
import { useTheme } from '../Theme';
import Window from '../Window.jsx';

import { XMarkIcon } from '@heroicons/react/24/outline';

import landing from '../../assets/visuals/birdbox/product/landing.webp';
import characterDark from '../../assets/visuals/birdbox/product/character-dark.webp';
import characterLight from '../../assets/visuals/birdbox/product/character-light.webp';
import fightVid from '../../assets/visuals/birdbox/product/fight.webp';
import punchVid from '../../assets/visuals/birdbox/product/punch.webp';
import videoDemo from '../../assets/visuals/birdbox/product/video-demo.mp4';

import twoDAssets from '../../assets/visuals/birdbox/assets/2D-assets.webp';
import threeDAssets from '../../assets/visuals/birdbox/assets/3D-assets.webp';
import idle from '../../assets/visuals/birdbox/assets/idle.gif';
import running from '../../assets/visuals/birdbox/assets/running.gif';
import punchLeft from '../../assets/visuals/birdbox/assets/punch-left.gif';
import punchRight from '../../assets/visuals/birdbox/assets/punch-right.gif';
import uppercut from '../../assets/visuals/birdbox/assets/uppercut.gif';
import fallAndGetUp from '../../assets/visuals/birdbox/assets/fall-and-get-up.gif';
import knockedOut from '../../assets/visuals/birdbox/assets/knocked-out.gif';
import jump from '../../assets/visuals/birdbox/assets/jump.gif';
import bellyAttack from '../../assets/visuals/birdbox/assets/belly-attack.gif';
import headbutt from '../../assets/visuals/birdbox/assets/headbutt.gif';
import topHit from '../../assets/visuals/birdbox/assets/top-hit.gif';
import middleLowHit from '../../assets/visuals/birdbox/assets/middle-low-hit.gif';

export default function Birdbox({ folderName, key, closeFolder, defaultPosition, defaultSize }) {
    const sounds = useSoundFX();
    const { theme } = useTheme();

    const contributions = ['3D modeling', 'Rigging', 'Animation', 'UI/UX design', 'Music composition', 'Landing screen', 'Character select screen'];
    const tools = ['Blender', 'Adobe Illustrator', 'Swift', 'SwiftUI', 'GarageBand'];

    const [infoPanelIsActive, setInfoPanelIsActive] = React.useState(true);
    const [logPanelIsActive, setLogPanelIsActvie] = React.useState(false);
    const [activeDocumentations, setActiveDocumentations] = React.useState('product');

    const documentations = ['product', 'assets'];

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
                <div className={`project-container ${infoPanelIsActive ? 'info-panel-active' : ''}`}>
                    {infoPanelIsActive && (
                        <div className='info-panel'>
                            <div className='scroll-container flex-column g-16'>
                                <div className='flex flex-column g-4'>
                                    <h1>Birdbox</h1>
                                    <p className='text-m'>Multiplayer AR game</p>
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
                                    <p className='text-m'>An augmented reality multiplayer boxing game where players battle as chickens in a virtual arena inspired by the cultural concept of cockfighting, reinterpreted into a playful and comedic experience.</p>
                                </div>
                                <div className='flex flex-column'>
                                    <h2>Key decisions</h2>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>Used AR to create face-to-face social interaction.</li>
                                        <li>Reframed a controversial real-world activity into a humorous game.</li>
                                        <li>Chose stylized chickens to keep the experience playful.</li>
                                        <li>Prioritized quick matches and readable combat.</li>
                                    </ul>
                                </div>
                                <div className='flex flex-column'>
                                    <h2>Insights</h2>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>The action button UI should show what it does to make the UX more intuitive.</li>
                                        <li>Add more variety of chickens with different abilities for strategy.</li>
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
                                        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr', rowGap: '16px' }}>
                                            <div className='product-img' style={{ backgroundImage: `url(${landing})`, aspectRatio: '2167/1000' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${theme === 'dark' ? characterDark : characterLight})`, aspectRatio: '2167/1000' }}></div>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr', rowGap: '16px' }}>
                                            <div className='product-img' style={{ backgroundImage: `url(${fightVid})`, aspectRatio: '2168/1000' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${punchVid})`, aspectRatio: '2168/1000' }}></div>
                                        </div>
                                        <div className='video-container' style={{ aspectRatio: '1280/720'}}>
                                            <video autoPlay loop muted playsInline className='video-demo' style={{ aspectRatio: '1280/720'}}>
                                                <source src={videoDemo} type='video/mp4'></source>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {(activeDocumentations === 'assets') && (
                                <div className='process-contents'>
                                    <div className='scroll-container-x g-16'>
                                        <div className='product-img' style={{ backgroundImage: `url(${twoDAssets})`, aspectRatio: '2500/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${threeDAssets})`, aspectRatio: '2500/1000' }}></div>
                                        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr' }}>
                                            <div className='product-img' style={{ backgroundImage: `url(${idle})`, aspectRatio: '1/1' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${punchLeft})`, aspectRatio: '1/1' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${uppercut})`, aspectRatio: '1/1' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${knockedOut})`, aspectRatio: '1/1' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${bellyAttack})`, aspectRatio: '1/1' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${topHit})`, aspectRatio: '1/1' }}></div>

                                            <div className='product-img' style={{ backgroundImage: `url(${running})`, aspectRatio: '1/1' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${punchRight})`, aspectRatio: '1/1' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${fallAndGetUp})`, aspectRatio: '1/1' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${jump})`, aspectRatio: '1/1' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${headbutt})`, aspectRatio: '1/1' }}></div>
                                            <div className='product-img' style={{ backgroundImage: `url(${middleLowHit})`, aspectRatio: '1/1' }}></div>
                                        </div>
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
                                            I didn't think I would be learning game development so soon after I started learning app development, let alone Blender. I knew it'd take a lot of time and effort to master it. However, I'm up for the challenge.
                                            <br></br><br></br>Like most people, I started with the donut tutorial. Surprisingly, I made it in a night. I jumped straight into the next tutorial which is making a fox character. The scary thing about learning something new for a set deadline is, you don't know how long it'll take for you to be decently skilled at it. Getting a tad concerned, I stopped the tutorial halfway and started experimenting for myself to model the chicken. I need to spare myself time for errors more time learning to rig and animate.
                                            <br></br><br></br>After I was satisfied my chicken, I went into rigging and animating. Weight painting wasn't easy to understand, and Blender's UI doesn't help. After a few trial and errors, I finally got the hang of it. I was also getting comfortable animating that I made more animation than needed.
                                            <br></br><br></br>I never thought animating in Blender would be that amusing. I'm glad I had the chance to learn Blender. Definitely going to try to master it one day.
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