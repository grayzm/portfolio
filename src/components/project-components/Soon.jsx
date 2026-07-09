import React, { act } from 'react';
import '../../styles/Projects.css';
import { useSoundFX } from '../useSoundFX';
import { motion } from 'motion/react';
import Window from '../Window.jsx';

import { XMarkIcon } from '@heroicons/react/24/outline';

import landingVid from '../../assets/visuals/soon/product/landing-video.mp4';
import lv1Vid from '../../assets/visuals/soon/product/lv1-video.mp4';
import lv2Vid from '../../assets/visuals/soon/product/lv2-video.mp4';
import lv3Vid from '../../assets/visuals/soon/product/lv3-video.mp4';
import mechanicVid from '../../assets/visuals/soon/product/mechanic-video.mp4';
import collectVid from '../../assets/visuals/soon/product/collect-video.mp4';
import lv2Product from '../../assets/visuals/soon/product/lv2-product.webp';
import lv3Product from '../../assets/visuals/soon/product/lv3-product.webp';
import lv4Product from '../../assets/visuals/soon/product/lv4-product.webp';

import allTilesets from '../../assets/visuals/soon/tileset/all-tilesets.webp';
import assets from '../../assets/visuals/soon/tileset/assets.webp';
import tilesetLv1 from '../../assets/visuals/soon/tileset/tileset-lv1.webp';
import tilesetLv2 from '../../assets/visuals/soon/tileset/tileset-lv2.webp';
import tilesetLv3 from '../../assets/visuals/soon/tileset/tileset-lv3.webp';
import tilesetLv4 from '../../assets/visuals/soon/tileset/tileset-lv4.png';
import ui from '../../assets/visuals/soon/tileset/UI.webp';
import forest from '../../assets/visuals/soon/tileset/forest.png';
import sky from '../../assets/visuals/soon/tileset/sky.png';
import cathedral from '../../assets/visuals/soon/tileset/cathedral.png';
import forest4 from '../../assets/visuals/soon/tileset/forest4.png';
import forest3 from '../../assets/visuals/soon/tileset/forest3.png';
import forest2 from '../../assets/visuals/soon/tileset/forest2.png';
import forest1 from '../../assets/visuals/soon/tileset/forest1.png';
import sky4 from '../../assets/visuals/soon/tileset/sky4.png';
import sky3 from '../../assets/visuals/soon/tileset/sky3.png';
import sky2 from '../../assets/visuals/soon/tileset/sky2.png';
import sky1 from '../../assets/visuals/soon/tileset/sky1.png';
import cathedral4 from '../../assets/visuals/soon/tileset/cathedral4.png';
import cathedral3 from '../../assets/visuals/soon/tileset/cathedral3.png';
import cathedral2 from '../../assets/visuals/soon/tileset/cathedral2.png';
import cathedral1 from '../../assets/visuals/soon/tileset/cathedral1.png';

import end from '../../assets/visuals/soon/process/end.png';
import lv1Process from '../../assets/visuals/soon/process/lv1.webp';
import lv2Process from '../../assets/visuals/soon/process/lv2.webp';
import lv3Process from '../../assets/visuals/soon/process/lv3.webp';
import lv4Process from '../../assets/visuals/soon/process/lv4.webp';
import maze1 from '../../assets/visuals/soon/process/maze1.webp';
import maze2 from '../../assets/visuals/soon/process/maze2.webp';
import maze3 from '../../assets/visuals/soon/process/maze3.webp';
import maze4 from '../../assets/visuals/soon/process/maze4.webp';
import lv1Sketch from '../../assets/visuals/soon/process/lv1-sketch.webp';
import lv2Sketch from '../../assets/visuals/soon/process/lv2-sketch.webp';
import lv3Sketch from '../../assets/visuals/soon/process/lv3-sketch.webp';

