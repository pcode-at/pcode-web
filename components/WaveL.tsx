import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';
import WaveLarge from '../static/wave/wave-l.svg?sprite';

export const WaveL = styled(WaveLarge, {
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