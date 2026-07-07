import React from 'react';
import '../../styles/Projects.css';
import { useSoundFX } from '../useSoundFX';
import { motion, AnimatePresence, useFollowValue } from 'motion/react';

import { XMarkIcon } from '@heroicons/react/24/outline';

import landing from '../../assets/visuals/rhysleep/product/landing.webp';
import questionnaire from '../../assets/visuals/rhysleep/product/questionnaire.webp';
import chronotype from '../../assets/visuals/rhysleep/product/chronotype.webp';
import statsitcs from '../../assets/visuals/rhysleep/product/statistics.webp';
import weekly from '../../assets/visuals/rhysleep/product/weekly.webp';
import monthly from '../../assets/visuals/rhysleep/product/monthly.webp';
import heartRate from '../../assets/visuals/rhysleep/product/heart-rate.webp';
import meditations from '../../assets/visuals/rhysleep/product/meditations.webp';
import breathing from '../../assets/visuals/rhysleep/product/breathing.webp';
import backgroundNoise from '../../assets/visuals/rhysleep/product/background-noise.webp';

import userFlow from '../../assets/visuals/rhysleep/process/userflow.webp';
import wireframe from '../../assets/visuals/rhysleep/process/wireframe.webp';
import designSystem from '../../assets/visuals/rhysleep/process/design-system.webp';
import landingOld from '../../assets/visuals/rhysleep/process/landing.webp';
import questionnaireOld from '../../assets/visuals/rhysleep/process/questionnaire.webp';
import chronotypeOld from '../../assets/visuals/rhysleep/process/chronotype.webp';
import daily from '../../assets/visuals/rhysleep/process/daily.webp';
import badScore from '../../assets/visuals/rhysleep/process/bad-score.webp';
import sleepStage from '../../assets/visuals/rhysleep/process/sleep-stage.webp';
import heartRateOld from '../../assets/visuals/rhysleep/process/heart-rate.webp';
import therapy from '../../assets/visuals/rhysleep/process/therapy.webp';
import breathingOld from '../../assets/visuals/rhysleep/process/breathing.webp';
import whiteNoise from '../../assets/visuals/rhysleep/process/white-noise.webp';

export default function Rhysleep({ folderName, key, closeFolder }) {
    const sounds = useSoundFX();

    const contributions = ['UX research', 'UI design', 'Hi-fi protoyping', 'Quality assurance'];
    const tools = ['Figma'];

    const [infoPanelIsActive, setInfoPanelIsActive] = React.useState(true);
    const [logPanelIsActive, setLogPanelIsActvie] = React.useState(false);
    const [productIsActive, setProductIsActive] = React.useState(true);
    const [processIsActive, setProcessIsActive] = React.useState(false);
    const [activeDocumentations, setActiveDocumentations] = React.useState('product');

    const documentations = ['product', 'process'];

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
                                            <h1>Rhysleep</h1>
                                            <p className='text-m'>iOS application</p>
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
                                            <p className='text-m'>A sleep companion app that helps users improve their sleeping habits by aligning their circadian rhythm with their natural chronotype.</p>
                                        </div>
                                        <div className='flex flex-column'>
                                            <h2>Key decisions</h2>
                                            <ul style={{ textAlign: 'left' }}>
                                                <li>Prioritized clarity and ease of use over feature-heavy interfaces.</li>
                                                <li>Used a calm visual language to reinforce the app's purpose.</li>
                                                <li>Simple data representation to improve understanding.</li>
                                                <li>Structured user flows around bedtime and wake-up routines.</li>
                                                <li>Focused on reducing friction so users could quickly complete common tasks.</li>
                                            </ul>
                                        </div>
                                        <div className='flex flex-column'>
                                            <h2>Insights</h2>
                                            <ul style={{ textAlign: 'left' }}>
                                                <li>Visualizing primary data that users could easily understand without overwhelming them with information.</li>
                                                <li>Categorizing data into sections and priority order to imporve focus.</li>
                                                <li>Designing user flows that are both intuitive and easy to navigate.</li>
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
                                                <div className='product-img' style={{ backgroundImage: `url(${landing})`, aspectRatio: '393/852' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${questionnaire})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${chronotype})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${statsitcs})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${weekly})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${monthly})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${heartRate})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${meditations})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${breathing})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${backgroundNoise})`, aspectRatio: '461/1000' }}></div>
                                            </div>
                                        </div>
                                    )}
                                    {(activeDocumentations === 'process') && (
                                        <div className='process-contents'>
                                            <div className='scroll-container-x g-16'>
                                                <div className='product-img' style={{ backgroundImage: `url(${userFlow})`, aspectRatio: '1586/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${wireframe})`, aspectRatio: '1512/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${designSystem})`, aspectRatio: '1734/938' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${landingOld})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${questionnaireOld})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${chronotypeOld})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${daily})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${badScore})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${sleepStage})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${heartRateOld})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${therapy})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${breathingOld})`, aspectRatio: '461/1000' }}></div>
                                                <div className='product-img' style={{ backgroundImage: `url(${whiteNoise})`, aspectRatio: '461/1000' }}></div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {logPanelIsActive && (
                                    <div className='log-panel'>
                                        <div className='window-title'><p>development log</p></div>
                                        <div className='log-contents'>
                                            <div className='scroll-container'>
                                                <p className='text-m'>
                                                    The questions that had always been on my mind when designing Rhysleep were, "What information does the user need to view first when they open the app?", and "How do I visualize the data to make it quick and easy to consume?". In order to answer that question, I had to do an extensive research on circadian rhythm, sleep monitoring, and sleep quality.
                                                    <br></br><br></br>Color and shape are useful tools for organizing information, but using too many visual cues can quickly overwhelm the interface. So, users should only be presented with the primary data first. They can view secondary data if they're interested to know more by taking an action, and this needs to be clearly shown. 
                                                    <br></br><br></br>The iterated design was heavily inspired by Apple's Fitness app. As a user, the information I receive upon opening the app was clear. It was easy and intuitive to navigate, and discovering deeper, secondary information got me hooked. This kind of experience was what I would like Rhysleep's users to have.
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