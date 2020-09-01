import { Color } from './Color.enum';
import React from 'react';

const breakpoints = ['768px', '1024px'];

export const theme = {
    colors: {
        [Color.Primary]: '#F73859',
        [Color.Secondary]: '#263958',
        [Color.Secondary2]: '#7AC7C4',
        [Color.White]: '#fff',
    },
    font: {
        light: {
            fontFamily: 'raleway',
            fontWeight: 300,
            lineHeight: 1.333,
        },
        normal: {
            fontFamily: 'raleway',
            fontWeight: 400,
            lineHeight: 1.333,
        },
    },
    fonts: {
        light: 'raleway',
        normal: 'raleway',
    },
    fontWeights: {
        light: 300,
        normal: 400,
    },
    lineHeights: {
        light: 1.333,
        normal: 1.333,
    },
    radii: {
        default: 4,
    },
    shadows: {
        card: '0 0 4px rgba(0, 0, 0, .125)',
    },
    variants: {
        card: {
            p: 3,
            borderRadius: 'default',
            bg: 'white',
            boxShadow: 'card',
        },
        badge: {
            color: 'white',
            bg: 'primary',
            p: 1,
            borderRadius: 'default',
        },
    },
    breakpoints: {
        allDevices: '200px',
        tablet: '768px',
        desktop: '1024px',
    },
    fontSizes: {
        helperText: 16,
        paragraph: 21.33,
        headline5: 28.43,
        headline4: 37.9,
        headline3: 50.52,
        headline2: 67.34,
        headline1: 89.76,
    },
    space: {
        extraSmall: 4,
        small: 8,
        medium: 16,
        large: 32,
        extraLarge: 64,
    },
    mediaQueries: {
        tablet: `@media screen and (min-width: ${breakpoints[0]})`,
        desktop: `@media screen and (min-width: ${breakpoints[1]})`,
    },
};
