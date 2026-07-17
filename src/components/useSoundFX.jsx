import React from 'react';
import useSound from 'use-sound';
import clickSfx from '../assets/sounds/click.mp3';
import switchSfx from '../assets/sounds/light-switch.mp3';
import tokSfx from '../assets/sounds/tok.mp3';
import tapeSfx from '../assets/sounds/button-click.mp3';
import typeSfx from '../assets/sounds/typewriter.mp3';

export const useSoundFX = () => {
    const [playClick] = useSound(clickSfx, { 
        volume: 0.5,
        interrupt: true, 
    });
    const [playSwitch] = useSound(switchSfx, { 
        volume: 0.5,
        interrupt: true,
    });
    const [playTok] = useSound(tokSfx, {
        volume: 1,
        interrupt: true,
    });
    const [playTape] = useSound(tapeSfx, {
        volume: 1,
        interrupt: true,
    });
    const [playType] = useSound(typeSfx, {
        volume: 0.5,
        interrupt: true,
    });

    return { playClick, playSwitch, playTok, playTape,playType };
};