import React from 'react';
import { styled } from '../stitches.config';
import WaveSmall from '../static/wave/wave-s.svg?sprite';

export const WaveS = styled(WaveSmall, {
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