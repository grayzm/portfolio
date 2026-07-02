import landingView from '../../assets/visuals/randrum/landing-dark.webp';
import practiceView from '../../assets/visuals/randrum/practice-sample-dark.webp';
import createView from '../../assets/visuals/randrum/create-sample-dark.webp';

export default function Randrum({ infoPanelIsActive, logPanelIsActive }) {
    const tools = ['Swfit', 'SwiftUI', 'XCode', 'Git', 'GitHub', 'Logic Pro']

    return (
        <>
            <div className={`randrum-container ${infoPanelIsActive ? 'info-panel-active' : ''}`}>
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
                                <p>A simple drum practice app developed to help beginner drummers train their ears to deconstruct drum patterns that are randomly generated. Users can recreate the given pattern and check to reveal the correct pattern visually.</p>
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
                                <h2>Evaluations</h2>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>On-boarding could be improved with guided tutorials, especially for non-musicians.</li>
                                    <li>The 1/1 aspect-ratio for the pads prevents the UI to be fully responsive. Either the layout should be evaluated, or ignore the 1/1 aspect-ratio idealism.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                <div className={`visuals-and-log-container ${logPanelIsActive ? 'log-panel-active' : ''}`}>
                    <div className='visuals-container'>
                        <div className='scroll-container' style={{ gap: '24px', overflowX: 'auto'}}>
                            <div className='img-desc'>
                                <img className='randrum-img' src={landingView} alt='Randrum landing view'></img>
                                <p style={{ fontSize: '12px' }}>Landing view</p>
                            </div>
                            <div className='img-desc'>
                                <img className='randrum-img' src={practiceView} alt='Randrum landing view'></img>
                                <p style={{ fontSize: '12px' }}>Practice view</p>
                            </div>
                            <div className='img-desc'>
                                <img className='randrum-img' src={createView} alt='Randrum landing view'></img>
                                <p style={{ fontSize: '12px' }}>Create view</p>
                            </div>
                        </div>
                    </div>

                    {logPanelIsActive && (
                        <div className='log-panel'>
                            <div className='window-title'><p>logs</p></div>
                            <div className='log-contents'>
                                <div className='scroll-container'>
                                    <p style={{ fontSize: '12px' }}>
                                        Randrum was my first solo project after graduating from the Apple Developer Academy. I was still just a designer then, so building it was a huge challenge. I had to have a good grasp and understanding of the language before starting, so I speedran Paul Hudson's Hacking With Swift, and built a couple mini game apps.
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