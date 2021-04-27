import React from 'react';
import { styled } from '../stitches.config';
import WaveLarge from '../static/wave/wave-l.svg?sprite';

export const WaveL = styled(WaveLarge, {
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