export default function Soon({ folderName, key, closeFolder, defaultPosition, defaultSize }) {
    const sounds = useSoundFX();

    const contributions = ['Environmental art', 'Level design', 'UI/UX design', 'Concept development', 'Music composition', 'Quality assurance'];
    const tools = ['Aseprite', 'Unity', 'Logic Pro', 'Git'];

    const [infoPanelIsActive, setInfoPanelIsActive] = React.useState(true);
    const [logPanelIsActive, setLogPanelIsActvie] = React.useState(false);
    const [activeDocumentations, setActiveDocumentations] = React.useState('product');

    const documentations = ['product', 'process', 'tileset'];

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
                                    <h1>Soon</h1>
                                    <p className='text-m'>Narrative wayfinding platformer game</p>
                                </div>
                                <div className='flex flex-column g-4'>
                                    <h2>Contributions</h2>
                                    <div className='tools-container'>
                                        {contributions.map((list, index) => (
                                            <div className='tools' key={index}>
                                                <p className='text-m'>{list}</p>
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
                                    <p className='text-m'>A 2D pixel-art wayfinding platformer about grief, aging, and the fear of losing loved ones. Players explore the world of Willow, a stained-glass artist, while uncovering a story inspired by watching parents grow older.</p>
                                </div>
                                <div className='flex flex-column g-4'>
                                    <h2>Level design and mechanic</h2>
                                    <p className='text-m'>
                                        The game consists of four levels, each representing a stage of grief that Willow experiences throughout the narrative. Every level introduces a unique gameplay mechanic alongside stained glass pieces for players to collect.
                                        <br></br><br></br>Level 1 introduces floating platforms, symbolizing denial and Willow's carefree, detached state of mind. In Level 2, players shatter stained glass, reflecting anger and frustration as ignorance reaches its breaking point. After emotions settle, Level 3 presents scale-based puzzles that encourage players to contemplate and weigh their decisions, representing bargaining. When bargaining fails, players enter a maze with no collectibles, embodying depression. The only objective left is to find a way out through acceptance.
                                    </p>
                                </div>
                                <div className='flex flex-column g-4'>
                                    <h2>Environment</h2>
                                    <p className='text-m'>
                                        The environment plays a key role in conveying Willow's emotional journey. Set across two worlds, players transition between Willow's reality and her mental world as the story unfolds.
                                        <br></br><br></br>The mental world is designed to evoke curiosity and a sense of adventure, while the contrast between the two settings hints at a deeper mystery beneath the surface. As the narrative progresses, both worlds gradually become more deteriorated and desaturated, reflecting Willow's deteriorating perception of reality and revealing the forgotten truth. By the final revelation, when players discover that Willow has been elderly all along, the world has noticeably lost its color, mirroring how aging can alter our perception of the world.
                                    </p>
                                </div>
                                <div className='flex flex-column'>
                                    <h2>Key decisions</h2>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>Connected every major mechanic to a psychological stage of grief.</li>
                                        <li>Designed progression around discovery, slowly pulling the player's interest towards unraveling the mystery.</li>
                                        <li>Used environment transitions to mirror Willow's mental state.</li>
                                        <li>Built a narrative that relied heavily on symbolism rather than exposition.</li>
                                        <li>Used camera movement to subtly guide player navigation.</li>
                                    </ul>
                                </div>
                                <div className='flex flex-column'>
                                    <h2>Insights</h2>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>Demonstrated how narrative, gameplay, visual design, and music can reinforce one another to create a cohesive emotional experience.</li>
                                        <li>Oversized environments introduced unnecessary traversal time and reduced pacing.</li>
                                        <li>The project's scope was ambitious for a team of five beginners working within a 2.5-month timeframe, causing some level designs and mechanics to feel rushed.</li>
                                        <li>Several puzzles proved either unintentionally difficult or allowed unintended solutions during playtesting.</li>
                                        <li>Transitions between different settings, backgrounds, and foreground elements could be done smoother.</li>
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
                                    >
                                        <p style={{ fontSize: '10px'}}>product</p>
                                    </div>
                                    <div 
                                        className={`process-btn ${activeDocumentations === 'process' ? 'active' : ''}`}
                                        onClick={() => {
                                            setActiveDocumentations('process');
                                            if (activeDocumentations !== 'process') {
                                                sounds.playSwitch();
                                            }
                                        }}
                                    >
                                        <p style={{ fontSize: '10px'}}>process</p>
                                    </div>
                                    <div 
                                        className={`tileset-btn ${activeDocumentations === 'tileset' ? 'active' : ''}`}
                                        onClick={() => {
                                            setActiveDocumentations('tileset');
                                            if (activeDocumentations !== 'tileset') {
                                                sounds.playSwitch();
                                            }
                                        }}
                                    >
                                        <p style={{ fontSize: '10px'}}>tileset</p>
                                    </div>
                                </div>
                            </div>

                            {(activeDocumentations === 'product') && (
                                <div className='product-contents'>
                                    <div className='scroll-container-x g-16'>
                                        <div className='video-container' style={{ aspectRatio: '1920/1076' }}>
                                            <video autoPlay loop muted playsInline className='video-demo' style={{ aspectRatio: '1920/1076' }}>
                                                <source src={landingVid} type='video/mp4'></source>
                                            </video>
                                        </div>
                                        <div className='video-container' style={{ aspectRatio: '1920/988'}}>
                                            <video autoPlay loop muted playsInline className='video-demo' style={{ aspectRatio: '1920/988'}}>
                                                <source src={lv1Vid} type='video/mp4'></source>
                                            </video>
                                        </div>
                                        <div className='product-img' style={{ backgroundImage: `url(${lv2Product})`, aspectRatio: '1562/800' }}></div>
                                        <div className='video-container' style={{ aspectRatio: '1920/988'}}>
                                            <video autoPlay loop muted playsInline className='video-demo' style={{ aspectRatio: '1920/988'}}>
                                                <source src={lv2Vid} type='video/mp4'></source>
                                            </video>
                                        </div>
                                        <div className='product-img' style={{ backgroundImage: `url(${lv3Product})`, aspectRatio: '1410/800' }}></div>
                                        <div className='video-container' style={{ aspectRatio: '1920/988'}}>
                                            <video autoPlay loop muted playsInline className='video-demo' style={{ aspectRatio: '1920/988'}}>
                                                <source src={lv3Vid} type='video/mp4'></source>
                                            </video>
                                        </div>
                                        <div className='product-img' style={{ backgroundImage: `url(${lv4Product})`, aspectRatio: '1387/800' }}></div>
                                        <div className='video-container' style={{ aspectRatio: '1920/1080'}}>
                                            <video autoPlay loop muted playsInline className='video-demo' style={{ aspectRatio: '1920/1080'}}>
                                                <source src={mechanicVid} type='video/mp4'></source>
                                            </video>
                                        </div>
                                        <div className='video-container' style={{ aspectRatio: '1920/1096'}}>
                                            <video autoPlay loop muted playsInline className='video-demo' style={{ aspectRatio: '1920/1096'}}>
                                                <source src={collectVid} type='video/mp4'></source>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {(activeDocumentations === 'process') && (
                                <div className='process-contents'>
                                    <div className='scroll-container-x g-16'>
                                        <div className='product-img' style={{ backgroundImage: `url(${lv1Sketch})`, aspectRatio: '1789/602', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${lv1Process})`, aspectRatio: '1794/800', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${lv2Sketch})`, aspectRatio: '1580/800', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${lv2Process})`, aspectRatio: '1792/800', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${lv3Sketch})`, aspectRatio: '1794/800', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${lv3Process})`, aspectRatio: '2069/800', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${maze1})`, aspectRatio: '805/800', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${maze2})`, aspectRatio: '516/515', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${maze3})`, aspectRatio: '804/795', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${maze4})`, aspectRatio: '798/795', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${lv4Process})`, aspectRatio: '809/800', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${end})`, aspectRatio: '1024/576', imageRendering: 'pixelated' }}></div>
                                    </div>
                                </div>
                            )}

                            {(activeDocumentations === 'tileset') && (
                                <div className='tileset-contents'>
                                    <div className='scroll-container-x g-16'>
                                        <div className='product-img' style={{ backgroundImage: `url(${assets})`, aspectRatio: '780/400', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${allTilesets})`, aspectRatio: '1620/416', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${tilesetLv1})`, aspectRatio: '1486/800', imageRendering: 'pixelated' }}></div>
                                        <div className='parallax-container' style={{ aspectRatio: '1920/1080'}}>
                                            <div className='parallax background2' style={{ backgroundImage: `url(${forest4})`, aspectRatio: '2667/375' }}></div>
                                            <div className='parallax background' style={{ backgroundImage: `url(${forest3})`, aspectRatio: '2667/407' }}></div>
                                            <div className='parallax middleground' style={{ backgroundImage: `url(${forest2})`, aspectRatio: '2667/438' }}></div>
                                            <div className='parallax foreground' style={{ backgroundImage: `url(${forest1})`, aspectRatio: '2667/498' }}></div>
                                        </div>
                                        <div className='parallax-container' style={{ aspectRatio: '1920/1080'}}>
                                            <div className='parallax background2' style={{ backgroundImage: `url(${sky4})`, aspectRatio: '2667/498' }}></div>
                                            <div className='parallax background' style={{ backgroundImage: `url(${sky3})`, aspectRatio: '2667/498' }}></div>
                                            <div className='parallax middleground' style={{ backgroundImage: `url(${sky2})`, aspectRatio: '2667/498' }}></div>
                                            <div className='parallax foreground' style={{ backgroundImage: `url(${sky1})`, aspectRatio: '2667/498' }}></div>
                                        </div>
                                        <div className='product-img' style={{ backgroundImage: `url(${tilesetLv2})`, aspectRatio: '1570/800', imageRendering: 'pixelated' }}></div>
                                        <div className='parallax-container' style={{ aspectRatio: '1920/1080'}}>
                                            <div className='parallax background2' style={{ backgroundImage: `url(${cathedral4})`, aspectRatio: '2665/500' }}></div>
                                            <div className='parallax background' style={{ backgroundImage: `url(${cathedral3})`, aspectRatio: '2665/500' }}></div>
                                            <div className='parallax middleground' style={{ backgroundImage: `url(${cathedral2})`, aspectRatio: '2665/500' }}></div>
                                            <div className='parallax foreground' style={{ backgroundImage: `url(${cathedral1})`, aspectRatio: '2665/500' }}></div>
                                        </div>
                                        <div className='product-img' style={{ backgroundImage: `url(${tilesetLv3})`, aspectRatio: '1474/800', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${tilesetLv4})`, aspectRatio: '384/288', imageRendering: 'pixelated' }}></div>
                                        <div className='product-img' style={{ backgroundImage: `url(${ui})`, aspectRatio: '2223/800', imageRendering: 'pixelated' }}></div>
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
                                            This project had A LOT of trial and errors. It was my first attempt on making a tileset, parallax, and level design. I made a prototype level - which was then used as level 2, and a tileset which I mapped on Adobe Illustrator.
                                            <br></br><br></br>The parallax layers were also challenging to manage. After studying various references, I noticed that the foreground layer could be both darker or lighter, though after further observations, it leaned more on the former. I didn't know then, whether the ground was supposed to be part of the tileset or a foreground layer in itslef. I guessd it would depend on how I'd decorate the environment and ended up making both.
                                            <br></br><br></br>Color was also something I contemplated for a long time. Saturated and vibrant colors are comical and child-like, while muted colors are more realistic and mature. Brighter colors are carefree, while darker colors are dramatic and eeire. Depth, contrast, and temperature all affects the mood of the environment. Since we're going from carefree to mysterious, then depressed to peaceful, deciding on a color palette was very challenging. I end up playing with the saturation and hue to convey the mood while maintaining a good contrast for it to stay dramatic.
                                            <br></br><br></br>Fun fact: I was watching Stranger Things while working on this project. When the time came for me to compose the BGM, I was just finished with the famous episode (Season 4, ep 4: Dear Billy. Yes, I remember the title of the episode) where Max was running back to her friends accompanied with Kate Bush's "Running Up the Hill". I was deeply moved by that cinematic composition that I used the exact same chords for the landing screen BGM. As for the ending screen BGM, I wanted it to sound melancholic and nostalgic. How I think I'd feel when I get old. Hence, the old broken piano instrument and the waltz time signature.
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