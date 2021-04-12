import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';
import WaveMedium from '../static/wave/wave-m.svg?sprite';

export const WaveM = styled(WaveMedium, {
    width: '100%',
    variants: {
        color: {
            primary: {
                color: theme.Color.Primary.Default,
            },
            secondary: {
                color: theme.Color.Secondary.Default,
            },
            tertiary: {
                color: theme.Color.Tertiary.Default,
            },
            white: {
                color: theme.Color.White,
            },
        }
    },
})