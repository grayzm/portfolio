import React from 'react';
import useSound from 'use-sound';
import clickSfx from '../assets/sounds/click.mp3';
import switchSfx from '../assets/sounds/light-switch.mp3';

export const useSoundFX = () => {
    const [playClick] = useSound(clickSfx, { 
        volume: 0.5,
        interrupt: true, 
    });
    const [playSwitch] = useSound(switchSfx, { 
        volume: 0.5,
        interrupt: true,
    });

    return { playClick, playSwitch };
};