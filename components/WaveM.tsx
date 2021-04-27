import React from 'react';
import { styled } from '../stitches.config';
import WaveMedium from '../static/wave/wave-m.svg?sprite';

export const WaveM = styled(WaveMedium, {
    width: '100%',
    variants: {
        color: {
            blue: {
                color: '$blue500',
            },
            green: {
                color: '$green500',
            },
            red: {
                color: '$red500',
            },
            white: {
                color: '$white',
            },
        },
    },
})