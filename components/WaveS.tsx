import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';
import WaveSmall from '../static/wave/wave-s.svg?sprite';

export const WaveS = styled(WaveSmall, {
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
        },
    },
})