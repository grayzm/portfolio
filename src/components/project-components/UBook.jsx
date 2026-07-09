import React from 'react';
import '../../styles/Projects.css';
import { useSoundFX } from '../useSoundFX';
import { motion } from 'motion/react';
import Window from '../Window.jsx';

import { XMarkIcon } from '@heroicons/react/24/outline';

import landing from '../../assets/visuals/ubook/product/landing.webp';
import schedule from '../../assets/visuals/ubook/product/schedule.webp';
import bookingInfo from '../../assets/visuals/ubook/product/booking-info.webp';
import createBooking from '../../assets/visuals/ubook/product/create-booking.webp';
import startBrowsing from '../../assets/visuals/ubook/product/start-browsing.webp';
import selectTime from '../../assets/visuals/ubook/product/select-time.webp';
import inputBookingInfo from '../../assets/visuals/ubook/product/input-booking-info.webp';
import requestCarpool from '../../assets/visuals/ubook/product/request-carpool.webp';
import activity from '../../assets/visuals/ubook/product/activity.webp';

import userFlow from '../../assets/visuals/ubook/process/user-flow.webp';
import designSystem from '../../assets/visuals/ubook/process/design-system.webp';
import approvals from '../../assets/visuals/ubook/process/approvals.webp';
import bookings from '../../assets/visuals/ubook/process/bookings.webp';
import meetingRooms from '../../assets/visuals/ubook/process/meeting-rooms.webp';

export default function UBook({ folderName, key, closeFolder, defaultPosition, defaultSize }) {
    const sounds = useSoundFX();

    const contributions = ['UX research', 'UI design', 'Hi-fi protoyping', 'Quality assurance'];
    const tools = ['Figma', 'Swfit', 'SwiftUI', 'XCode', 'Git', 'GitHub'];

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
                                    <h1>UBook</h1>
                                    <p className='text-m'>iOS application, ADA real client project</p>
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
                                    <p className='text-m'>UBook helps you manage your bookings and schedule with ease within an integrated system. Create, confirm, and cancel your bookings anytime, and send carpool requests when needed.</p>
                                </div>
                                <div className='flex flex-column'>
                                    <h2>Key decisions</h2>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>Prioritized a week-based schedule view while preserving a full calendar for historical bookings.</li>
                                        <li>Minimized required input before showing available bookings.</li>
                                        <li>Inegrated available booking slots directly into the schedule to reduce navigation between screens.</li>
                                        <li>Introduced booking templates to help create repeated bookings efficiently.</li>
                                        <li>All updates and notifications can be viewed in a separate activity tab.</li>
                                    </ul>
                                </div>
                                <div className='flex flex-column'>
                                    <h2>Insights</h2>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>Car bookings should display and update any changes caused by unexpected traffic. Users should be able to receive an estimated arrival time.</li>
                                        <li>Though users can save a booking as template, an auto book feature could be useful for weekly meetings to ensure it doesn't get overtaken.</li>
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
                                        <div className='product-img' style={{ backgroundImage: `url(${landing})`, aspectRatio: '461/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${schedule})`, aspectRatio: '461/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${bookingInfo})`, aspectRatio: '461/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${createBooking})`, aspectRatio: '461/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${startBrowsing})`, aspectRatio: '461/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${selectTime})`, aspectRatio: '461/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${inputBookingInfo})`, aspectRatio: '461/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${requestCarpool})`, aspectRatio: '461/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${activity})`, aspectRatio: '461/1000' }}></div>
                                    </div>
                                </div>
                            )}
                            {(activeDocumentations === 'process') && (
                                <div className='process-contents'>
                                    <div className='scroll-container-x g-16'>
                                        <div className='product-img' style={{ backgroundImage: `url(${userFlow})`, aspectRatio: '1374/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${designSystem})`, aspectRatio: '1529/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${approvals})`, aspectRatio: '461/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${bookings})`, aspectRatio: '461/1000' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${meetingRooms})`, aspectRatio: '461/1000' }}></div>
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
                                            The problem of this project was simple. Bookings were managed by a department and approved by an admin. However, the simplicity was what made it challenging. "Do not solve the simple problem with a bazooka." was what one of my mentors said.
                                            <br></br><br></br>When faced with these kinds of problem, we often add unnecessary features and create a complicated solution to a simle problem. Someone managing the academy once said something along the lines of "You know you're done when you can no longer remove anything from it". This stuck with me ever since.
                                            <br></br><br></br>The initial design looked like Apple's native design since we followed Apple's human interface guidelines. I have not explored nor learned design systems so I relied heavily on Apple's best practices. The iterated design was made after I tried exploring different kinds of UI and made a design system for myself to follow. 
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