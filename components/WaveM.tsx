import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';
import WaveMedium from '../static/wave/wave-m.svg?sprite';

export const WaveM = styled(WaveMedium, {
    width: '100%',
    variants: {
        color: {
            blue: {
                color: theme.Wave.Color.Blue,
            },
            green: {
                color: theme.Wave.Color.Green,
            },
            red: {
                color: theme.Wave.Color.Red,
            },
            white: {
                color: theme.Wave.Color.White,
            },
        }
    },
})